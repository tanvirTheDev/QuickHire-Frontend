"use client";

import type { Job } from "@/types";
import { cn } from "@/lib/utils";

type JobCardProps = {
  job: Job;
};

const categoryStyles: Record<string, string> = {
  Marketing: "bg-[#FCEED4] text-[#FFB836]",
  Design: "bg-[#D6F6E4] text-[#56CDAD]",
  Business: "bg-[#E9EBFD] text-primary",
  Technology: "bg-[#FDE1DE] text-[#FF6550]",
};

const getInitials = (company: string) =>
  company
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

const clampDescription = (description: string) => {
  if (description.length <= 72) return description;
  return `${description.slice(0, 72).trimEnd()}...`;
};

export default function JobCard({ job }: JobCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 border border-border bg-white p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#F8F8FD] font-body text-sm font-semibold text-text-primary">
          {getInitials(job.company)}
        </div>
        <span className="inline-flex items-center border border-primary bg-primary/10 px-3 py-1 text-sm font-normal leading-[1.6] text-primary">
          {job.type.replace("-", " ")}
        </span>
      </div>

      <div className="flex flex-col gap-0.5">
        <h3 className="font-body text-lg font-semibold leading-[1.6] text-text-primary">
          {job.title}
        </h3>
        <p className="font-body text-base font-normal leading-[1.6] text-text-secondary">
          {job.company} <span className="px-1 text-text-secondary/60">•</span>{" "}
          {job.location}
        </p>
      </div>

      <p className="font-body text-base font-normal leading-[1.6] text-text-muted">
        {clampDescription(job.description)}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold leading-[1.6]",
            categoryStyles[job.category] || "bg-[#E9EBFD] text-primary"
          )}
        >
          {job.category}
        </span>
      </div>
    </article>
  );
}
