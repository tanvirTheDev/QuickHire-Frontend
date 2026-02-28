"use client";

import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, leftIcon, rightIcon, className, id, ...props }, ref) => {
    const hasError = Boolean(error);
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full space-y-1.5">
        {label ? (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-text-primary"
          >
            {label}
          </label>
        ) : null}

        <div className="relative">
          {leftIcon ? (
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              {leftIcon}
            </span>
          ) : null}

          <input
            ref={ref}
            id={inputId}
            className={cn(
              "h-11 w-full rounded-sm border bg-white px-3 text-base text-text-primary",
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
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
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

Input.displayName = "Input";

export default Input;
