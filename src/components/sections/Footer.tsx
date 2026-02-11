"use client";

import Image from "next/image";
import { FoundationLine } from "@/components/atoms/FoundationLine";
import { SectionContainer } from "@/components/layout/SectionContainer";

const FOOTER_LINKS = {
  navigation: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Über Uns", href: "#ueber-uns" },
    { label: "Projekte", href: "#projekte" },
  ],
  legal: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
  contact: [
    { label: "Kontakt", href: "#kontakt" },
  ],
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <SectionContainer background="dark">
      <div>
        {/* Foundation Line am oberen Rand */}
        <div className="mb-12">
          <FoundationLine animate={false} />
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo Column */}
          <div>
            <div className="flex items-center">
              <Image
                src="/images/logo-hmd.png"
                alt="HMD GmbH Logo"
                width={140}
                height={42}
                className="h-auto w-32"
              />
            </div>
            <p className="mt-4 font-body text-sm text-white/60">
              Präzision im Innenausbau seit über 15 Jahren.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display text-sm font-700 uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="font-body text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4 className="font-display text-sm font-700 uppercase tracking-wider text-white">
              Kontakt
            </h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.contact.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="font-body text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display text-sm font-700 uppercase tracking-wider text-white">
              Rechtliches
            </h4>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-body text-sm text-white/40">
              © {currentYear} HMD GmbH. Alle Rechte vorbehalten.
            </p>
            <p className="font-body text-sm text-white/40">Schneeberg, Erzgebirge</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
