import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { FoundationLine } from "@/components/atoms/FoundationLine";

export const metadata = {
  title: "Datenschutzerklärung",
};

export default function DatenschutzPage() {
  return (
    <>
      {/* Minimal Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-6 md:px-12 lg:px-16">
          <Link href="/" className="flex items-center">
            <span className="font-display text-2xl font-900 text-hmd-dark-red">HMD</span>
            <span className="ml-1 font-display text-2xl font-900 text-hmd-grey">GmbH</span>
          </Link>
          <Link
            href="/"
            className="font-body text-sm text-hmd-grey transition-colors hover:text-surface-dark"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </nav>

      <main className="pt-20">
        <SectionContainer background="white">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-display text-display-lg font-800 text-surface-dark">
              Datenschutzerklärung
            </h1>
            <div className="mt-4 w-20">
              <FoundationLine animate={false} />
            </div>

            <div className="mt-12 space-y-6 font-body text-body-md text-hmd-grey">
              <section>
                <h2 className="mb-3 font-display text-xl font-700 text-surface-dark">
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 className="mb-2 font-display text-lg font-700 text-surface-dark">
                  Allgemeine Hinweise
                </h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                  Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                  werden können.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-xl font-700 text-surface-dark">
                  2. Hosting
                </h2>
                <p>
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
                  personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den
                  Servern des Hosters gespeichert.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-xl font-700 text-surface-dark">
                  3. Datenerfassung auf dieser Website
                </h2>
                <h3 className="mb-2 font-display text-lg font-700 text-surface-dark">
                  Kontaktformular
                </h3>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                  aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
                  zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                  gespeichert.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-xl font-700 text-surface-dark">
                  4. Ihre Rechte
                </h2>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger
                  und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
                  außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                </p>
              </section>

              <div className="rounded-hmd border-l-[3px] border-hmd-light-red bg-surface p-6">
                <p className="font-technical text-sm uppercase text-hmd-dark-red">
                  Hinweis für Entwickler
                </p>
                <p className="mt-2 text-sm">
                  Eine vollständige, rechtssichere Datenschutzerklärung sollte von einem
                  Rechtsanwalt oder einem spezialisierten Generator erstellt werden. Dies ist nur
                  ein Platzhalter mit den wichtigsten Punkten.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>
    </>
  );
}
