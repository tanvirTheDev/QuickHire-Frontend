"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import { JOB_CATEGORIES, JOB_TYPES } from "@/constants";
import { createJobSchema } from "@/lib/validations";
import type { CreateJobPayload } from "@/types";
import { useToast } from "@/hooks/useToast";

interface JobFormState {
  title: string;
  company: string;
  location: string;
  category: string;
  type: string;
  salary: string;
  description: string;
  requirements: string;
}

interface CreateJobFormProps {
  isSubmitting: boolean;
  onCreateJob: (payload: CreateJobPayload) => Promise<void>;
}

const initialFormState: JobFormState = {
  title: "",
  company: "",
  location: "",
  category: "",
  type: "",
  salary: "",
  description: "",
  requirements: "",
};

export default function CreateJobForm({
  isSubmitting,
  onCreateJob,
}: CreateJobFormProps) {
  const { toast } = useToast();
  const [form, setForm] = useState<JobFormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof JobFormState, string>>>(
    {}
  );

  const updateField =
    (field: keyof JobFormState) =>
    (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const parsed = createJobSchema.safeParse({
      title: form.title,
      company: form.company,
      location: form.location,
      category: form.category,
      type: form.type,
      salary: form.salary || undefined,
      description: form.description,
      requirements: form.requirements || undefined,
    });

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        title: fieldErrors.title?.[0],
        company: fieldErrors.company?.[0],
        location: fieldErrors.location?.[0],
        category: fieldErrors.category?.[0],
        type: fieldErrors.type?.[0],
        salary: undefined,
        description: fieldErrors.description?.[0],
        requirements: undefined,
      });
      toast.error("Please fix form errors before submitting.");
      return;
    }

    try {
      await onCreateJob(parsed.data);
      setForm(initialFormState);
      setErrors({});
      toast.success("Job created successfully.");
    } catch {
      toast.error("Failed to create job.");
    }
  };

  return (
    <div className="rounded-sm border border-border bg-white p-6 sm:p-8">
      <h1 className="font-display text-[34px] font-semibold leading-[1.1] text-text-primary">
        Admin Panel
      </h1>
      <p className="mt-2 font-body text-base text-text-muted">Add a new job listing.</p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <Input
          label="Job title"
          value={form.title}
          onChange={updateField("title")}
          error={errors.title}
        />
        <Input
          label="Company"
          value={form.company}
          onChange={updateField("company")}
          error={errors.company}
        />
        <Input
          label="Location"
          value={form.location}
          onChange={updateField("location")}
          error={errors.location}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Select
            label="Category"
            value={form.category}
            onChange={(event) => {
              setForm((prev) => ({ ...prev, category: event.target.value }));
              setErrors((prev) => ({ ...prev, category: undefined }));
            }}
            options={JOB_CATEGORIES.map((item) => ({ value: item, label: item }))}
            placeholder="Select category"
            error={errors.category}
          />
          <Select
            label="Job type"
            value={form.type}
            onChange={(event) => {
              setForm((prev) => ({ ...prev, type: event.target.value }));
              setErrors((prev) => ({ ...prev, type: undefined }));
            }}
            options={JOB_TYPES.map((item) => ({ value: item, label: item }))}
            placeholder="Select type"
            error={errors.type}
          />
        </div>

        <Input label="Salary (optional)" value={form.salary} onChange={updateField("salary")} />
        <Textarea
          label="Description"
          value={form.description}
          onChange={updateField("description")}
          error={errors.description}
          rows={5}
        />
        <Textarea
          label="Requirements (optional)"
          value={form.requirements}
          onChange={updateField("requirements")}
          rows={4}
        />

        <Button type="submit" isLoading={isSubmitting} size="lg" className="w-full">
          Add Job
        </Button>
      </form>
    </div>
  );
}
