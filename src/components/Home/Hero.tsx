import * as React from "react";
import { motion } from "framer-motion";
// import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  CarouselApi,
} from "@/components/ui/carousel";
import {
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  Star,
  ArrowRight,
  Code,
  Zap,
  Shield,
} from "lucide-react";
import { useEffect, useState } from "react";

// Utils function
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

// TextRoll component
interface TextRollProps {
  children: string;
  className?: string;
}

function TextRoll({ children, className }: TextRollProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}

// Testimonial interface
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

// Features data
const features = [
  {
    icon: <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-purple-700" />,
    title: "Performance Marketing",
    description: "Precision-targeted campaigns designed to maximize ROI.",
  },
  {
    icon: <Users className="w-5 h-5 lg:w-6 lg:h-6 text-purple-700" />,
    title: "Creative Strategy",
    description: "Compelling visuals and content that turn audiences into advocates.",
  },
  // {
  //   icon: <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-purple-700" />,
  //   title: "Full-Funnel Growth",
  //   description: "We build strategies that attract, engage, and convert — seamlessly.",
  // },
];

// Main Hero Component
export function WebDevAgencyHero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-4 w-48 h-48 lg:top-20 lg:left-10 lg:w-72 lg:h-72 bg-purple-700/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-4 w-64 h-64 lg:bottom-20 lg:right-10 lg:w-96 lg:h-96 bg-purple-700/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-purple-700/10 to-gray-800/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 lg:space-y-8 text-center lg:text-left"
            >
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl  md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  <TextRoll>Scale Your</TextRoll>
                  <br />
                  <span className="bg-gradient-to-r text-purple-700">
                    Brand Presence
                  </span>
                  <br />
                  <TextRoll>With ADSHUB</TextRoll>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  We craft data-driven marketing strategies that elevate brands, amplify visibility, and drive measurable results. From SEO to Ads, every click we create has purpose.
                </p>
              </div>

              {/* Features List */}
              <div className="flex flex-col md:flex-row gap-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-start space-x-3 p-3 lg:p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-700/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm lg:text-base text-white">
                        {feature.title}
                      </h3>
                      <p className="text-xs lg:text-sm text-gray-400 mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start"
              >
                <Button
                  onClick={() => {
                    location.href = "/contact";
                  }}
                  size="lg"
                  className="bg-purple-700 hover:bg-purple-500 text-white shadow-lg shadow-purple-700/25 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                </Button>
                <Button
                  onClick={() => {
                    location.href = "/projects";
                  }}
                  size="lg"
                  variant="outline"
                  className="border-gray-700 hover:bg-purple-700/10 hover:border-purple-700 text-black hover:text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold transition-all duration-300"
                >
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Video/Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-full order-first lg:order-last"
            >
              <div className="relative w-full max-w-2xl h-full mx-auto lg:mx-0 lg:ml-auto">
                {/* Video Placeholder with gradient border */}
                <div className="w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-transparent ">

                  <video  className="w-full h-full  rounded-xl" autoPlay loop muted >
                    <source src="https://www.pexels.com/download/video/7882916/" className=" w-full h-full rounded-xl bg-gradient-to-r from-purple-700 to-gray-800 p-1" type="video/mp4" /> 
                  </video>


                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 lg:w-12 lg:h-12 bg-purple-700 rounded-full blur-sm opacity-70 animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 lg:w-10 lg:h-10 bg-purple-700 rounded-full blur-sm opacity-50 animate-pulse delay-1000" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Demo() {
  return <WebDevAgencyHero />;
}