
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Industries = () => {
  const industries = [
    {
      title: "Healthcare",
      description: "HIPAA-compliant solutions for healthcare providers, including patient portals, appointment systems, and telemedicine platforms.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      features: ["HIPAA Compliance", "Patient Portals", "Telemedicine", "Electronic Health Records"],
    },
    {
      title: "E-commerce & Retail",
      description: "Scalable e-commerce platforms with advanced inventory management, payment processing, and customer analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      features: ["Payment Integration", "Inventory Management", "Customer Analytics", "Mobile Commerce"],
    },
    {
      title: "Financial Services",
      description: "Secure and compliant financial applications with advanced encryption, fraud detection, and regulatory compliance.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      features: ["Security & Compliance", "Fraud Detection", "Payment Processing", "Risk Management"],
    },
    {
      title: "Education & Training",
      description: "Learning management systems, student portals, and educational platforms that enhance the learning experience.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
      features: ["Learning Management", "Student Portals", "Online Courses", "Progress Tracking"],
    },
    {
      title: "Real Estate",
      description: "Property management systems, listing platforms, and virtual tour solutions for real estate professionals.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      features: ["Property Listings", "Virtual Tours", "Lead Management", "Market Analytics"],
    },
    {
      title: "Manufacturing",
      description: "Industrial IoT solutions, supply chain management, and production monitoring systems for manufacturing companies.",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop",
      features: ["IoT Integration", "Supply Chain", "Production Monitoring", "Quality Control"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Industries We Serve</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide specialized web development solutions across various industries, 
              understanding the unique challenges and requirements of each sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex} 
                          className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We work with businesses across all sectors. Contact us to discuss your specific industry needs.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
