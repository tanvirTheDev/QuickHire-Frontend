export interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  category: JobCategory;
  type: JobType;
  salary?: string;
  description: string;
  requirements?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Application {
  _id: string;
  jobId: string;
  name: string;
  email: string;
  resumeLink: string;
  coverNote?: string;
  status: "pending" | "reviewed" | "rejected";
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
  meta?: PaginationMeta;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface JobFilters {
  search?: string;
  category?: string;
  location?: string;
  type?: string;
  page?: number;
  limit?: number;
}

export interface CreateJobPayload {
  title: string;
  company: string;
  location: string;
  category: string;
  type: string;
  salary?: string;
  description: string;
  requirements?: string;
}

export interface CreateApplicationPayload {
  jobId: string;
  name: string;
  email: string;
  resumeLink: string;
  coverNote?: string;
}

export type JobCategory =
  | "Engineering"
  | "Design"
  | "Marketing"
  | "Sales"
  | "Finance"
  | "HR"
  | "Operations"
  | "Other";

export type JobType =
  | "Full-time"
  | "Part-time"
  | "Remote"
  | "Contract"
  | "Internship";
