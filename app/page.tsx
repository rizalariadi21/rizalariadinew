import GlowBackground from "@/components/GlowBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <GlowBackground />
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Process />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
