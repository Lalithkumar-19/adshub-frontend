import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By engaging with our marketing services, accessing our website, or utilizing our digital solutions, you accept and agree to be bound by these terms and conditions.",
        "If you do not agree with any part of these terms, please discontinue use of our services immediately.",
        "These terms govern all client relationships, campaign engagements, and service usage for all clients and partners."
      ]
    },
    {
      title: "Description of Services",
      content: [
        "We provide comprehensive digital marketing and advertising services including SEO, social media management, content creation, paid advertising, and strategic consulting.",
        "Our services encompass campaign strategy, creative development, media buying, analytics, and performance optimization across digital channels.",
        "We reserve the right to modify, enhance, or discontinue specific service offerings as market conditions and client needs evolve."
      ]
    },
    {
      title: "Client Responsibilities",
      content: [
        "Clients are responsible for providing accurate business information, brand assets, and campaign objectives in a timely manner.",
        "You agree to provide necessary access to marketing platforms and approve campaign materials within reasonable timeframes.",
        "Clients must ensure all provided content and materials comply with applicable laws and do not infringe on third-party rights.",
        "Timely feedback and approval are essential for campaign success and meeting established timelines."
      ]
    },
    {
      title: "Intellectual Property & Campaign Assets",
      content: [
        "All proprietary marketing strategies, campaign frameworks, and analytical methodologies remain our intellectual property.",
        "Client-provided brand assets and content remain the client's property, while campaign creative developed by us transfers upon full payment.",
        "Performance data and aggregated insights may be used for case studies and industry analysis in anonymized form.",
        "You may not replicate our marketing methodologies or service frameworks for competitive purposes."
      ]
    },
    {
      title: "Payment & Billing Terms",
      content: [
        "Payment terms are specified in individual service agreements, typically requiring deposits for campaign initiation.",
        "Service fees are structured based on campaign scope, duration, and performance metrics as outlined in proposals.",
        "Late payments may result in campaign pausing and may incur reinstatement fees to resume services.",
        "Clients are responsible for all platform advertising costs and third-party service fees in addition to agency fees."
      ]
    },
    {
      title: "Performance & Liability",
      content: [
        "While we employ industry-best practices, we cannot guarantee specific marketing results or ROI due to market variables beyond our control.",
        "Our liability is limited to the fees paid for specific services and does not extend to indirect business impacts.",
        "We are not liable for platform algorithm changes, market shifts, or factors affecting digital marketing performance.",
        "Performance guarantees, when provided, will be explicitly stated in individual service agreements."
      ]
    },
    {
      title: "Termination & Transition",
      content: [
        "Either party may terminate services with 30 days written notice, with prorated refunds for prepaid unused services.",
        "We reserve the right to terminate services immediately for unethical requests, non-payment, or brand safety concerns.",
        "Upon termination, we will provide all client-owned assets and campaign data in standard formats.",
        "Transition support may be available for an additional fee to ensure campaign continuity."
      ]
    },
    {
      title: "Governing Law & Disputes",
      content: [
        "These terms are governed by applicable business laws and industry standards for marketing services.",
        "Disputes will first seek resolution through mediation before pursuing formal legal proceedings.",
        "Both parties agree to act in good faith to resolve any disagreements regarding service delivery.",
        "If any provision is found unenforceable, remaining terms remain in full effect to preserve the agreement's intent."
      ]
    }
  ];

  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Clear Partnership Terms",
      description: "Transparent agreements that establish successful marketing partnerships"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Performance Focused",
      description: "Terms designed to maximize campaign success and marketing ROI"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Asset Protection",
      description: "Safeguarding your brand assets and campaign investments"
    }
  ];

  return (
    <div className="min-h-screen mt-10 bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These terms establish the framework for our marketing partnerships and service delivery.
              They ensure clarity, protect both parties, and set the stage for successful campaign collaborations.
            </p>
            <div className="mt-8 text-sm text-gray-400">
              Effective Date: June 23, 2025
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent mb-4">Partnership Framework</h2>
            <p className="text-lg text-gray-300">Essential elements for successful marketing collaborations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center bg-gray-800 rounded-2xl shadow-2xl p-6 border border-purple-700/50">
                <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-700/50">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-purple-700/50">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-6">
                  {index + 1}. {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 rounded-xl p-8 border-l-4 border-purple-500">
            <h3 className="text-2xl font-bold text-white mb-4">Important Partnership Notes</h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                <strong className="text-purple-400">Terms Evolution:</strong> Marketing landscapes evolve rapidly.
                We reserve the right to update these terms to reflect industry changes, new service offerings,
                or regulatory requirements. Continued partnership constitutes acceptance of updated terms.
              </p>
              <p className="leading-relaxed">
                <strong className="text-purple-400">Strategic Consultation:</strong> We recommend discussing any
                questions about these terms before campaign initiation. Clear understanding from the start
                ensures optimal partnership success and campaign performance.
              </p>
              <p className="leading-relaxed">
                <strong className="text-purple-400">Agreement Integrity:</strong> If any provision requires
                modification for legal compliance, the core partnership intent and remaining terms remain
                fully effective to preserve our collaborative relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions About Our Partnership Terms?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We believe strong partnerships begin with clear agreements. Our team is ready to clarify
            any aspects of these terms to ensure we start our collaboration with complete understanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 text-lg font-semibold border border-purple-500">
              Contact Partnership Team
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

export default TermsOfService;