import Swal from 'sweetalert2';

export const useSwal = () => {
    const showSuccess = (title: string, text?: string) => {
        return Swal.fire({
            icon: 'success',
            title,
            text,
            confirmButtonColor: '#2563eb', // blue-600
            timer: 2000,
            timerProgressBar: true,
        });
    };

    const showError = (title: string, text?: string) => {
        return Swal.fire({
            icon: 'error',
            title,
            text,
            confirmButtonColor: '#dc2626', // red-600
        });
    };

    const showWarning = (title: string, text?: string) => {
        return Swal.fire({
            icon: 'warning',
            title,
            text,
            confirmButtonColor: '#d97706', // amber-600
        });
    };

    const showConfirm = async (title: string, text: string, confirmButtonText: string = 'Yes, confirm') => {
        const result = await Swal.fire({
            title,
            text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2563eb',
            cancelButtonColor: '#dc2626',
            confirmButtonText,
        });
        return result.isConfirmed;
    };

    return {
        Swal,
        showSuccess,
        showError,
        showWarning,
        showConfirm,
    };
};
