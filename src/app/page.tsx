import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F3E9] text-[#2A1810] relative selection:bg-[#E8D8BF]">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
