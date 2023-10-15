import Hero from "@/components/hero";
import Listing from "@/components/listing";
import Partners from "@/components/partners";
import Purpose from "@/components/purpose";
import Reason from "@/components/reason";
import Service from "@/components/service";
import Project from "@/components/project";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Listing />
      <Reason />
      <Project />
      <Service />
      <Purpose />
      <Partners />
    </main>
  );
}
