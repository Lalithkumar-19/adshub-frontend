import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, TrendingUp, MessageSquare, Users, Globe, Zap, Palette, Monitor, ArrowRight, Sparkles, Star, Target, Megaphone, PenTool, Heart, Building, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      title: "SEO Optimization",
      description: "Boost your online visibility and drive organic traffic with our comprehensive SEO strategies. We optimize your website to rank higher on search engines and attract qualified leads.",
      image: "https://epresence.ie/wp-content/uploads/2013/10/SEO_ranking.jpg",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO"],
      clients: ["All Businesses", "E-commerce Stores", "Local Businesses"],
      buttonText: "Get Strategy",
      icon: <Search className="w-8 h-8" />,
      gradient: "from-purple-600 to-purple-800",
    },
    {
      title: "Meta Ads Management",
      description: "Maximize your reach on Facebook and Instagram with targeted ad campaigns. We create compelling ads that drive engagement, conversions, and brand awareness across Meta platforms.",
      image: "https://cdn.prod.website-files.com/632d6d51c0c0860984f8e7d4/6557dc29776b952e69f4d767_hero.png",
      features: ["Audience Targeting", "Creative Design", "Performance Tracking"],
      clients: ["E-commerce Brands", "Service Businesses", "App Developers"],
      buttonText: "Launch Campaign",
      icon: <Megaphone className="w-8 h-8" />,
      gradient: "from-purple-500 to-purple-700",
    },
    {
      title: "Google Ads",
      description: "Drive immediate results with strategic Google Ads campaigns. We optimize your PPC strategy to capture high-intent traffic and maximize your return on advertising spend.",
      image: "https://www.taboola.com/wp-content/uploads-neo/2025/06/google-ads-scaled.jpg",
      features: ["PPC Management", "Conversion Tracking", "ROI Optimization"],
      clients: ["Local Businesses", "E-commerce", "Lead Generation"],
      buttonText: "Get Leads",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-purple-700 to-purple-900",
    },
    {
      title: "Content Optimization",
      description: "Transform your content into a powerful marketing asset. We optimize your existing content and create new, engaging material that resonates with your audience and drives action.",
      image: "https://mms-app.s3.amazonaws.com/wordpress/sites/2/2021/09/15122155/The-Content-Optimization-System.png",
      features: ["Content Strategy", "SEO Writing", "Performance Analysis"],
      clients: ["Content Creators", "Blogs", "Media Companies"],
      buttonText: "Optimize Content",
      icon: <PenTool className="w-8 h-8" />,
      gradient: "from-purple-400 to-purple-600",
    },
    {
      title: "Influencer Marketing",
      description: "Leverage the power of social influence to amplify your brand. We connect you with relevant influencers and manage campaigns that build trust and drive conversions.",
      image: "https://www.aimtechnologies.co/wp-content/uploads/2024/01/Influencer-Marketing-Statistics.png",
      features: ["Influencer Vetting", "Campaign Management", "ROI Measurement"],
      clients: ["Lifestyle Brands", "Beauty Products", "Tech Gadgets"],
      buttonText: "Find Influencers",
      icon: <Heart className="w-8 h-8" />,
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Public Relations",
      description: "Build brand credibility and media presence with strategic PR campaigns. We secure media coverage, manage press relations, and enhance your brand reputation.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCR6VfTrdNuJm3oJfoFc-SA54Lx2UNPLjYQ&s",
      features: ["Media Relations", "Press Releases", "Crisis Management"],
      clients: ["Startups", "Established Brands", "Public Figures"],
      buttonText: "Get Featured",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-purple-800 to-indigo-800",
    },
    {
      title: "Web Development",
      description: "Create stunning, high-performance websites that convert visitors into customers. We build responsive, fast-loading sites optimized for user experience and conversions.",
      image: "https://miro.medium.com/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
      features: ["Responsive Design", "Fast Loading", "SEO Ready"],
      clients: ["All Businesses", "Startups", "Enterprises"],
      buttonText: "Build Website",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      title: "Sales Funnel Building",
      description: "Design and implement high-converting sales funnels that guide prospects from awareness to purchase. We optimize every touchpoint to maximize conversions and revenue.",
      image: "https://cdn.prod.website-files.com/62d539593504f1e73d2c19b6/644ee092152cad35ce7e89e4_1500266377_what-are-sales-funnels.jpeg",
      features: ["Funnel Strategy", "Conversion Optimization", "Automation"],
      clients: ["Online Courses", "E-commerce", "Service Providers"],
      buttonText: "Build Funnel",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-purple-600 to-purple-800",
    },
    {
      title: "Social Media Management",
      description: "Maintain a strong social media presence with engaging content and strategic posting. We manage your social channels to build community and drive brand loyalty.",
      image: "https://www.qualityformationsblog.co.uk/wp-content/uploads/2024/06/Shutterstock_2212199145.jpg",
      features: ["Content Calendar", "Community Management", "Analytics"],
      clients: ["All Brands", "Personal Brands", "Local Businesses"],
      buttonText: "Grow Social",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-purple-400 to-purple-700",
    },
  ];

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  const ServiceCard = ({ service, index }) => {

    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: index * 0.2 }}
        className="group relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section - Mobile First */}
          <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} relative`}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-purple-900/50 p-4 sm:p-6 lg:p-8 group-hover:shadow-2xl transition-all duration-500 border border-gray-700">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}></div>
              </div>

              {/* Floating particles */}
              {hoveredService === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Service Icon */}
              <div className={`absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-2xl bg-gradient-to-br ${service.gradient} text-white transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 border border-purple-500/50`}>
                {service.icon}
              </div>

              {/* Image */}
              <div className="relative z-10 h-48 sm:h-64 lg:h-80 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 border border-gray-600">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Content Section - Mobile First */}
          <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-4 sm:space-y-6`}>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-purple-300 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-semibold text-white flex items-center text-sm sm:text-base">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-2" />
                Key Features
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="bg-purple-900/50 hover:bg-purple-800 text-purple-300 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-purple-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Clients */}
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-semibold text-white flex items-center text-sm sm:text-base">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-2" />
                Ideal Clients
              </h4>
              <div className="space-y-1 sm:space-y-2">
                {service.clients.map((client, clientIndex) => (
                  <div
                    key={clientIndex}
                    className="flex items-center transform hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                    <span className="text-gray-300 text-sm sm:text-base">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-900 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute bg-purple-900/30 rounded-full opacity-20 animate-float"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.left}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/50 to-black opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/20 to-transparent animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 sm:space-y-8"
          >
            {/* Main heading with typewriter effect */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Amplify Your Brand
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
              With Strategic Marketing ✨
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We specialize in comprehensive digital marketing solutions that drive growth and maximize ROI.
              From SEO to social media, we craft strategies that elevate your brand and deliver measurable results.
            </p>

            {/* Hero features */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12">
              {[
                { icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, text: "Targeted Campaigns" },
                { icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, text: "ROI Focused" },
                { icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />, text: "Rapid Results" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-2xl border border-purple-700 hover:border-purple-500 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-purple-400">{feature.icon}</div>
                  <span className="font-medium text-white text-sm sm:text-base">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white font-bold text-base sm:text-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl mt-6 sm:mt-8 border border-purple-500/50 cursor-pointer"
            >
              <span className="relative z-10 flex items-center">
                Explore Our Services
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 animate-spin" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-3 sm:space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Our Marketing Services ✨
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to grow your brand and drive measurable business results.
            </p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;