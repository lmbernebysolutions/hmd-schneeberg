import Link from "next/link";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { FoundationLine } from "@/components/atoms/FoundationLine";

export const metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
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
              Impressum
            </h1>
            <div className="mt-4 w-20">
              <FoundationLine animate={false} />
            </div>

            <div className="mt-12 space-y-6 font-body text-body-md text-hmd-grey">
              <section>
                <h2 className="mb-3 font-display text-xl font-700 text-surface-dark">
                  Angaben gemäß § 5 TMG
                </h2>
                <p>
                  HMD GmbH
                  <br />
                  Musterstraße 1<br />
                  08289 Schneeberg
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-xl font-700 text-surface-dark">Kontakt</h2>
                <p>
                  Telefon: 03772 / XXX XXX
                  <br />
                  E-Mail: info@hmd-schneeberg.de
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-xl font-700 text-surface-dark">
                  Vertreten durch
                </h2>
                <p>[Name Geschäftsführer]</p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-xl font-700 text-surface-dark">
                  Registereintrag
                </h2>
                <p>
                  Eintragung im Handelsregister
                  <br />
                  Registergericht: [Amtsgericht]
                  <br />
                  Registernummer: [HRB XXXXX]
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-display text-xl font-700 text-surface-dark">
                  Umsatzsteuer-ID
                </h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                  <br />
                  [DE XXX XXX XXX]
                </p>
              </section>

              <div className="rounded-hmd border-l-[3px] border-hmd-light-red bg-surface p-6">
                <p className="font-technical text-sm uppercase text-hmd-dark-red">
                  Hinweis für Entwickler
                </p>
                <p className="mt-2 text-sm">
                  Die Platzhalter in eckigen Klammern müssen mit den tatsächlichen Daten des
                  Kunden ersetzt werden.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>
    </>
  );
}
