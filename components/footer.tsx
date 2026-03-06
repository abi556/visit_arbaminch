import { Link } from "@/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-foreground/10 bg-foreground text-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <div className="relative w-9 h-9">
                <Image
                  src="/images/fav.png"
                  alt="Arba Minch Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-serif text-2xl font-normal italic">
                Visit Arba Minch
              </h3>
            </div>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] opacity-40">
              {t("tagline")}
            </p>
            <p className="mt-6 text-sm font-light leading-relaxed opacity-60">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-16 lg:flex lg:gap-16">
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-40">
                {t("explore")}
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
                {t("support")}
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
            <div className="col-span-2 lg:col-span-1">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-40">
                {t("project")}
              </h4>
              <p className="mt-5 max-w-xs text-sm font-light leading-relaxed opacity-60">
                {t("project_desc")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-paper/10 pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-30">
            {"© "}
            {new Date().getFullYear()} {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
