"use client";

import { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
}

export default function Select({
  label,
  error,
  options,
  placeholder = "Select an option",
  className,
  id,
  ...props
}: SelectProps) {
  const hasError = Boolean(error);
  const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full space-y-1.5">
      {label ? (
        <label htmlFor={selectId} className="block text-sm font-medium text-text-primary">
          {label}
        </label>
      ) : null}

      <div className="relative">
        <select
          id={selectId}
          className={cn(
            "h-11 w-full appearance-none rounded-sm border bg-white px-3 pr-10 text-base text-text-primary",
            "transition-all duration-150 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
            hasError
              ? "border-accent-red focus:border-accent-red focus:ring-accent-red/20"
              : "border-border",
            className
          )}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
      </div>

      {hasError ? <p className="text-sm text-accent-red">{error}</p> : null}
    </div>
  );
}
