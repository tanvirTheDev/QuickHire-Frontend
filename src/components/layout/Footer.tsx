import Link from "next/link";

const aboutLinks = ["Companies", "Pricing", "Terms", "Advice", "Privacy Policy"];
const resourceLinks = ["Help Docs", "Guide", "Updates", "Contact Us"];

export default function Footer() {
  return (
    <footer className="mt-16 bg-text-dark text-white">
      <div className="mx-auto w-full max-w-[1240px] px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="relative block h-8 w-8 rounded-[4px] bg-primary">
                <span className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white" />
              </span>
              <span className="font-[var(--font-red-hat)] text-2xl font-bold leading-9 tracking-[-0.01em] text-white">
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
              <h4 className="mb-4 text-lg font-semibold text-white">Resources</h4>
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
            <h4 className="text-lg font-semibold text-white">Get job notifications</h4>
            <p className="text-base text-border">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Email Address"
                className="h-11 flex-1 rounded-sm border border-border bg-white px-3 text-text-primary placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-primary/25"
              />
              <button
                type="button"
                className="h-11 rounded-sm bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-[#3F38CA]"
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
