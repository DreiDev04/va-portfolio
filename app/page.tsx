import { Nav } from "@/components/sections/nav";
import { Hero, MassiveTicker } from "@/components/sections/hero";
import { Approach } from "@/components/sections/approach";
import { Solutions } from "@/components/sections/solutions";
import { TechSpecs } from "@/components/sections/tech-specs";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <MassiveTicker />
      <Approach />
      <Solutions />
      <TechSpecs />
      <Footer />
    </main>
  );
}
