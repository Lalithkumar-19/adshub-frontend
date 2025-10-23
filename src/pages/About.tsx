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
  Zap,
  Target,
  TrendingUp,
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
      number: "200+",
      label: "Businesses Helped",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "500+",
      label: "Campaigns Launched",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "10+",
      label: "Years Journey",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "UK",
      label: "Location",
    },
  ];

  const team = [
    {
      name: "Sanjeev Singh",
      role: "Founder",
      image: "👨‍💼",
      bio: "I noticed that while big businesses are growing fast through the internet, many small businesses are still disconnected from the digital world. Most of them don't know how to use social media or Google Ads to reach new customers and grow their sales. With that thought, I started AdsHub — to help small businesses build their identity, attract customers, and grow online with low investment.",
      magic: "🚀",
    },
    {
      name: "Gaurab",
      role: "Chief Technology Officer (CTO)",
      image: "👨‍💻",
      bio: "Our visionary CTO with 10+ years of experience is a driving force behind AdsHub's innovative strategies. With a rich background in digital marketing and a passion for brand transformation, Gaurab has an innate ability to translate complex digital challenges into clear, actionable solutions. His expertise in SEO, SMM, and strategic content development consistently delivers impactful results, helping businesses thrive in the ever-evolving digital landscape.",
      magic: "🎯",
    },
  ];

  const values = [
    {
      title: "Digital Transformation",
      description: "We help small businesses build their identity and attract customers through strategic digital marketing solutions.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Growth Focused",
      description: "Our mission is to give every small business the right direction, trust, and real growth with measurable results.",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "Low Investment, High Impact",
      description: "We make digital marketing accessible to small businesses with solutions that deliver maximum ROI.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Partnership",
      description: "We work as partners in your growth journey, ensuring your brand story resonates deeply and drives lasting engagement.",
      icon: <Users className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen mt-20 bg-black relative overflow-hidden">
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
          <div className="w-full h-full bg-purple-500 rounded-full animate-ping"></div>
        </div>
      ))}

      {/* Mouse Trail Effect */}
      <div
        className="fixed pointer-events-none z-10 w-6 h-6 bg-purple-500 rounded-full opacity-30 blur-sm transition-all duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-4 w-48 h-48 lg:top-20 lg:left-10 lg:w-72 lg:h-72 bg-purple-700/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-4 w-64 h-64 lg:bottom-20 lg:right-10 lg:w-96 lg:h-96 bg-purple-700/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-purple-700/10 to-gray-800/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/30 to-transparent opacity-50 blur-3xl"></div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 relative">
              About{" "}
              <span className="text-purple-500 inline-block">AdsHub</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed relative">
              Welcome to AdsHub, where innovation meets impact in the digital world.
              We are a dynamic digital marketing agency committed to transforming your vision into measurable success.
            </p>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:shadow-purple-500/30">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gray-900/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-900/40 to-purple-700/20 rounded-lg opacity-20 blur-xl"></div>
              <div className="w-full h-80 sm:h-96 bg-gradient-to-br from-purple-900 to-gray-900 rounded-lg shadow-2xl relative flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <div className="text-6xl mb-4">🎯</div>
                  <p className="text-xl font-semibold">Transforming Small Businesses</p>
                  <p className="text-gray-400 mt-2">Digital Growth Made Simple</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our <span className="text-purple-500">Mission</span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed text-base sm:text-lg">
                Our mission is to give every small business the right direction, trust, and real growth.
                AdsHub is for those who want to turn their dreams into success.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-base sm:text-lg">
                From crafting compelling brand identities and designing intuitive websites to executing
                powerful SEO, SMM, and content strategies, we build connections that convert.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-base sm:text-lg">
                Our passion is empowering your growth, ensuring your brand story resonates deeply
                and drives lasting engagement. Partner with AdsHub, and let's create your remarkable digital future, together.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <Target className="w-5 h-5 mr-2" />
                Growth-Driven Results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
            Our <span className="text-purple-500">Values</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 sm:mb-16 text-lg">
            The principles that drive our commitment to your success
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group border border-gray-800 hover:border-purple-500/30"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gray-900/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
            Meet Our <span className="text-purple-500">Leadership</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 sm:mb-16 text-lg">
            The visionaries behind AdsHub's mission
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-900/40 to-purple-700/20 rounded-full opacity-30 group-hover:opacity-60 transition-opacity blur-lg"></div>
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white text-3xl sm:text-4xl relative border-4 border-gray-900 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>
                  {/* <div className="absolute -top-2 -right-2 text-2xl">
                    {member.magic}
                  </div> */}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-medium mb-4 text-sm sm:text-base">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="mb-8">
            <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
              Let's transform your digital presence and drive real growth for your business.
              Partner with AdsHub and start your journey to success today.
            </p>
          </div>
          <Button
            onClick={() => { location.href = "/contact" }}
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/30"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Start Your Growth Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;