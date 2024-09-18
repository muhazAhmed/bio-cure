import { useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { Toast } from '@/lib/utils';

interface UseApiOptions {
    onSuccess?: (data: any) => void;
    onError?: (error: any) => void;
}

export const useApi = (options?: UseApiOptions) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const callApi = async (url: string, config: AxiosRequestConfig) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios(url, config);
            if (options?.onSuccess) {
                options.onSuccess(response.data);
            }
            return response.data;
        } catch (err: any) {
            const errorMessage = err?.response?.data?.message || 'Something went wrong';
            setError(errorMessage);
            Toast(errorMessage, "error");
            if (options?.onError) {
                options.onError(err);
            }
            return null;
        } finally {
            setLoading(false);
        }
    }
    return { loading, error, callApi };
}