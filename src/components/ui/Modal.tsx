"use client";

import { ReactNode, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type ModalSize = "sm" | "md" | "lg" | "xl";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  size?: ModalSize;
  showCloseButton?: boolean;
}

const sizeClasses: Record<ModalSize, string> = {
  sm: "sm:max-w-md",
  md: "sm:max-w-xl",
  lg: "sm:max-w-3xl",
  xl: "sm:max-w-5xl",
};

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
  showCloseButton = true,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const portalTarget = useMemo(
    () => (typeof window !== "undefined" ? document.body : null),
    []
  );

  if (!portalTarget) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-0 sm:p-4"
          onMouseDown={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(event) => event.stopPropagation()}
            className={cn(
              "relative h-full w-full max-w-full rounded-none bg-white",
              "sm:h-auto sm:rounded-[12.533332824707031px] sm:border sm:border-border",
              sizeClasses[size]
            )}
          >
            {(title || description || showCloseButton) && (
              <div className="flex items-start justify-between border-b border-border p-4 sm:p-6">
                <div className="space-y-1">
                  {title ? (
                    <h2 className="font-display text-xl font-semibold text-text-primary">
                      {title}
                    </h2>
                  ) : null}
                  {description ? (
                    <p className="text-sm text-text-muted">{description}</p>
                  ) : null}
                </div>
                {showCloseButton ? (
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-sm p-1 text-text-muted transition-colors hover:bg-background-muted hover:text-text-primary"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                ) : null}
              </div>
            )}

            <div className="p-4 sm:p-6">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    portalTarget
  );
}
