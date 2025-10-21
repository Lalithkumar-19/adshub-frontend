import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Code2, Database, Cloud, Smartphone, Palette, Zap, Target } from 'lucide-react';

const TechStackSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const techCategories = [
    {
      category: "Creative Development",
      icon: <Palette className="w-8 h-8" />,
      description: "Stunning, interactive user experiences",
      color: "from-purple-500 to-purple-600",
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "Framer Motion", logo: "https://camo.githubusercontent.com/179d66ab2b0321726efa88a2d985c008ddfd8a1a216f7f0091ecfe444c0655b0/68747470733a2f2f6672616d657275736572636f6e74656e742e636f6d2f696d616765732f34386861395a64796f416e584235626f3771346f672e706e67" }
      ]
    },
    {
      category: "Backend & CMS",
      icon: <Database className="w-8 h-8" />,
      description: "Robust content management & APIs",
      color: "from-purple-600 to-purple-700",
      technologies: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Sanity", logo: "https://cdn.sanity.io/images/3do82whm/next/8affb0735d38d1241d1d7c9c8944d4c31c41e4c0-250x250.png" },
        { name: "Strapi", logo: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/37416/image-upload/Screen%20Shot%202022-01-17%20at%2010.23.25.png" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
      ]
    },
    {
      category: "Cloud & Analytics",
      icon: <Cloud className="w-8 h-8" />,
      description: "Scalable infrastructure with insights",
      color: "from-purple-700 to-purple-800",
      technologies: [
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" },
        { name: "Google Analytics", logo: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" },
        { name: "Hotjar", logo: "https://static.hotjar.com/images/logo.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
      ]
    },
    {
      category: "Marketing Tech",
      icon: <Target className="w-8 h-8" />,
      description: "Integrated marketing solutions",
      color: "from-purple-400 to-purple-500",
      technologies: [
        { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" },
        { name: "Mailchimp", logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-1.svg" },
        { name: "Google Ads", logo: "https://www.gstatic.com/adsense/assistant/docs/img_google_ads_icon.png" },
        { name: "Meta Business", logo: "https://static.xx.fbcdn.net/rsrc.php/yT/r/aGT3gskzWBf.ico" },
        { name: "Google Tag Manager", logo: "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_tag_manager.svg" },
        { name: "Optimizely", logo: "https://www.optimizely.com/contentassets/3f6e2e2a8dbe4a5b8b4f12f1b6b8f8a2/favicon.ico" }
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % techCategories.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, techCategories.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % techCategories.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + techCategories.length) % techCategories.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideVariants = {
    enter: {
      x: 1000,
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    exit: {
      x: -1000,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-4"
          >
            <span className="bg-purple-900/50 text-purple-300 border border-purple-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Our Technology Stack
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Powerful Tools for
            <span className="text-purple-400 block">Digital Excellence</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We combine cutting-edge development with strategic marketing technology to deliver complete digital solutions that drive growth.
          </motion.p>
        </motion.div>

        {/* Main slider container */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Slider content */}
            <div className="relative h-96 overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700 h-full">
                    <div className="flex flex-col items-center text-center h-full">
                      {/* Category header */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className={`w-20 h-20 bg-gradient-to-r ${techCategories[currentSlide].color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/25`}
                      >
                        {techCategories[currentSlide].icon}
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-3xl font-bold text-white mb-4"
                      >
                        {techCategories[currentSlide].category}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg text-gray-300 mb-8"
                      >
                        {techCategories[currentSlide].description}
                      </motion.p>

                      {/* Technologies grid */}
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-3 md:grid-cols-6 gap-6 w-full max-w-2xl"
                      >
                        {techCategories[currentSlide].technologies.map((tech, index) => (
                          <motion.div
                            key={tech.name}
                            custom={index}
                            variants={techItemVariants}
                            whileHover={{
                              scale: 1.1,
                              y: -5,
                              transition: { duration: 0.2 }
                            }}
                            className="flex flex-col items-center group cursor-pointer"
                          >
                            <div className="w-16 h-16 bg-gray-700 rounded-xl shadow-lg border border-gray-600 flex items-center justify-center mb-3 group-hover:shadow-xl group-hover:shadow-purple-500/10 group-hover:border-purple-500/50 transition-all duration-300">
                              <img
                                src={tech.logo}
                                alt={tech.name}
                                className="w-10 h-10 object-contain"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                              <div className="w-10 h-10 bg-gray-600 rounded-lg items-center justify-center text-gray-400 text-xs font-bold hidden">
                                {tech.name.charAt(0)}
                              </div>
                            </div>
                            <span className="text-sm font-medium text-gray-300 group-hover:text-purple-400 transition-colors">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/90 hover:bg-gray-700 text-purple-400 p-3 rounded-full shadow-lg hover:shadow-xl border border-gray-600 transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/90 hover:bg-gray-700 text-purple-400 p-3 rounded-full shadow-lg hover:shadow-xl border border-gray-600 transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {techCategories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goToSlide(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${currentSlide === index
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 border border-purple-500'
                    : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-purple-400 border border-gray-600'
                  }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="w-5 h-5">
                    {React.cloneElement(category.icon, { className: "w-5 h-5" })}
                  </span>
                  <span>{category.category}</span>
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Auto-play indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center mt-8"
          >
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-purple-500' : 'bg-gray-600'}`}></div>
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;