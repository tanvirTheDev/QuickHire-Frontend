"use client";

import Select from "@/components/ui/Select";
import { JOB_CATEGORIES, JOB_TYPES } from "@/constants";

interface JobFiltersProps {
  category: string;
  type: string;
  onCategoryChange: (value: string) => void;
  onTypeChange: (value: string) => void;
}

export default function JobFilters({
  category,
  type,
  onCategoryChange,
  onTypeChange,
}: JobFiltersProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <Select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        options={JOB_CATEGORIES.map((item) => ({ value: item, label: item }))}
        placeholder="All categories"
      />
      <Select
        value={type}
        onChange={(event) => onTypeChange(event.target.value)}
        options={JOB_TYPES.map((item) => ({ value: item, label: item }))}
        placeholder="All job types"
      />
    </div>
  );
}
