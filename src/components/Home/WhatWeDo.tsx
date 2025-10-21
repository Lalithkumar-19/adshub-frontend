import React, { useMemo, type JSX } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Target,
  TrendingUp,
  FileText,
  Users,
  Megaphone,
  Globe,
  Zap,
  MessageCircle,
} from "lucide-react";

interface TextShimmerProps {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  spread?: number;
}

function TextShimmer({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) {
  const MotionComponent = motion(Component as keyof JSX.IntrinsicElements);

  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  return (
    <MotionComponent
      className={`relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box] dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] ${className}`}
      initial={{ backgroundPosition: "100% center" }}
      animate={{ backgroundPosition: "0% center" }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
      style={
        {
          "--spread": `${dynamicSpread}px`,
          backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
        } as React.CSSProperties
      }
    >
      {children}
    </MotionComponent>
  );
}

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

interface WhatWeDoSectionProps {
  services?: Service[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const defaultServices: Service[] = [
  {
    title: "SEO",
    description:
      "Optimizing your online presence to rank higher in search results and drive organic traffic.",
    icon: Search,
    gradient: "from-purple-500 to-purple-700",
  },
  {
    title: "META ADS",
    description:
      "Strategic advertising on Facebook and Instagram to reach your target audience effectively.",
    icon: Target,
    gradient: "from-purple-500 to-purple-700",
  },
  {
    title: "GOOGLE ADS",
    description:
      "Maximizing visibility and conversions through targeted Google advertising campaigns.",
    icon: TrendingUp,
    gradient: "from-purple-500 to-purple-700",
  },
  {
    title: "CONTENT OPTIMISATION",
    description:
      "Enhancing your content strategy to engage audiences and improve search performance.",
    icon: FileText,
    gradient: "from-purple-500 to-purple-700",
  },
  {
    title: "INFLUENCER MARKETING",
    description:
      "Leveraging influencer partnerships to build brand credibility and reach new audiences.",
    icon: Users,
    gradient: "from-purple-500 to-purple-700",
  },
  {
    title: "PR",
    description:
      "Building brand reputation and media presence through strategic public relations.",
    icon: Megaphone,
    gradient: "from-purple-500 to-purple-700",
  },
  {
    title: "WEB DEVELOPMENT",
    description:
      "Creating responsive, high-performance websites that convert visitors into customers.",
    icon: Globe,
    gradient: "from-purple-500 to-purple-700",
  },
  {
    title: "SALES FUNNEL BUILDING",
    description:
      "Designing optimized sales funnels that guide prospects through the customer journey.",
    icon: Zap,
    gradient: "from-purple-500 to-purple-700",
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    description:
      "Managing your social presence to build community and drive engagement across platforms.",
    icon: MessageCircle,
    gradient: "from-purple-500 to-purple-700",
  },
];

function WhatWeDoSection({
  services = defaultServices,
  title = "Our Services",
  subtitle = "Comprehensive digital marketing solutions to scale your business presence",
  className = "",
}: WhatWeDoSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={`py-24 bg-black ${className}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TextShimmer
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            duration={3}
          >
            {title}
          </TextShimmer>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="group relative"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="relative h-full p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 overflow-hidden"
                >
                  {/* Background gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon container */}
                  <motion.div
                    className={`relative w-14 h-14 mb-4 rounded-lg bg-gradient-to-br ${service.gradient} p-0.5`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white group-hover:text-purple-500 transition-colors duration-300" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover effect border */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}
                    style={{
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "xor",
                    }}
                  />

                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(45deg, transparent 30%, rgba(0, 0, 128, 0.2) 50%, transparent 70%)",
                      transform: "translateX(-100%)",
                    }}
                    animate={{
                      transform: "translateX(100%)",
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={() => {
              location.href = "/contact";
            }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-xl font-semibold hover:from-[#000060] hover:to-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default function WhatWeDoDemo() {
  return <WhatWeDoSection />;
}