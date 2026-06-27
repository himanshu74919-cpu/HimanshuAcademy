import Hero from "../components/Hero";
import FeaturedCourses from "../components/FeaturedCourses";
import Stats from "../components/Stats";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <Stats />
      <WhyChoose />
      <Testimonials />
    </>
  );
}
