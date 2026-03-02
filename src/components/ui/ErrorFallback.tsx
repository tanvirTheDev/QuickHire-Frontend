"use client";

import { AlertTriangle } from "lucide-react";
import Button from "./Button";

interface ErrorFallbackProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorFallback({
  message = "Something went wrong. Please try again.",
  onRetry,
}: ErrorFallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[31.333332061767578px] border border-accent-red/25 bg-accent-red/10 px-6 py-10 text-center">
      <AlertTriangle className="mb-3 h-6 w-6 text-accent-red" />
      <p className="text-base text-text-primary">{message}</p>
      {onRetry ? (
        <Button variant="danger" onClick={onRetry} className="mt-4">
          Retry
        </Button>
      ) : null}
    </div>
  );
}
