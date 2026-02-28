export const JOB_CATEGORIES: string[] = [
  "Engineering",
  "Design",
  "Marketing",
  "Sales",
  "Finance",
  "HR",
  "Operations",
  "Other",
];

export const JOB_TYPES: string[] = [
  "Full-time",
  "Part-time",
  "Remote",
  "Contract",
  "Internship",
];

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
