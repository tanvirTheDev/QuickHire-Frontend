"use client";

import { ReactNode } from "react";
import { Inbox } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./Button";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: { label: string; onClick: () => void };
  className?: string;
}

export default function EmptyState({
  title,
  description,
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-[31.333332061767578px] border border-border bg-background-muted px-6 py-12 text-center",
        className
      )}
    >
      <div className="mb-4 rounded-full bg-primary-tertiary p-3 text-primary">
        {icon || <Inbox className="h-6 w-6" />}
      </div>
      <h3 className="font-display text-2xl font-semibold text-text-primary">{title}</h3>
      {description ? (
        <p className="mt-2 max-w-md text-base text-text-muted">{description}</p>
      ) : null}
      {action ? (
        <Button onClick={action.onClick} className="mt-6">
          {action.label}
        </Button>
      ) : null}
    </div>
  );
}
