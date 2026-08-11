<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\IcapKnowledgeService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class IcapChatbotController extends Controller
{
    protected IcapKnowledgeService $knowledgeService;

    public function __construct(IcapKnowledgeService $knowledgeService)
    {
        $this->knowledgeService = $knowledgeService;
    }

    /**
     * Get starter suggestion prompts for the chatbot UI.
     */
    public function getSuggestions(): JsonResponse
    {
        return response()->json([
            'status' => 'success',
            'suggestions' => $this->knowledgeService->getStarterSuggestions()
        ]);
    }

    /**
     * Process student query and call Google Gemini API.
     */
    public function chat(Request $request): JsonResponse
    {
        $request->validate([
            'message' => 'required|string|max:4000',
            'history' => 'nullable|array',
            'history.*.role' => 'required_with:history|string|in:user,model,assistant',
            'history.*.content' => 'required_with:history|string',
        ]);

        $userMessage = trim($request->input('message'));
        $rawHistory = $request->input('history', []);

        $apiKey = config('services.gemini.key');
        $model = config('services.gemini.model', 'gemini-1.5-flash');

        // Check if API key is set
        if (empty($apiKey)) {
            return response()->json([
                'status' => 'success',
                'reply' => "⚠️ **Google Gemini API Key Not Configured Yet**\n\nTo enable live AI answers, please add your `GEMINI_API_KEY` into your project's `.env` file.\n\n*However, here is a quick answer from the ICAP Knowledge Base:*\n" . $this->getStaticFallbackAnswer($userMessage),
                'is_fallback' => true
            ]);
        }

        try {
            $contents = [];

            // Add conversation history if present
            foreach ($rawHistory as $msg) {
                $role = ($msg['role'] === 'assistant' || $msg['role'] === 'model') ? 'model' : 'user';
                $contents[] = [
                    'role' => $role,
                    'parts' => [
                        ['text' => $msg['content']]
                    ]
                ];
            }

            // Append current message
            $contents[] = [
                'role' => 'user',
                'parts' => [
                    ['text' => $userMessage]
                ]
            ];

            $systemInstructionText = $this->knowledgeService->getSystemInstruction();

            $payload = [
                'system_instruction' => [
                    'parts' => [
                        ['text' => $systemInstructionText]
                    ]
                ],
                'contents' => $contents,
                'generationConfig' => [
                    'temperature' => 0.4,
                    'topK' => 40,
                    'topP' => 0.95,
                    'maxOutputTokens' => 2048,
                ]
            ];

            $candidateModels = array_unique(array_filter([
                $model,
                'gemini-2.5-flash',
                'gemini-2.0-flash',
                'gemini-1.5-flash-latest',
                'gemini-1.5-pro',
                'gemini-flash'
            ]));

            $response = null;
            $successfulModel = null;
            $lastErrorMessage = '';

            foreach ($candidateModels as $currentModel) {
                $url = "https://generativelanguage.googleapis.com/v1beta/models/{$currentModel}:generateContent?key={$apiKey}";

                $res = Http::timeout(30)
                    ->withHeaders(['Content-Type' => 'application/json'])
                    ->post($url, $payload);

                if ($res->successful()) {
                    $response = $res;
                    $successfulModel = $currentModel;
                    break;
                } else {
                    $lastErrorMessage = $res->json('error.message') ?? $res->body();
                    // If error is not model-not-found (e.g. invalid key), no need to loop through models
                    if (!str_contains($lastErrorMessage, 'not found') && !str_contains($lastErrorMessage, 'is not supported')) {
                        $response = $res;
                        break;
                    }
                }
            }

            if ($response && $response->successful()) {
                $responseData = $response->json();
                $reply = $responseData['candidates'][0]['content']['parts'][0]['text'] ?? "I apologize, I could not process your request at this time. Please try again.";

                return response()->json([
                    'status' => 'success',
                    'reply' => $reply,
                    'model' => $successfulModel
                ]);
            } else {
                Log::error('Gemini API Error: ' . $lastErrorMessage);
                return response()->json([
                    'status' => 'error',
                    'reply' => "⚠️ **Error reaching Google Gemini AI Service**: " . ($lastErrorMessage ?: 'HTTP Error'),
                ], 500);
            }
        } catch (\Exception $e) {
            Log::error('IcapChatbot Exception: ' . $e->getMessage());
            return response()->json([
                'status' => 'error',
                'reply' => "⚠️ An error occurred while generating response: " . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Provide intelligent static responses when API key is missing.
     */
    private function getStaticFallbackAnswer(string $message): string
    {
        $msgLower = strtolower($message);

        if (str_contains($msgLower, 'exemption') || str_contains($msgLower, 'a-level') || str_contains($msgLower, 'acca') || str_contains($msgLower, 'bs')) {
            return "### 🎓 ICAP Exemption Policy Overview:\n\n- **A-Levels / HSSC**: High grades (80%+ in Intermediate or A's in A-Levels) grant exemption in PRC-1 (Business Comm) & PRC-2 (Quantitative Methods).\n- **BS / BBA Graduates**: Graduates from ICAP Recognized Universities get up to all 5 PRC subjects + specific CAF exemptions based on transcript mapping.\n- **ACCA Members**: Eligible for full PRC exemption + up to 5 CAF exemptions (CAF-1, CAF-2, CAF-3, CAF-4, CAF-8).\n\n*Submit official transcripts to ICAP Exemption Department for final certificate evaluation.*";
        }

        if (str_contains($msgLower, 'caf') || str_contains($msgLower, 'prc') || str_contains($msgLower, 'cfap') || str_contains($msgLower, 'subject')) {
            return "### 📚 ICAP CA Education Levels:\n\n1. **PRC Level (5 CBE Papers)**: PRC-1 to PRC-5 (Monthly exams, 50% passing).\n2. **CAF Level (8 Written Papers)**:\n   - *Group A*: CAF-1 (FAR-1), CAF-2 (Tax), CAF-3 (Costing), CAF-4 (Business Law).\n   - *Group B*: CAF-5 (FAR-2), CAF-6 (MFA), CAF-7 (Company Law), CAF-8 (Audit).\n3. **CFAP (6 Advanced Papers)** & **MSA (2 Case Studies)**.";
        }

        if (str_contains($msgLower, 'article') || str_contains($msgLower, 'training') || str_contains($msgLower, 'stipend') || str_contains($msgLower, 'toas')) {
            return "### 🏢 ICAP Articleship & Training Rules:\n\n- **Duration**: 3.5 Years (42 Months) after passing CAF in Category A/B accounting firms or TOAS.\n- **Stipends**: Set minimum stipends mandated by ICAP with annual increments.\n- **Logbook**: Mandatory recording of training hours in ICAP PIRT portal.";
        }

        return "Welcome to **ICAP CA Pakistan Assistant**! You can ask me anything about ICAP CA rules, PRC/CAF/CFAP subjects, exemption policies, past paper strategies, and articleship regulations.";
    }
}
