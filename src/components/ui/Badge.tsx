"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "engineering"
  | "design"
  | "marketing"
  | "remote"
  | "fulltime"
  | "parttime"
  | "contract"
  | "internship"
  | "success"
  | "warning"
  | "danger";

type BadgeSize = "sm" | "md";

interface BadgeProps {
  variant: BadgeVariant;
  size?: BadgeSize;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-primary-tertiary text-primary border border-primary-tertiary",
  engineering: "bg-primary-tertiary text-primary border border-primary-tertiary",
  design: "bg-primary-secondary text-primary border border-primary-secondary",
  marketing: "bg-accent-blue/15 text-accent-blue border border-accent-blue/25",
  remote: "bg-[#F8F8FD] text-text-primary border border-border",
  fulltime: "bg-accent-green/15 text-[#449B82] border border-accent-green/25",
  parttime: "bg-accent-yellow/15 text-accent-yellow border border-accent-yellow/25",
  contract: "bg-accent-purple/15 text-accent-purple border border-accent-purple/25",
  internship: "bg-[#26A4FF]/10 text-accent-blue border border-[#26A4FF]/20",
  success: "bg-accent-green/15 text-[#449B82] border border-accent-green/25",
  warning: "bg-accent-yellow/15 text-accent-yellow border border-accent-yellow/25",
  danger: "bg-accent-red/15 text-accent-red border border-accent-red/25",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2.5 py-1 text-xs rounded-[12.533332824707031px]",
  md: "px-3 py-1.5 text-sm rounded-[12.533332824707031px]",
};

export default function Badge({
  variant,
  size = "md",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium leading-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
