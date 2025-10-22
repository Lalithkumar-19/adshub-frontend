
import { useState, useEffect } from "react";
import { projectsAPI, Project } from "@/services/api";
import TrustedByDemo from "@/components/ui/TrusteBy";
import { WebDevAgencyHero } from "@/components/Home/Hero";
import WhatWeDoDemo from "@/components/Home/WhatWeDo";
import { HowWeWork } from "@/components/Home/HowWeWork";
import OurWorkSection from "@/components/Home/OurWork";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import TestimonialsSection from "@/components/Home/Testimonials";
import TechStackSection from "@/components/Home/TechStack";
import CTASection from "@/components/Home/CTASection";
import { motion } from "framer-motion";

const Index = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectsAPI.getAll();
        if (response.data && Array.isArray(response.data)) {
          setProjects(response.data.slice(0, 3)); // Show only first 3 projects on homepage
        } else {
          setError("Invalid project data format");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to fetch projects");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);


  return (
    <div className="min-h-screen bg-white">
      
      {/* <Header /> */}
      <WebDevAgencyHero />
      {/* <TrustedByDemo /> */}
      <WhatWeDoDemo />
      <HowWeWork />
      <OurWorkSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <TechStackSection />
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Index;
