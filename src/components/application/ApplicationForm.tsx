"use client";

import { useMemo, useState } from "react";
import EmptyState from "@/components/ui/EmptyState";
import Modal from "@/components/ui/Modal";
import Spinner from "@/components/ui/Spinner";
import { formatRelativeDate } from "@/lib/utils";
import type { Application } from "@/types";

interface ApplicationFormProps {
  applications: Application[];
  isLoading: boolean;
  isError: boolean;
}

const fallbackJobInfo = {
  id: "",
  title: "Unknown job",
  company: "Unknown company",
  location: "Unknown location",
};

function getApplicationJobInfo(application: Application) {
  if (typeof application.jobId === "string") {
    return { ...fallbackJobInfo, id: application.jobId };
  }

  return {
    id: application.jobId._id,
    title: application.jobId.title,
    company: application.jobId.company,
    location: application.jobId.location,
  };
}

export default function ApplicationForm({
  applications,
  isLoading,
  isError,
}: ApplicationFormProps) {
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(
    null
  );

  const selectedJobInfo = useMemo(
    () =>
      selectedApplication ? getApplicationJobInfo(selectedApplication) : fallbackJobInfo,
    [selectedApplication]
  );

  return (
    <>
      <div className="rounded-sm border border-border bg-white p-6 sm:p-8 lg:col-span-2">
        <h2 className="font-display text-[30px] font-semibold leading-[1.1] text-text-primary">
          Applications
        </h2>
        <p className="mt-2 font-body text-base text-text-muted">
          Click a candidate to view full application details.
        </p>

        <div className="mt-6 space-y-3">
          {isLoading ? (
            <div className="flex min-h-[220px] items-center justify-center">
              <Spinner />
            </div>
          ) : isError ? (
            <EmptyState
              title="Unable to load applications"
              description="Please refresh and try again."
            />
          ) : applications.length === 0 ? (
            <EmptyState
              title="No applications yet"
              description="Candidate applications will appear here."
            />
          ) : (
            applications.map((application) => {
              const jobInfo = getApplicationJobInfo(application);

              return (
                <button
                  key={application._id}
                  type="button"
                  onClick={() => setSelectedApplication(application)}
                  className="flex w-full items-center justify-between gap-4 rounded-sm border border-border bg-white p-4 text-left transition-colors hover:bg-background-muted"
                >
                  <div className="min-w-0">
                    <p className="truncate font-body text-base font-semibold text-text-primary">
                      {application.name}
                    </p>
                    <p className="truncate font-body text-sm text-text-secondary">
                      {application.email}
                    </p>
                    <p className="truncate font-body text-sm text-text-muted">
                      {jobInfo.title} • {jobInfo.company}
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {application.status}
                  </span>
                </button>
              );
            })
          )}
        </div>
      </div>

      <Modal
        isOpen={Boolean(selectedApplication)}
        onClose={() => setSelectedApplication(null)}
        title="Candidate Application"
        description="Full applicant details"
        size="lg"
      >
        {selectedApplication ? (
          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-text-muted">Candidate Name</p>
                <p className="font-semibold text-text-primary">{selectedApplication.name}</p>
              </div>
              <div>
                <p className="text-sm text-text-muted">Email</p>
                <p className="font-semibold text-text-primary">{selectedApplication.email}</p>
              </div>
              <div>
                <p className="text-sm text-text-muted">Status</p>
                <p className="font-semibold capitalize text-text-primary">
                  {selectedApplication.status}
                </p>
              </div>
              <div>
                <p className="text-sm text-text-muted">Applied</p>
                <p className="font-semibold text-text-primary">
                  {formatRelativeDate(selectedApplication.createdAt)}
                </p>
              </div>
            </div>

            <div className="rounded-sm border border-border p-4">
              <p className="text-sm text-text-muted">Applied Job</p>
              <p className="font-semibold text-text-primary">{selectedJobInfo.title}</p>
              <p className="text-sm text-text-secondary">
                {selectedJobInfo.company} • {selectedJobInfo.location}
              </p>
            </div>

            <div>
              <p className="text-sm text-text-muted">Resume Link</p>
              <a
                href={selectedApplication.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="break-all font-semibold text-primary hover:underline"
              >
                {selectedApplication.resumeLink}
              </a>
            </div>

            <div>
              <p className="text-sm text-text-muted">Cover Note</p>
              <p className="mt-1 whitespace-pre-wrap rounded-sm border border-border p-4 text-text-secondary">
                {selectedApplication.coverNote || "No cover note provided."}
              </p>
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}
