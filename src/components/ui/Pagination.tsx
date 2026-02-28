"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const getVisiblePages = (currentPage: number, totalPages: number): Array<number | "..."> => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, "...", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getVisiblePages(currentPage, totalPages);

  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-sm border border-border px-3 py-2 text-sm text-text-secondary transition-all duration-150 hover:bg-background-muted disabled:cursor-not-allowed disabled:opacity-50"
      >
        Prev
      </button>

      <div className="flex items-center gap-1">
        {pages.map((page, index) =>
          page === "..." ? (
            <span key={`ellipsis-${index}`} className="px-2 text-text-muted">
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={cn(
                "relative min-w-9 rounded-sm px-3 py-2 text-sm transition-all duration-150",
                page === currentPage
                  ? "text-white"
                  : "text-text-secondary hover:bg-background-muted"
              )}
            >
              {page === currentPage ? (
                <motion.span
                  layoutId="pagination-active-pill"
                  className="absolute inset-0 -z-10 rounded-sm bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                />
              ) : null}
              {page}
            </button>
          )
        )}
      </div>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-sm border border-border px-3 py-2 text-sm text-text-secondary transition-all duration-150 hover:bg-background-muted disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
