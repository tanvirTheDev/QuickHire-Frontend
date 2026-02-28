"use client";

import { Search } from "lucide-react";
import Input from "@/components/ui/Input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function SearchBar({ value, onChange, className }: SearchBarProps) {
  return (
    <div className={className}>
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Job title or keyword"
        leftIcon={<Search className="h-5 w-5" />}
      />
    </div>
  );
}
