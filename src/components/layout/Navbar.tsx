"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const leftNavLinks = [
  { label: "Find Jobs", href: "/jobs" },
  { label: "Browse Companies", href: "#" },
];

const rightNavLinks = [{ label: "Admin", href: "/admin" }];

const mobileContainerVariants = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.25,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const mobileItemVariants = {
  closed: { opacity: 0, y: -8 },
  open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-transparent transition-all duration-200",
        isScrolled
          ? "border-border bg-white/80 shadow-sm backdrop-blur-md"
          : "bg-white",
      )}
    >
      <div className="mx-auto flex h-[78px] w-full max-w-[1240px] items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8 lg:gap-10">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.jpg"
              alt="QuickHire logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
              priority
            />
            <span
              className="text-[30px] font-bold leading-9 tracking-[-0.01em] text-text-primary min-[430px]:text-[34px] md:text-2xl"
              style={{
                fontFamily:
                  "var(--font-red-hat), 'Red Hat Display', sans-serif",
              }}
            >
              QuickHire
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex lg:gap-10">
            {leftNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base font-medium transition-colors duration-150",
                    isActive
                      ? "text-primary"
                      : "text-text-secondary hover:text-text-primary",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden items-center gap-5 border-l border-border pl-6 md:flex">
          {rightNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium transition-colors duration-150",
                  isActive
                    ? "text-primary"
                    : "text-text-secondary hover:text-text-primary",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <button className="text-base font-semibold text-primary transition-colors hover:text-[#3F38CA]">
            Login
          </button>
          <button className="h-12 min-w-[113px] rounded-sm bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-[#3F38CA]">
            Sign Up
          </button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border p-2 text-text-primary transition-colors hover:bg-background-muted md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileContainerVariants}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <div className="space-y-2 px-4 py-3">
              {[...leftNavLinks, ...rightNavLinks].map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div key={link.href} variants={mobileItemVariants}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-sm px-2 py-2 text-base font-medium transition-colors duration-150",
                        isActive
                          ? "bg-primary-tertiary text-primary"
                          : "text-text-secondary hover:bg-background-muted hover:text-text-primary",
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div variants={mobileItemVariants} className="pt-1">
                <button className="mb-2 block w-full rounded-sm px-2 py-2 text-left text-base font-semibold text-primary transition-colors hover:bg-primary-tertiary">
                  Login
                </button>
                <button className="h-11 w-full rounded-sm bg-primary px-5 text-base font-semibold text-white transition-colors hover:bg-[#3F38CA]">
                  Sign Up
                </button>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
