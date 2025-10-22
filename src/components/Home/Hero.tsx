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
];

// Client logos data
const clientLogos = [
  { name: "Client 1", logo: "🏢" },
  { name: "Client 2", logo: "🍕" },
  { name: "Client 3", logo: "🏪" },
  { name: "Client 4", logo: "💼" },
  { name: "Client 5", logo: "🏬" },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Owner",
    company: "Brew & Bites Café",
    content: "Local café gained 120 new orders in 10 days with their targeted Instagram campaign!",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    id: 2,
    name: "Mike Thompson",
    role: "Founder",
    company: "Urban Fitness",
    content: "Increased membership sign-ups by 200% in just one month. Absolutely phenomenal results!",
    rating: 5,
    avatar: "👨‍💼"
  }
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
              {/* Trust Badge - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-center lg:justify-start"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-800">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm lg:text-base font-medium">Trusted by 50+ UK Businesses</span>
                </div>
              </motion.div>

              {/* Main Headline - Mobile Optimized */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-tight sm:leading-normal">
                  <TextRoll>We help UK small businesses </TextRoll>
                  <br />
                  <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                    get more customers
                  </span>
                  <br />
                  <TextRoll>with Meta, Instagram & Google Ads</TextRoll>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  We craft data-driven marketing strategies that elevate brands, amplify visibility, and drive measurable results. From SEO to Ads, every click we create has purpose.
                </p>
              </div>

              {/* Success Example - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-r from-purple-900/30 to-gray-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-purple-700/30"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-sm sm:text-base lg:text-lg">Real Results: Local Café Success</h3>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base mt-1">
                      <span className="text-green-400 font-semibold">120 new orders in 10 days</span> with our targeted Instagram & Meta Ads strategy
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Features List - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-start space-x-3 p-3 sm:p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-700/50 transition-all duration-300 flex-1"
                  >
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-sm sm:text-base">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Client Logos - Mobile Optimized */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-4"
              >
                <p className="text-gray-400 text-sm sm:text-base text-center lg:text-left mb-3">Trusted by businesses across the UK</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                  {clientLogos.map((client, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                      <span className="text-2xl">{client.logo}</span>
                      <span className="text-sm font-medium hidden sm:block">{client.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div> */}

              {/* CTA Buttons - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start pt-4"
              >
                <Button
                  onClick={() => {
                    location.href = "/contact";
                  }}
                  size="lg"
                  className="bg-purple-700 hover:bg-purple-600 text-white shadow-lg shadow-purple-700/25 px-6 lg:px-8 py-3 lg:py-4 text-base font-semibold transition-all duration-300 w-full sm:w-auto"
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
                  className="border-gray-700 hover:bg-purple-700/10 hover:border-purple-700 text-black hover:text-white px-6 lg:px-8 py-3 lg:py-4 text-base font-semibold transition-all duration-300 w-full sm:w-auto"
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
                <div className="w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-transparent">
                  <div className="w-full h-64 sm:h-80 lg:h-96 rounded-xl bg-gradient-to-r from-purple-700 to-gray-800 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="w-8 h-8 lg:w-10 lg:h-10 ml-1" />
                      </div>
                      <p className="text-lg lg:text-xl font-semibold">Success Stories</p>
                      <p className="text-gray-300 text-sm lg:text-base mt-2">See how we drive results for businesses</p>
                    </div>
                  </div>
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

// Play icon component
const Play = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function Demo() {
  return <WebDevAgencyHero />;
}