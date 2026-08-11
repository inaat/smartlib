<template>
  <div class="fixed bottom-5 right-5 z-50 font-outfit">
    <!-- Floating Launcher Button -->
    <button
      v-if="!isOpen"
      @click="toggleChat"
      class="group relative flex items-center gap-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4.5 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20 cursor-pointer"
      aria-label="Open ICAP AI Assistant"
    >
      <div class="relative">
        <div class="w-8.5 h-8.5 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
          <GraduationCap class="w-5 h-5 text-white animate-pulse" />
        </div>
        <span class="absolute -top-1 -right-1 flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border-2 border-white"></span>
        </span>
      </div>
      <div class="text-left pr-1">
        <div class="text-[10px] font-bold tracking-wider uppercase text-blue-100">ICAP Assistant</div>
        <div class="text-xs font-bold text-white">Ask CA Rules & Papers</div>
      </div>
    </button>

    <!-- Chatbot Window -->
    <transition
      enter-active-class="transition duration-300 ease-out transform"
      enter-from-class="opacity-0 translate-y-8 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in transform"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-8 scale-95"
    >
      <div
        v-if="isOpen"
        class="w-[92vw] sm:w-[410px] h-[570px] max-h-[85vh] bg-white border border-slate-200/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-800 font-outfit"
      >
        <!-- Header -->
        <div class="bg-blue-600 px-4 py-3.5 flex items-center justify-between shadow-sm">
          <div class="flex items-center gap-3">
            <div class="w-9.5 h-9.5 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner border border-white/20">
              <GraduationCap class="w-5 h-5 text-white" />
            </div>
            <div class="text-left">
              <div class="flex items-center gap-2">
                <h3 class="font-bold text-sm text-white tracking-tight">ICAP CA Assistant</h3>
                <span class="text-[10px] bg-white/20 text-white font-bold px-2 py-0.5 rounded-full backdrop-blur-md border border-white/20">
                  Gemini AI
                </span>
              </div>
              <p class="text-[11px] text-blue-100/90 font-medium">Rules, Syllabus, Exemptions & Past Papers</p>
            </div>
          </div>

          <div class="flex items-center gap-1">
            <button
              @click="clearChat"
              title="Clear Conversation"
              class="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-all cursor-pointer"
            >
              <RotateCcw class="w-4 h-4" />
            </button>
            <button
              @click="toggleChat"
              title="Close"
              class="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-all cursor-pointer"
            >
              <X class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Chat Messages Area -->
        <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth bg-slate-50/60">
          <!-- Welcome Message -->
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-xl bg-blue-100 border border-blue-200/80 flex items-center justify-center shrink-0 shadow-xs">
              <Sparkles class="w-4 h-4 text-blue-600" />
            </div>
            <div class="bg-white border border-slate-200/80 rounded-2xl rounded-tl-none p-3.5 text-xs leading-relaxed text-slate-700 max-w-[85%] shadow-xs text-left">
              <p class="font-bold text-blue-600 mb-1 flex items-center gap-1.5">
                <span>Assalam-o-Alaikum! 🇵🇰</span>
              </p>
              <p class="font-semibold text-slate-800">I am your ICAP CA Pakistan AI Assistant.</p>
              <p class="mt-1.5 text-slate-600 font-normal">
                Ask me anything about <strong class="text-slate-800">PRC, CAF, CFAP, MSA subjects</strong>, <strong class="text-slate-800">exemption rules</strong>, <strong class="text-slate-800">articleship guidelines</strong>, or <strong class="text-slate-800">past paper strategies</strong>!
              </p>
            </div>
          </div>

          <!-- Messages Thread -->
          <div
            v-for="(msg, index) in messages"
            :key="index"
            class="flex items-start gap-3"
            :class="msg.role === 'user' ? 'flex-row-reverse' : ''"
          >
            <!-- Avatar -->
            <div
              class="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold shadow-xs"
              :class="msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-blue-100 border border-blue-200 text-blue-700'"
            >
              <User v-if="msg.role === 'user'" class="w-4 h-4" />
              <Bot v-else class="w-4 h-4" />
            </div>

            <!-- Bubble -->
            <div
              class="rounded-2xl p-3.5 text-xs leading-relaxed max-w-[85%] shadow-xs overflow-x-auto text-left"
              :class="
                msg.role === 'user'
                  ? 'bg-blue-600 text-white font-medium rounded-tr-none'
                  : 'bg-white border border-slate-200/80 text-slate-700 rounded-tl-none prose max-w-none'
              "
            >
              <div v-if="msg.role === 'user'">{{ msg.content }}</div>
              <div v-else class="markdown-body" v-html="renderMarkdown(msg.content)"></div>
            </div>
          </div>

          <!-- Loading Indicator -->
          <div v-if="isLoading" class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0">
              <Bot class="w-4 h-4 text-blue-700" />
            </div>
            <div class="bg-white border border-slate-200/80 rounded-2xl rounded-tl-none p-3.5 text-xs text-slate-500 flex items-center gap-2 shadow-xs">
              <span class="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              <span class="animate-pulse font-medium text-slate-600">Consulting ICAP Knowledge Base...</span>
            </div>
          </div>
        </div>

        <!-- Suggestion Chips -->
        <div v-if="suggestions.length > 0 && messages.length <= 2" class="px-3 py-2.5 bg-white border-t border-slate-100 overflow-x-auto text-left">
          <div class="text-[10px] uppercase font-bold text-slate-400 mb-1.5 px-1 tracking-wider">Suggested Questions:</div>
          <div class="flex gap-2 pb-0.5">
            <button
              v-for="item in suggestions"
              :key="item.id"
              @click="sendSuggestedPrompt(item.prompt)"
              class="shrink-0 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200/70 hover:border-blue-300 text-[11px] font-semibold px-3 py-1 rounded-full transition-all duration-200 cursor-pointer text-left shadow-2xs"
            >
              {{ item.label }}
            </button>
          </div>
        </div>

        <!-- Input Box Area -->
        <div class="p-3 bg-white border-t border-slate-100 flex flex-col gap-2">
          <form @submit.prevent="sendMessage" class="flex items-center gap-2">
            <input
              v-model="inputQuery"
              type="text"
              placeholder="Ask ICAP rules, exemptions, or subject questions..."
              :disabled="isLoading"
              class="flex-1 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400"
            />
            <button
              type="submit"
              :disabled="isLoading || !inputQuery.trim()"
              class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 text-white p-2.5 rounded-xl transition-all shadow-md flex items-center justify-center shrink-0 cursor-pointer"
            >
              <Send class="w-4 h-4" />
            </button>
          </form>
          <div class="text-[10px] text-center text-slate-400 font-medium flex items-center justify-center gap-1">
            <ShieldCheck class="w-3.5 h-3.5 text-blue-600" />
            <span>Trained on ICAP Education Directives & Syllabi</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue';
