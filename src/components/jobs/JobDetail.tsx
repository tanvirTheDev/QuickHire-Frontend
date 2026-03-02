"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { useGetJobByIdQuery } from "@/store/api/jobsApi";
import { useSubmitApplicationMutation } from "@/store/api/applicationsApi";
import Spinner from "@/components/ui/Spinner";
import EmptyState from "@/components/ui/EmptyState";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { applicationSchema } from "@/lib/validations";
import { useToast } from "@/hooks/useToast";

interface JobDetailProps {
  jobId: string;
}

interface FormState {
  name: string;
  email: string;
  resumeLink: string;
  coverNote: string;
}

export default function JobDetail({ jobId }: JobDetailProps) {
  const { toast } = useToast();
  const { data, isLoading, isError } = useGetJobByIdQuery(jobId, {
    skip: !jobId,
  });
  const [submitApplication, { isLoading: isSubmitting }] =
    useSubmitApplicationMutation();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    resumeLink: "",
    coverNote: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );

  const onFieldChange =
    (field: keyof FormState) =>
    (
      event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const parsed = applicationSchema.safeParse({
      name: form.name,
      email: form.email,
      resumeLink: form.resumeLink,
      coverNote: form.coverNote || undefined,
    });

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        resumeLink: fieldErrors.resumeLink?.[0],
        coverNote: fieldErrors.coverNote?.[0],
      });
      toast.error("Please fix form errors and try again.");
      return;
    }

    try {
      await submitApplication({
        jobId,
        name: form.name,
        email: form.email,
        resumeLink: form.resumeLink,
        coverNote: form.coverNote || undefined,
      }).unwrap();

      setForm({
        name: "",
        email: "",
        resumeLink: "",
        coverNote: "",
      });
      setErrors({});
      toast.success("Application submitted successfully.");
    } catch (_error) {
      toast.error("Failed to submit application. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[220px] items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (isError || !data?.data) {
    return (
      <EmptyState
        title="Job not found"
        description="This job might be removed or unavailable."
      />
    );
  }

  const job = data.data;

  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-8 px-5 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-sm border border-border bg-white p-6 sm:p-8">
          <h1 className="font-display text-[32px] font-semibold leading-[1.1] text-text-primary sm:text-[40px]">
            {job.title}
          </h1>
          <p className="mt-2 font-body text-base text-text-secondary">
            {job.company} <span className="px-1 text-text-muted">•</span> {job.location}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              {job.type}
            </span>
            <span className="inline-flex rounded-full bg-[#D6F6E4] px-4 py-1 text-sm font-semibold text-[#56CDAD]">
              {job.category}
            </span>
            {job.salary ? (
              <span className="inline-flex rounded-full bg-[#E9EBFD] px-4 py-1 text-sm font-semibold text-primary">
                {job.salary}
              </span>
            ) : null}
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h2 className="font-display text-2xl font-semibold text-text-primary">
                Job Description
              </h2>
              <p className="mt-2 whitespace-pre-wrap font-body text-base leading-[1.7] text-text-muted">
                {job.description}
              </p>
            </div>

            {job.requirements ? (
              <div>
                <h2 className="font-display text-2xl font-semibold text-text-primary">
                  Requirements
                </h2>
                <p className="mt-2 whitespace-pre-wrap font-body text-base leading-[1.7] text-text-muted">
                  {job.requirements}
                </p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="h-fit rounded-sm border border-border bg-white p-6 sm:p-8">
          <h2 className="font-display text-[30px] font-semibold leading-[1.1] text-text-primary">
            Apply now
          </h2>
          <p className="mt-2 font-body text-base text-text-muted">
            Submit your application for this role.
          </p>

          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <Input
              label="Name"
              placeholder="Your full name"
              value={form.name}
              onChange={onFieldChange("name")}
              error={errors.name}
            />
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={onFieldChange("email")}
              error={errors.email}
            />
            <Input
              label="Resume link (URL)"
              placeholder="https://example.com/resume.pdf"
              value={form.resumeLink}
              onChange={onFieldChange("resumeLink")}
              error={errors.resumeLink}
            />
            <Textarea
              label="Cover note"
              placeholder="Briefly tell why you are a good fit..."
              value={form.coverNote}
              onChange={onFieldChange("coverNote")}
              error={errors.coverNote}
              rows={5}
            />
            <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full">
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
