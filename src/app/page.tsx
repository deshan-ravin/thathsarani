"use client";
import { useState, useEffect } from "react";
import Header from "@/components/molecules/header";
import AboutSection from "@/components/organisms/about-section";
import JobInfo from "@/components/organisms/experience-section";
import HeroSection from "@/components/organisms/hero-section";
import Loader from "@/components/molecules/loader";
import EducationSection from "@/components/organisms/education-section";
import MeetingSection from "@/components/organisms/meeting-section";
import Footer from "@/components/molecules/footer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import WorldMapSection from "@/components/organisms/world-map-section";
import SocialMedia from "@/components/organisms/social-media";
import ContactButton from "@/components/molecules/contact-button";

// Hook to detect screen size
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1024px)"); // Detect desktop screens

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : isDesktop ? (
    <TracingBeam>
      <Header />
      <HeroSection />
      <AboutSection />
      <JobInfo />
      <EducationSection />
      <MeetingSection />
      <ContactButton />
      <WorldMapSection />
      <SocialMedia />
      <Footer />
    </TracingBeam>
  ) : (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <JobInfo />
      <EducationSection />
      <MeetingSection />
      <ContactButton />
      <WorldMapSection />
      <Footer />
    </>
  );
}
