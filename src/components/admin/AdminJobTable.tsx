"use client";

import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";
import Spinner from "@/components/ui/Spinner";
import type { Job } from "@/types";

interface AdminJobTableProps {
  jobs: Job[];
  isLoading: boolean;
  isError: boolean;
  isDeleting: boolean;
  onDelete: (id: string) => void;
}

export default function AdminJobTable({
  jobs,
  isLoading,
  isError,
  isDeleting,
  onDelete,
}: AdminJobTableProps) {
  return (
    <div className="rounded-sm border border-border bg-white p-6 sm:p-8">
      <h2 className="font-display text-[30px] font-semibold leading-[1.1] text-text-primary">
        Manage Jobs
      </h2>
      <p className="mt-2 font-body text-base text-text-muted">
        Delete existing job listings.
      </p>

      <div className="mt-6 space-y-3">
        {isLoading ? (
          <div className="flex min-h-[220px] items-center justify-center">
            <Spinner />
          </div>
        ) : isError ? (
          <EmptyState title="Unable to load jobs" description="Please refresh the page." />
        ) : jobs.length === 0 ? (
          <EmptyState title="No jobs found" description="Add a job to get started." />
        ) : (
          jobs.map((job) => (
            <div
              key={job._id}
              className="flex items-center justify-between gap-4 rounded-sm border border-border bg-white p-4"
            >
              <div className="min-w-0">
                <p className="truncate font-body text-base font-semibold text-text-primary">
                  {job.title}
                </p>
                <p className="truncate font-body text-sm text-text-secondary">
                  {job.company} • {job.location}
                </p>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => onDelete(job._id)}
                disabled={isDeleting}
              >
                Delete
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
