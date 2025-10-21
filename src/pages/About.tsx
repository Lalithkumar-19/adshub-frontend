// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Users, Award, Clock, Globe } from "lucide-react";

// const About = () => {
//   const stats = [
//     { icon: <Users className="w-8 h-8" />, number: "50+", label: "Projects Completed" },
//     { icon: <Award className="w-8 h-8" />, number: "25+", label: "Happy Clients" },
//     { icon: <Clock className="w-8 h-8" />, number: "5+", label: "Years Experience" },
//     { icon: <Globe className="w-8 h-8" />, number: "10+", label: "Countries Served" },
//   ];

//   const team = [
//     {
//       name: "Sarah Johnson",
//       role: "CEO & Founder",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop",
//       bio: "With over 10 years in tech leadership, Sarah founded Innovatech to bridge the gap between innovative technology and business success.",
//     },
//     {
//       name: "Michael Chen",
//       role: "Lead Developer",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
//       bio: "Michael specializes in full-stack development and has architected scalable solutions for startups to enterprise clients.",
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "UI/UX Designer",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
//       bio: "Emily creates intuitive and beautiful user experiences that drive engagement and conversion for our clients.",
//     },
//     {
//       name: "David Kim",
//       role: "Project Manager",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
//       bio: "David ensures every project is delivered on time and exceeds client expectations through meticulous planning and execution.",
//     },
//   ];

