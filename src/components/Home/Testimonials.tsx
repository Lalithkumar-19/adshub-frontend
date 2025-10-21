import React from 'react';
import { motion } from 'framer-motion';

// Testimonials Column Component
const TestimonialsColumn = ({ testimonials, duration = 15, className = "" }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-6 sm:p-7 md:p-8 rounded-2xl border border-gray-700 bg-gray-800 shadow-lg shadow-purple-500/5 max-w-[280px] sm:max-w-xs w-full hover:shadow-purple-500/10 transition-all duration-300 hover:border-purple-600"
                key={i}
              >
                <div className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{text}</div>
                <div className="flex items-center gap-3">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full border-2 border-purple-600/50 object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold tracking-tight leading-5 text-white">{name}</div>
                    <div className="leading-5 text-purple-400 tracking-tight text-sm font-medium">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    text: "Working with this agency transformed our brand identity. They took our vague ideas and turned them into a compelling visual story that resonates with our target audience. The campaign results exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Sarah Mitchell",
    role: "Marketing Director, TechStart Solutions",
  },
  {
    text: "Our social media engagement skyrocketed after implementing their creative strategy. They understood our brand voice perfectly and delivered content that actually converts. ROI increased by 220% in just three months.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Michael Rodriguez",
    role: "Brand Manager, GrowthCorp",
  },
  {
    text: "After struggling with inconsistent messaging for years, we finally found an agency that gets it. The brand guidelines they developed have unified our communications across all channels. Our customers actually recognize us now.",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    name: "Emma Thompson",
    role: "Creative Director, Thompson & Associates",
  },
  {
    text: "The digital campaign they crafted for our product launch was phenomenal. We reached 3x more qualified leads than projected and the creative assets were stunning. Worth every penny we invested.",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    name: "David Chen",
    role: "Product Manager, Urban Retail",
  },
  {
    text: "They delivered a complete rebranding on time and within our budget. No surprises, just exceptional creative work from start to finish. Already planning our next campaign with them.",
    image: "https://randomuser.me/api/portraits/women/54.jpg",
    name: "Lisa Johnson",
    role: "Project Coordinator, BuildRight",
  },
  {
    text: "The video content they produced for us went viral across platforms. Clean, compelling storytelling and professional production quality. Our engagement metrics are through the roof.",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    name: "Rachel Green",
    role: "Head of Content, DataFlow Systems",
  },
  {
    text: "We needed a campaign that would stand out in a crowded market. They nailed it. The creative concepts were fresh, the execution flawless, and the results speak for themselves.",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    name: "James Wilson",
    role: "Creative Director, PixelCraft Studio",
  },
  {
    text: "Migrating our entire marketing strategy seemed impossible until we met this team. They handled everything seamlessly - from strategy to execution. Our brand presence is so much stronger now.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    name: "Amanda Foster",
    role: "Marketing Director, LogiFlow",
  },
  {
    text: "As a startup, we needed branding that looked established but didn't break the bank. They delivered both. Our brand recognition tripled in the first quarter after launch.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Ryan Park",
    role: "Founder, CloudSync Technologies",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-purple-900/20 py-20 relative overflow-hidden min-h-screen">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_70%)]"></div>

      <div className="container z-10 mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-purple-700 bg-gray-800/80 backdrop-blur-sm py-2 px-6 rounded-full text-purple-300 font-medium shadow-sm">
              Client Success Stories
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-6 text-center">
            <span className="bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent">
              What our clients say
            </span>
          </h2>
          <p className="text-center mt-6 text-gray-300 text-lg leading-relaxed">
            Don't just take our word for it. See what our clients have to say about our creative partnerships.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden sm:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;