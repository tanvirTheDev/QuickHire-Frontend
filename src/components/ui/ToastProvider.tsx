"use client";

import { ReactNode, useCallback, useMemo, useState } from "react";
import { ToastContainer } from "./Toast";
import { ToastContext, ToastItem, ToastType } from "@/hooks/useToast";

interface ToastProviderProps {
  children: ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const createToast = useCallback((type: ToastType, message: string) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

    setToasts((prev) => [...prev, { id, type, message }]);

    window.setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 4000);
  }, []);

  const value = useMemo(
    () => ({
      toasts,
      dismiss,
      toast: {
        success: (message: string) => createToast("success", message),
        error: (message: string) => createToast("error", message),
        info: (message: string) => createToast("info", message),
        warning: (message: string) => createToast("warning", message),
      },
    }),
    [toasts, dismiss, createToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
}
