"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { FoundationLine } from "@/components/atoms/FoundationLine";
import { Input } from "@/components/atoms/Input";
import { Textarea } from "@/components/atoms/Textarea";
import { SplitButton } from "@/components/atoms/SplitButton";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Diese Daten müssen vom Kunden bereitgestellt werden
const CONTACT_INFO = {
  company: "HMD GmbH",
  subtitle: "Innenausbau & Trockenbau",
  address: "Musterstraße 1",
  city: "08289 Schneeberg",
  phone: "03772 / XXX XXX",
  email: "info@hmd-schneeberg.de",
  hours: "Mo–Fr: 07:00 – 17:00",
} as const;

export function Contact() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hier könnte eine API-Route oder mailto: implementiert werden
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    // Für jetzt: mailto: Link als Fallback
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=Kontaktanfrage&body=${encodeURIComponent(
      `Name: ${data.name}\nE-Mail: ${data.email}\nTelefon: ${data.phone}\n\nNachricht:\n${data.message}`
    )}`;
  };

  return (
    <SectionContainer id="kontakt" background="white">
      <div ref={ref as React.RefObject<HTMLDivElement>}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel number="06" label="KONTAKT" />
          <div className="mt-3 w-20">
            <FoundationLine animate={false} />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 font-display text-display-md font-800 text-surface-dark"
        >
          Lassen Sie uns bauen.
        </motion.h2>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Formular */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                label="Name"
                placeholder="Max Mustermann"
                required
              />
              <Input
                name="email"
                type="email"
                label="E-Mail"
                placeholder="max@beispiel.de"
                required
              />
              <Input
                name="phone"
                type="tel"
                label="Telefon"
                placeholder="0123 / 456 789"
              />
              <Textarea
                name="message"
                label="Ihre Nachricht"
                placeholder="Beschreiben Sie Ihr Projekt..."
                rows={5}
                required
              />
              <SplitButton type="submit" size="md" className="w-full md:w-auto">
                Nachricht senden
              </SplitButton>
            </form>
          </motion.div>

          {/* Kontaktdaten */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <div>
              <h3 className="font-display text-xl font-800 text-surface-dark">
                {CONTACT_INFO.company}
              </h3>
              <p className="mt-1 font-body text-body-md text-hmd-grey">
                {CONTACT_INFO.subtitle}
              </p>

              <div className="mt-6 w-[60px]">
                <FoundationLine animate={false} />
              </div>

              <div className="mt-8 space-y-6">
                {/* Adresse */}
                <div className="flex items-start gap-4">
                  <Icon
                    icon="solar:map-point-linear"
                    className="mt-1 text-[20px] text-hmd-light-red"
                  />
                  <div className="font-body text-body-md text-hmd-grey">
                    <div>{CONTACT_INFO.address}</div>
                    <div>{CONTACT_INFO.city}</div>
                  </div>
                </div>

                {/* Telefon */}
                <div className="flex items-start gap-4">
                  <Icon
                    icon="solar:phone-linear"
                    className="mt-1 text-[20px] text-hmd-light-red"
                  />
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                    className="font-body text-body-md text-hmd-grey transition-colors hover:text-hmd-dark-red"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>

                {/* E-Mail */}
                <div className="flex items-start gap-4">
                  <Icon
                    icon="solar:letter-linear"
                    className="mt-1 text-[20px] text-hmd-light-red"
                  />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-body text-body-md text-hmd-grey transition-colors hover:text-hmd-dark-red"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>

                {/* Öffnungszeiten */}
                <div className="flex items-start gap-4">
                  <Icon
                    icon="solar:clock-circle-linear"
                    className="mt-1 text-[20px] text-hmd-light-red"
                  />
                  <div className="font-body text-body-md text-hmd-grey">
                    <div className="font-500 text-surface-dark">Öffnungszeiten:</div>
                    <div>{CONTACT_INFO.hours}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
