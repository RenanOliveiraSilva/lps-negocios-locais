import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Categories } from "@/components/Categories";
import { Highlights } from "@/components/Highlights";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <Highlights />
        <Team />
        <Testimonials />
      </main>
    </>
  );
}
