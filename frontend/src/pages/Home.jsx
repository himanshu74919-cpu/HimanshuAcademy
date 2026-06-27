import Hero from "../components/Hero";
import FeaturedCourses from "../components/FeaturedCourses";
import Stats from "../components/Stats";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <Stats />
      <WhyChoose />
      <Testimonials />
      <Footer />
    </>
  );
}
