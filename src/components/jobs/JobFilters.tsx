"use client";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { JOB_CATEGORIES, JOB_TYPES } from "@/constants";
import { MapPin } from "lucide-react";

interface JobFiltersProps {
  category: string;
  type: string;
  location: string;
  onCategoryChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onLocationChange: (value: string) => void;
}

export default function JobFilters({
  category,
  type,
  location,
  onCategoryChange,
  onTypeChange,
  onLocationChange,
}: JobFiltersProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <Input
        value={location}
        onChange={(event) => onLocationChange(event.target.value)}
        placeholder="Location"
        leftIcon={<MapPin className="h-5 w-5" />}
      />
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
