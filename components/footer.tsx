import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-foreground text-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <h3 className="font-serif text-2xl font-normal italic">
              Arba Minch
            </h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] opacity-40">
              40 SPRINGS / 2 LAKES / 1 DESTINATION
            </p>
            <p className="mt-6 text-sm font-light leading-relaxed opacity-60">
              Discover the natural splendor and rich cultural heritage of Ethiopia's most captivating destination.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-40">
                Explore
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {[
                  { href: "/attractions", label: "Attractions" },
                  { href: "/history", label: "History" },
                  { href: "/services", label: "Services" },
                  { href: "/events", label: "Events" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover-underline text-sm font-light opacity-60 transition-opacity duration-300 hover:opacity-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-40">
                Support
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {[
                  { href: "/contact", label: "Contact" },
                  { href: "/faqs", label: "FAQs" },
                  { href: "/travel-guide", label: "Travel Guide" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover-underline text-sm font-light opacity-60 transition-opacity duration-300 hover:opacity-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-40">
                Project
              </h4>
              <p className="mt-5 max-w-xs text-sm font-light leading-relaxed opacity-60">
                A community-driven digital showcase, sharing the natural beauty
                and cultural richness of Arba Minch with the world.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-paper/10 pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-30">
            {"© "}
            {new Date().getFullYear()} Visit Arba Minch. Built with care for
            Ethiopia.
          </p>
        </div>
      </div>
    </footer>
  );
}
