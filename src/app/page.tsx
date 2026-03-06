import { Hero } from "@/components/home/hero";
import { Manifesto } from "@/components/home/manifesto";
import { FeaturedWork } from "@/components/home/featured-work";
import { ServicesWall } from "@/components/home/services-wall";
import { CinematicFooter } from "@/components/home/cinematic-footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <FeaturedWork />
      <ServicesWall />
      <CinematicFooter />
    </>
  );
}
