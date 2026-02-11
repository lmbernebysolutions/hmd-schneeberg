"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SplitButton } from "@/components/atoms/SplitButton";

const NAV_LINKS = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über Uns" },
  { href: "#projekte", label: "Projekte" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleSectionObserver = () => {
      const sections = NAV_LINKS.map((link) => ({
        id: link.href.slice(1),
        element: document.getElementById(link.href.slice(1)),
      }));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${entry.target.id}`);
            }
          });
        },
        { threshold: 0.3 }
      );

      sections.forEach((section) => {
        if (section.element) observer.observe(section.element);
      });

      return () => observer.disconnect();
    };

    handleSectionObserver();
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-out",
          isScrolled ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6 md:px-12 lg:px-16">
          {/* Logo */}
          <a href="#" className="relative z-50 flex items-center justify-center" onClick={() => handleLinkClick("#")}>
            <Image
              src="/images/logo-hmd.png"
              alt="HMD GmbH Logo"
              width={180}
              height={54}
              className="h-auto w-36 md:w-44"
              priority
              style={{ display: 'block' }}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="group relative font-display text-sm font-700 uppercase tracking-widest text-hmd-grey transition-colors duration-300 hover:text-surface-dark"
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-hmd-dark-red to-hmd-light-red transition-transform duration-300 ease-out group-hover:scale-x-100",
                    activeSection === link.href && "scale-x-100"
                  )}
                />
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <SplitButton href="#kontakt" size="md">
              Anfrage senden
            </SplitButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Menu"
          >
            <span
              className={cn(
                "h-0.5 w-6 bg-hmd-grey transition-all duration-300",
                isMobileMenuOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-hmd-grey transition-all duration-300",
                isMobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 bg-hmd-grey transition-all duration-300",
                isMobileMenuOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white transition-all duration-500 ease-out lg:hidden",
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className={cn(
                "font-display text-3xl font-800 uppercase tracking-wider text-hmd-grey transition-all duration-500 hover:text-hmd-dark-red",
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              )}
              style={{
                transitionDelay: isMobileMenuOpen ? `${i * 80}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
          <div
            className={cn(
              "mt-4 transition-all duration-500",
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            )}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${NAV_LINKS.length * 80}ms`
                : "0ms",
            }}
          >
            <SplitButton href="#kontakt" size="lg">
              Anfrage senden
            </SplitButton>
          </div>
        </div>
      </div>
    </>
  );
}