import axios from 'axios';
import {
  GraduationCap,
  Sparkles,
  User,
  Bot,
  Send,
  X,
  RotateCcw,
  ShieldCheck
} from 'lucide-vue-next';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface Suggestion {
  id: string;
  label: string;
  prompt: string;
}

const isOpen = ref(false);
const isLoading = ref(false);
const inputQuery = ref('');
const messages = ref<Message[]>([]);
const suggestions = ref<Suggestion[]>([]);
const messagesContainer = ref<HTMLElement | null>(null);

const toggleChat = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value && suggestions.value.length === 0) {
    fetchSuggestions();
  }
};

const clearChat = () => {
  messages.value = [];
};

const fetchSuggestions = async () => {
  try {
    const response = await axios.get('/api/icap-assistant/suggestions');
    if (response.data && response.data.suggestions) {
      suggestions.value = response.data.suggestions;
    }
  } catch (error) {
    console.error('Failed to load suggestions:', error);
  }
};

const sendSuggestedPrompt = (prompt: string) => {
  inputQuery.value = prompt;
  sendMessage();
};

const sendMessage = async () => {
  const query = inputQuery.value.trim();
  if (!query || isLoading.value) return;

  // Add user message
  messages.value.push({ role: 'user', content: query });
  inputQuery.value = '';
  isLoading.value = true;
  scrollToBottom();

  try {
    const historyPayload = messages.value.slice(-6).map((m) => ({
      role: m.role,
      content: m.content
    }));

    const response = await axios.post('/api/icap-assistant/chat', {
      message: query,
      history: historyPayload
    });

    if (response.data && response.data.reply) {
      messages.value.push({
        role: 'assistant',
        content: response.data.reply
      });
    } else {
      messages.value.push({
        role: 'assistant',
        content: 'I could not process your query right now. Please try again.'
      });
    }
  } catch (error: any) {
    console.error('Error calling ICAP Chatbot:', error);
    const errReply =
      error.response?.data?.reply ||
      '⚠️ Network connection error. Please verify server connection and try again.';
    messages.value.push({
      role: 'assistant',
      content: errReply
    });
  } finally {
    isLoading.value = false;
    scrollToBottom();
  }
};

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};

/**
 * Lightweight safe Markdown renderer for formatting ICAP AI responses
 */
const renderMarkdown = (text: string): string => {
  if (!text) return '';

  let html = text
    // Escape standard tags
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Headers
    .replace(/^### (.*$)/gim, '<h4 class="font-bold text-slate-800 text-xs mt-2.5 mb-1">$1</h4>')
    .replace(/^## (.*$)/gim, '<h3 class="font-bold text-blue-700 text-sm mt-3 mb-1.5">$1</h3>')
    .replace(/^# (.*$)/gim, '<h2 class="font-extrabold text-slate-900 text-base mt-3 mb-2">$1</h2>')
    // Bold & Italics
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-800">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-slate-600">$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-[11px] font-mono border border-blue-100">$1</code>')
    // Bullet points
    .replace(/^\s*[-*]\s+(.*$)/gim, '<li class="ml-3 list-disc text-slate-700 my-0.5">$1</li>')
    // Line breaks
    .replace(/\n/g, '<br/>');

  return html;
};

onMounted(() => {
  fetchSuggestions();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

.font-outfit {
  font-family: 'Outfit', sans-serif;
}

.markdown-body :deep(h2),
.markdown-body :deep(h3),
.markdown-body :deep(h4) {
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
}
.markdown-body :deep(li) {
  margin-bottom: 0.2rem;
}
</style>
