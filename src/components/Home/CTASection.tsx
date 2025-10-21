import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_70%)]"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/15 rounded-full blur-lg animate-bounce delay-500"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            onClick={() => {
              location.href = "/contact";
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-purple-600/20 backdrop-blur-sm px-4 py-2 rounded-full text-purple-200 text-sm font-medium border border-purple-500/30 cursor-pointer hover:bg-purple-600/30 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4" />
            Ready to transform your brand?
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready to elevate your{' '}
            <span className="relative">
              <span className="relative z-10">brand presence?</span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-purple-500/40 rounded-full origin-left"
              ></motion.div>
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Let's collaborate to create compelling campaigns that drive growth
            and establish your brand as an industry leader.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                location.href = "/contact";
              }}
              className="group bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[280px] justify-center border border-purple-500/50"
            >
              Launch Your Next Campaign
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              onClick={() => {
                location.href = "/projects";
              }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-purple-400 text-purple-200 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 min-w-[200px]"
            >
              View Case Studies
            </motion.button>
          </motion.div>

          {/* Stats or social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12 pt-8 border-t border-purple-500/20"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-purple-200 text-sm">Campaigns Launched</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-purple-500/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-purple-200 text-sm">Brands Transformed</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-purple-500/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-purple-200 text-sm">Strategic Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;