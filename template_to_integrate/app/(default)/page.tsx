export const metadata = {
  title: "Linkpool",
  description: "Landing Page",
};

import PageIllustration from "@/app/components/page-illustration";
import Hero from "@/app/components/hero-home";
import Workflows from "@/app/components/workflows";
import Features from "@/app/components/features";
import Testimonials from "@/app/components/testimonials";
import Cta from "@/app/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
