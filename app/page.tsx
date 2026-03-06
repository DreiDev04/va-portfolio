import { Nav } from "@/components/sections/nav";
import { Hero, MassiveTicker } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Solutions } from "@/components/sections/solutions";
import { TechSpecs } from "@/components/sections/tech-specs";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <MassiveTicker />
      <Services />
      <Solutions />
      <TechSpecs />
      <Footer />
    </main>
  );
}
