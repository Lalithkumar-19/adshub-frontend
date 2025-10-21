import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "We collect information you provide when inquiring about our services, such as your name, email address, company details, and campaign requirements.",
        "For marketing campaigns, we may collect performance data, audience insights, and engagement metrics to optimize results.",
        "We automatically collect technical information about your device and browsing behavior when you interact with our website and digital assets."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To develop and execute effective marketing campaigns tailored to your business objectives.",
        "To analyze campaign performance and provide data-driven insights and recommendations.",
        "To communicate with you about campaign progress, results, and strategic opportunities.",
        "To improve our marketing services and develop new innovative solutions for our clients."
      ]
    },
    {
      title: "Information Sharing & Campaign Data",
      content: [
        "We treat all client information and campaign data with strict confidentiality and never share proprietary information without explicit consent.",
        "We may work with trusted marketing partners and platforms to execute campaigns, ensuring all partners adhere to strict data protection standards.",
        "Aggregated, anonymized campaign data may be used for industry analysis and case studies, never revealing individual client identities.",
        "Information may be disclosed only when required by law or to protect the rights and safety of our clients and company."
      ]
    },
    {
      title: "Data Security & Protection",
      content: [
        "We implement enterprise-level security measures to protect all client data, campaign strategies, and marketing assets.",
        "All sensitive client information and campaign data are encrypted both in transit and at rest using industry-standard protocols.",
        "Access to client data is strictly limited to team members directly involved in campaign execution and management.",
        "We conduct regular security audits and maintain comprehensive data protection protocols across all our systems."
      ]
    },
    {
      title: "Cookies & Marketing Analytics",
      content: [
        "We use cookies and tracking technologies to analyze campaign performance, user engagement, and website effectiveness.",
        "Marketing analytics help us understand audience behavior and optimize campaign targeting and messaging.",
        "You can control cookie preferences through your browser settings, though this may impact some analytics capabilities.",
        "We use advanced analytics platforms to measure ROI and campaign effectiveness across digital channels."
      ]
    },
    {
      title: "Your Data Rights",
      content: [
        "You have the right to access, review, and request corrections to any personal information we hold about you.",
        "You can opt-out of marketing communications at any time while maintaining access to essential service updates.",
        "You may request a complete record of the data we process for your campaigns and marketing activities.",
        "Contact our Data Protection Officer for any privacy concerns or to exercise your data protection rights."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 mt-10">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protecting your data and campaign information is fundamental to our partnership. 
              This policy outlines how we handle and safeguard your information while delivering exceptional marketing results.
            </p>
            <div className="mt-8 text-sm text-gray-400">
              Last updated: June 23, 2025
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-purple-700/50">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="text-gray-300 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-purple-700/50">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent mb-8">
              Our Commitment to Data Excellence
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-700/50">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">GDPR Compliant</h3>
                <p className="text-gray-300">We adhere to global data protection standards including GDPR and CCPA requirements.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-700/50">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Your campaign data and strategies are protected with military-grade encryption.</p>
              </div>
            </div>

            <div className="bg-purple-900/30 rounded-xl p-6 mb-8 border border-purple-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Policy Evolution</h3>
              <p className="text-gray-300 leading-relaxed">
                As marketing technologies and regulations evolve, we continuously update our privacy practices. 
                Significant changes will be communicated to all active clients, and the latest version will always 
                be available on our website with updated revision dates.
              </p>
            </div>

            <div className="bg-gray-700/50 rounded-xl p-6 border border-purple-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Campaign Data Ethics</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe in ethical marketing practices and responsible data usage. Our campaigns are designed to 
                respect user privacy while delivering measurable results. We never engage in deceptive practices or 
                unauthorized data collection, ensuring all marketing activities align with the highest ethical standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions About Data Protection?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our dedicated data protection team is here to address any concerns about your information 
            and how we safeguard your campaign data and marketing assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 text-lg font-semibold border border-purple-500">
              Contact Data Team
            </Button>
            <Button className="bg-transparent hover:bg-purple-700 text-white border-2 border-white px-8 py-3 text-lg font-semibold">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;