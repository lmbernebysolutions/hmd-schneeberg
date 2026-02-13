import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-w-0 overflow-x-hidden">
        <Hero />
        <Services />
        <Stats />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
