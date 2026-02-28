"use client";

import { cn } from "@/lib/utils";

type SkeletonRounded = "sm" | "md" | "lg" | "full";

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: SkeletonRounded;
}

const roundedClasses: Record<SkeletonRounded, string> = {
  sm: "rounded-sm",
  md: "rounded-[12.533332824707031px]",
  lg: "rounded-[31.333332061767578px]",
  full: "rounded-full",
};

export default function Skeleton({
  className,
  width,
  height,
  rounded = "md",
}: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse bg-gray-200", roundedClasses[rounded], className)}
      style={{ width, height }}
    />
  );
}
