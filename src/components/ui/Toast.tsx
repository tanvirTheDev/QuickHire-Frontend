"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, AlertTriangle, CheckCircle2, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ToastItem, ToastType } from "@/hooks/useToast";

interface ToastContainerProps {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}

const iconMap: Record<ToastType, ReactNode> = {
  success: <CheckCircle2 className="h-5 w-5 text-accent-green" />,
  error: <AlertCircle className="h-5 w-5 text-accent-red" />,
  info: <Info className="h-5 w-5 text-accent-blue" />,
  warning: <AlertTriangle className="h-5 w-5 text-accent-yellow" />,
};

const itemClassMap: Record<ToastType, string> = {
  success: "border-accent-green/30 bg-accent-green/10",
  error: "border-accent-red/30 bg-accent-red/10",
  info: "border-accent-blue/30 bg-accent-blue/10",
  warning: "border-accent-yellow/30 bg-accent-yellow/10",
};

export function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  return (
    <div className="pointer-events-none fixed right-4 top-4 z-50 flex w-full max-w-sm flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "pointer-events-auto flex items-start gap-3 rounded-[12.533332824707031px] border p-3 shadow-sm",
              itemClassMap[toast.type]
            )}
          >
            <span className="mt-0.5">{iconMap[toast.type]}</span>
            <p className="flex-1 text-sm text-text-primary">{toast.message}</p>
            <button
              type="button"
              onClick={() => onDismiss(toast.id)}
              aria-label="Dismiss toast"
              className="rounded-sm p-1 text-text-muted transition-colors hover:bg-white/60 hover:text-text-primary"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
