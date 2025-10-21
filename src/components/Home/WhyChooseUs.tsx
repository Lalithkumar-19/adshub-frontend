import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Zap, Users, Shield, Trophy, Rocket, Target, Lightbulb, BarChart3, HeartHandshake, Globe, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Excellence",
      description: "Our award-winning creative team crafts compelling visuals and narratives that capture attention and drive engagement."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Precision",
      description: "Data-driven strategies that target the right audience with the right message at the perfect time for maximum impact."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Team",
      description: "Your personal account team provides 24/7 support and strategic guidance throughout every campaign."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Proven Results",
      description: "Track record of delivering measurable ROI and exceeding KPIs for brands across multiple industries."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "We leverage cutting-edge technologies and emerging trends to keep your brand ahead of the competition."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Focused",
      description: "Campaigns designed not just for visibility, but for sustainable business growth and market leadership."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-700/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="bg-purple-900/50 text-purple-300 border border-purple-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Why Partner With Us
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Your Vision is Our
            <span className="text-purple-400 block">Mission</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We blend creative brilliance with strategic insight to deliver campaigns that don't just look good -
            they drive measurable business growth and market impact.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-700 h-full hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-600 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mt-6"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-700 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 border border-purple-500/50"
          >
            Launch Your Campaign
          </motion.button>

          <p className="text-gray-400 mt-4">
            Join 100+ visionary brands that trust us to elevate their market presence
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;