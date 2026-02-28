"use client";

import { forwardRef, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  rows?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className,
      id,
      rows = 4,
      onInput,
      ...props
    },
    ref
  ) => {
    const hasError = Boolean(error);
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full space-y-1.5">
        {label ? (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-text-primary"
          >
            {label}
          </label>
        ) : null}

        <div className="relative">
          {leftIcon ? (
            <span className="pointer-events-none absolute left-3 top-4 text-text-muted">
              {leftIcon}
            </span>
          ) : null}

          <textarea
            ref={ref}
            id={textareaId}
            rows={rows}
            onInput={(event) => {
              const target = event.currentTarget;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
              onInput?.(event);
            }}
            className={cn(
              "min-h-[120px] w-full resize-none rounded-sm border bg-white px-3 py-2.5 text-base text-text-primary",
              "placeholder:text-text-muted transition-all duration-150 outline-none",
              "focus:ring-2 focus:ring-primary/20 focus:border-primary",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              hasError
                ? "border-accent-red focus:border-accent-red focus:ring-accent-red/20"
                : "border-border",
              className
            )}
            {...props}
          />

          {rightIcon ? (
            <span className="pointer-events-none absolute right-3 top-4 text-text-muted">
              {rightIcon}
            </span>
          ) : null}
        </div>

        {hasError ? (
          <p className="text-sm text-accent-red">{error}</p>
        ) : helperText ? (
          <p className="text-sm text-text-muted">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
