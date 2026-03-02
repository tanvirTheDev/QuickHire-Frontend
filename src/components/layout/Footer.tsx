import Image from "next/image";
import Link from "next/link";

const aboutLinks = [
  "Companies",
  "Pricing",
  "Terms",
  "Advice",
  "Privacy Policy",
];
const resourceLinks = ["Help Docs", "Guide", "Updates", "Contact Us"];

export default function Footer() {
  return (
    <footer className="mt-16 bg-text-dark text-white">
      <div className="mx-auto w-full max-w-[1240px] px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.jpg"
                alt="QuickHire logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover"
              />
              <span className="font-(--font-red-hat) text-2xl leading-9 tracking-[-0.01em] text-white">
                QuickHire
              </span>
            </div>
            <p className="max-w-sm text-base text-border">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">About</h4>
              <ul className="space-y-2.5">
                {aboutLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-base text-border transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">
                Resources
              </h4>
              <ul className="space-y-2.5">
                {resourceLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-base text-border transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Get job notifications
            </h4>
            <p className="text-base text-border">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form className="flex w-full flex-col gap-2 lg:flex-row lg:items-stretch">
              <input
                type="email"
                placeholder="Email Address"
                className="h-[50px] min-h-[50px] w-full min-w-0 flex-1 rounded-sm border border-border bg-white px-3 py-0 text-text-primary placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-primary/25 sm:h-12 sm:min-h-12"
              />
              <button
                type="button"
                className="h-[50px] min-h-[50px] w-full rounded-sm bg-primary px-6 py-0 text-base font-bold text-white transition-colors hover:bg-[#3F38CA] sm:h-12 sm:min-h-12 lg:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-5">
          <p className="text-sm text-white/70">
            2021 @ QuickHire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
