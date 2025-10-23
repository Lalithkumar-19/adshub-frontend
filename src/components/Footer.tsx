import { Linkedin, Instagram, ArrowUp, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-purple-900 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="animate-pulse absolute top-10 left-10 w-20 h-20 bg-purple-600 rounded-full blur-xl"></div>
          <div className="animate-pulse absolute top-32 right-20 w-16 h-16 bg-purple-500 rounded-full blur-lg delay-1000"></div>
          <div className="animate-pulse absolute bottom-20 left-1/3 w-24 h-24 bg-purple-700 rounded-full blur-xl delay-2000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <a href="/" className="group flex items-center ">
                    <img src="/logo.jpg" alt="logo" className="w-16  h-16" />
                  </a>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  ADSHUB
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                We craft compelling brand stories and digital experiences that drive growth.
                From creative campaigns to powerful web solutions, we elevate your brand presence
                in the digital landscape.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://youtube.com/@adshubuk?si=YbkDRplWfWR7Dpgr"
                className="group relative w-12 h-12 bg-gray-800 hover:bg-purple-900/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700"
              >
                <Youtube className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
              </a>
              <a
                href="https://www.instagram.com/adshub.uk?igsh=MWd4YXJpcnE5NG9maw%3D%3D&utm_source=qr"
                className="group relative w-12 h-12 bg-gray-800 hover:bg-purple-900/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700"
              >
                <Instagram className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
              </a>
              <a
                href="https://www.tiktok.com/@adshub.uk?_t=ZN-90cYZERSzUE&_r=1"
                className="group relative w-12 h-12 bg-gray-800 hover:bg-purple-900/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700"
              >
                <img src="/tiktok-logo.svg" className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
              </a>
              <a
                href="https://wa.me/+447350054689"
                target="_blank"
                className="group relative w-12 h-12  bg-gray-800 hover:bg-purple-900/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-purple-400 bi bi-whatsapp group-hover:text-purple-300 transition-colors duration-300" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>

                <div className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
              </a>

            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white relative group">
              Services
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-500"></div>
            </h4>
            <ul className="space-y-3">
              {[
                "Brand Strategy",
                "Creative Campaigns",
                "Web Development",
                "Digital Marketing",
                "UI/UX Design",
              ].map((service, index) => (
                <li key={index}>
                  <span
                    className="group flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 group-hover:bg-purple-400 group-hover:scale-125 transition-all duration-300"></div>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white relative group">
              Company
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-500"></div>
            </h4>
            <ul className="space-y-3">
              {[
                // { item: "About Us", link: "/about" },
                { item: "Case Studies", link: "/projects" },
                { item: "Contact", link: "/contact" },
                { item: "About Us", link: "/about" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="group flex items-center text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 group-hover:bg-purple-400 group-hover:scale-125 transition-all duration-300"></div>
                    {item.item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>



        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-gray-400 text-sm">
              © 2025 ADSHUB. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/privacy-policy"
                className="text-sm text-gray-500 hover:text-purple-400 transition-colors duration-300 relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="terms-of-service"
                className="text-sm text-gray-500 hover:text-purple-400 transition-colors duration-300 relative group"
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group relative w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg border border-purple-500/50"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes expand {
          0% {
            width: 0%;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;