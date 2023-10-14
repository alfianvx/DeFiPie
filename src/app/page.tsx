import Hero from "@/components/hero";
import Listing from "@/components/listing";
import Partners from "@/components/partners";
import Purpose from "@/components/purpose";
import Reason from "@/components/reason";
import Service from "@/components/service";
import Vision from "@/components/vision";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Listing />
      <Reason />
      <Vision />
      <Service />
      <Purpose />
      <Partners />
    </main>
  );
}
