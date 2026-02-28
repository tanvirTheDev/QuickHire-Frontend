"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Spinner from "./Spinner";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-[#3F38CA] focus-visible:ring-primary border border-transparent",
  secondary:
    "bg-primary-secondary text-primary hover:bg-[#B8B8EE] focus-visible:ring-primary border border-transparent",
  outline:
    "bg-white text-text-primary border border-border hover:bg-background-muted focus-visible:ring-primary",
  ghost:
    "bg-transparent text-text-secondary border border-transparent hover:bg-background-muted focus-visible:ring-primary",
  danger:
    "bg-accent-red text-white hover:bg-[#E85C49] focus-visible:ring-accent-red border border-transparent",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm rounded-sm gap-1.5",
  md: "h-11 px-4 text-base rounded-sm gap-2",
  lg: "h-12 px-6 text-[18px] rounded-sm gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      <button
        disabled={isDisabled}
        className={cn(
          "inline-flex items-center justify-center font-semibold leading-none transition-all duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-60",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {isLoading ? <Spinner size="sm" className="text-current" /> : leftIcon}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    </motion.div>
  );
}
