import { z } from "zod";
import { JOB_CATEGORIES, JOB_TYPES } from "@/constants";

export const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  resumeLink: z.string().url("Please enter a valid URL"),
  coverNote: z.string().max(1000).optional(),
});

export const createJobSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  company: z.string().min(2, "Company name required"),
  location: z.string().min(2, "Location required"),
  category: z.enum(JOB_CATEGORIES as [string, ...string[]]),
  type: z.enum(JOB_TYPES as [string, ...string[]]),
  salary: z.string().optional(),
  description: z.string().min(20, "Description must be at least 20 characters"),
  requirements: z.string().optional(),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;
export type CreateJobFormData = z.infer<typeof createJobSchema>;
