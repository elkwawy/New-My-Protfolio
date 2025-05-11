import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Testimonials from '@/components/sections/testimonials';
import LatestPosts from '@/components/sections/latest-posts';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <LatestPosts />
      <Contact />
    </>
  );
}