//   const values = [
//     {
//       title: "Innovation",
//       description: "We stay at the forefront of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.",
//     },
//     {
//       title: "Quality",
//       description: "Every line of code we write and every design we create meets the highest standards of quality and performance.",
//     },
//     {
//       title: "Collaboration",
//       description: "We work closely with our clients as partners, ensuring their vision is realized through transparent communication and feedback.",
//     },
//     {
//       title: "Results",
//       description: "Our success is measured by the impact we create for our clients' businesses and the value we bring to their operations.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-teal-50 to-green-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h1 className="text-5xl font-bold text-gray-900 mb-6">About Onlyus Media</h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We're a passionate team of developers, designers, and strategists dedicated to transforming
//               ideas into powerful digital experiences that drive business growth.
//             </p>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Founded in 2019, Onlyus Media emerged from a simple belief: that every business deserves
//                 access to world-class web development that drives real results. Our founders, having worked at
//                 leading tech companies, saw an opportunity to bring enterprise-level expertise to businesses of all sizes.
//               </p>
//               <p className="text-gray-600 mb-6 leading-relaxed">
//                 Today, we're proud to have helped over 50 businesses transform their digital presence, from
//                 startups launching their first website to established companies scaling their web applications.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 Our commitment to innovation, quality, and client success has made us a trusted partner for
//                 businesses looking to thrive in the digital landscape.
//               </p>
//             </div>
//             <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
//                 alt="Team collaboration"
//                 className="w-full h-96 object-cover rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Values */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Meet Our Team</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <div key={index} className="text-center">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
//                 />
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
//                 <p className="text-teal-600 font-medium mb-4">{member.role}</p>
//                 <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-teal-500">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Work With Us?
//           </h2>
//           <p className="text-xl text-white/90 mb-8">
//             Let's discuss how we can help transform your digital presence and drive your business forward.
//           </p>
//           <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
//             Start Your Project
//           </Button>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default About;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Users,
  Award,
  Clock,
  Globe,
  Star,
  Sparkles,
  Code,
  Lightbulb,
  Linkedin,
} from "lucide-react";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 5 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.7 + 0.3,
      }));
      setSparkles(newSparkles);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const sparkleInterval = setInterval(generateSparkles, 2000);
    generateSparkles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(sparkleInterval);
    };
  }, []);

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "20+",
      label: "Projects Crafted",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "25+",
      label: "Happy Clients",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "2+",
      label: "Years Journey",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "20+",
      label: "Dreams Realized",
    },
  ];

  const team = [
    {
      name: "Goutham",
      role: "Co-Founder & Digital marketing ,SEO Expert",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQG_SqcLhs9Zuw/profile-displayphoto-crop_800_800/B56ZhFrAoxG0AM-/0/1753515561444?e=1756944000&v=beta&t=u32xjT7vOi1z8Qj-atz-39237N8RODl6I2NVyidWSuo",
      bio: "Also pursuing B.Tech 4th year at RGUKT IIIT Ongole, Goutham brings creative vision to life through innovative design and strategic thinking.",
      magic: "✨",
      linkedin: "https://www.linkedin.com/in/gowtham-surya-naramamidi-8190ab244/"
    },
    {
      name: "Lalith Kumar",
      role: "Co-Founder & Web Developer & UI/UX Designer ",
      image:
        "https://i.ibb.co/W8NDV2j/customer-Extract-Customer-Data-item-json-customer-Phone-Date-now.jpg",
      bio: "A 4th-year B.Tech student at RGUKT IIIT Ongole who believes code can weave magic into reality. Lalith transforms complex problems into elegant digital solutions.",
      magic: "🌟",
      linkedin: "https://www.linkedin.com/in/lalithkumar005/"
    },

    {
      name: "Ganesh Basavoju",
      role: "Co-Founder & web developer & UI/UX Designer ",
      image:
        "https://avatars.githubusercontent.com/u/175459808?v=4",
      bio: "Ganesh is a 4th-year B.Tech student at RGUKT IIIT Ongole who is passionate about coding and problem-solving. He is a technical wizard who can turn complex problems into elegant digital solutions.",
      magic: "🔮",
      linkedin: "https://www.linkedin.com/in/ganesh-basavoju/"
    },
    {
      name: "Abhimanyu Sharma",
      role: "Digital Marketing Expert & Fashion designer ",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQEz33QbL8oS7A/profile-displayphoto-shrink_400_400/B56ZZ7EVY.GkAg-/0/1745821456475?e=1758758400&v=beta&t=CpnICXrg_13rWKcQRbFW3UYr5SgHAN66HrOBDcljFTc",
      bio: `Business Development expert, Funnel Builder/Development Specialist(Ecom, Coaches, Consultants, EdTech and Saas funnels) 
And Omni Channel Marketing Expert. Helped 50+ Brands and Businesses. 
Let's do care of your Business.`,
      magic: "🔮",
      linkedin: "https://www.linkedin.com/in/ceo-abhi/"
    },

  ];

  const values = [
    {
      title: "Innovation Magic",
      description:
        "We believe every line of code holds the potential to create something extraordinary. Our innovations emerge from the perfect blend of technical expertise and creative imagination.",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      title: "Crafted Excellence",
      description:
        "Like master artisans, we pour our passion into every project, ensuring each digital creation is not just functional but truly enchanting.",
      icon: <Star className="w-8 h-8" />,
    },
    {
      title: "Collaborative Alchemy",
      description:
        "The real magic happens when minds meet. We work with our clients as co-creators, transforming visions into digital reality through transparent partnership.",
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      title: "Transformative Impact",
      description:
        "Our success is measured not just in code deployed, but in dreams realized and businesses transformed through the power of thoughtful technology.",
      icon: <Code className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-white via-green-50 to-emerald-50 relative overflow-hidden">
      {/* Floating Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute pointer-events-none animate-pulse"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            opacity: sparkle.opacity,
          }}
        >
          <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
        </div>
      ))}

      {/* Mouse Trail Effect */}
      <div
        className="fixed pointer-events-none z-10 w-6 h-6 bg-green-300 rounded-full opacity-30 blur-sm transition-all duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100 to-transparent opacity-50 blur-3xl"></div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6 relative">
              About{" "}
              <span className="text-green-500 inline-block animate-bounce">
                OnlyUs Media
              </span>{" "}
              Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed relative">
              Born from the dreams of two passionate students, we weave
              technology with imagination to create digital experiences that
              don't just function—they enchant, inspire, and transform.
            </p>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:shadow-green-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Magical Story */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-200 to-emerald-200 rounded-lg opacity-20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="The magical beginning"
                className="w-full h-96 object-cover rounded-lg shadow-2xl relative hover:shadow-green-300 transition-shadow duration-300"
              />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-green-500">Magical</span> Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                It all began in the hallowed halls of RGUKT IIIT Ongole, where
                two 4th-year B.Tech students Goutham and Lalith kumar and Ganesh,
                discovered that code could be more than just logic—it could be
                poetry, art, and magic combined.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Late nights in the computer lab turned into early mornings of
                inspiration. What started as assignments became passion
                projects, and passion projects became the foundation of
                something greater. We realized that every website, every
                application, every digital solution we created had the power to
                touch lives and transform businesses.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, Onlyus Media stands as a testament to the belief
                that when young minds dare to dream and have the skills to make
                those dreams reality, magic happens. We're not just building
                websites— we're crafting digital experiences that make people
                stop, smile, and believe in the power of technology.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-full font-semibold hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105">
                <Star className="w-5 h-5 mr-2" />
                Still Students, Already Wizards
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Magical Values */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">
            Our <span className="text-green-500">Magical</span> Values
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            The enchanted principles that guide our every creation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-green-200 transition-all duration-300 group border border-green-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Magical Team */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-4">
            Meet Our <span className="text-green-500">Magical</span> Team
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            The dreamers, creators, and magic-makers behind every project
          </p>
          <div className="flex gap-3">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full opacity-30 group-hover:opacity-60 transition-opacity blur-lg"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover relative border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {member.magic}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex  w-full justify-center gap-3 mt-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6 text-green-600" />
                  </a>
                  {/* <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-6 h-6 text-green-600" />
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Magical CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 via-green-400 to-emerald-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="mb-8">
            <Sparkles className="w-16 h-16 text-white mx-auto mb-4 animate-spin" />
            <h2 className="text-5xl font-bold text-white mb-6" onClick={() => { location.href = "/contact" }}>
              Ready to Create <span className="italic">Magic</span> Together?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Every great digital story begins with a conversation. Let's weave
              your vision into reality and create something truly enchanting
              that will make your audience believe in magic.
            </p>
          </div>
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-12 py-4 text-lg font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/30">
            <Star className="w-5 h-5 mr-2" />
            Begin Your Magical Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
