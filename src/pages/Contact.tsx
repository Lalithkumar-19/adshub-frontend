import React, { useState, useEffect } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Sparkles,
  Star,
  Target,
  Heart,
  Youtube,
  Facebook,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactsAPI } from "@/services/api";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/toaster";

const NatureInput = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  required,
  className = "",
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full px-4 py-3 rounded-lg border-2 bg-gray-800/90 backdrop-blur-sm text-white placeholder-gray-400 transition-all duration-300 ${focused
          ? "border-purple-400 shadow-lg shadow-purple-400/20 bg-gray-700 ring-2 ring-purple-200/20"
          : "border-purple-700 hover:border-purple-500"
          } ${className}`}
      />
      {focused && (
        <div className="absolute -top-1 -right-1 animate-bounce">
          <Target size={16} className="text-purple-400" />
        </div>
      )}
    </div>
  );
};

// Animated textarea component
const NatureTextarea = ({
  id,
  placeholder,
  value,
  onChange,
  required,
  className = "",
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full px-4 py-3 rounded-lg border-2 bg-gray-800/90 backdrop-blur-sm text-white placeholder-gray-400 transition-all duration-300 resize-none ${focused
          ? "border-purple-400 shadow-lg shadow-purple-400/20 bg-gray-700 ring-2 ring-purple-200/20"
          : "border-purple-700 hover:border-purple-500"
          } ${className}`}
        rows={4}
      />
      {focused && (
        <div className="absolute -top-1 -right-1 animate-bounce">
          <Target size={16} className="text-purple-400" />
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project_brief: "",
    budget: 10000,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Convert budget string to number and add status field
      const submitData = {
        ...formData,
        phone: Number(formData.phone),
        budget: Number(formData.budget),
        status: false, // Default to pending status for new contacts
      };
      const res = await contactsAPI.create(submitData);
      console.log(res, "res");

      toast.success("Contact form submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        project_brief: "",
        budget: 10000,
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Failed to submit contact form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 mt-20">
      <Toaster />
      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent mb-6">
              Start Your Campaign
            </h1>
            <p className="text-xl text-gray-300">
              Ready to amplify your brand? Share your vision with us and let's create something extraordinary together.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-purple-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <NatureInput
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <NatureInput
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Phone
                </label>
                <NatureInput
                  id="phone"
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="project_brief"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Project Brief
                </label>
                <NatureTextarea
                  id="project_brief"
                  placeholder="Tell us about your campaign goals..."
                  value={formData.project_brief}
                  onChange={(e) =>
                    handleInputChange("project_brief", e.target.value)
                  }
                  className="w-full h-32"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Budget
                </label>
                <NatureInput
                  id="budget"
                  type="number"
                  placeholder="Enter your campaign budget"
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white py-3 text-lg font-semibold border border-purple-500/50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent mb-16">
            Connect With Our Team
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Address:
                    </h3>
                    <p className="text-gray-300">
                      London , UK
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email:</h3>
                    <p className="text-gray-300">adshubuk@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone:</h3>
                    <p className="text-gray-300">+44 7350054689</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Sparkles size={20} className="text-purple-400" />
                  Follow Our Journey
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://youtube.com/@adshubuk?si=YbkDRplWfWR7Dpgr"
                    className="group relative w-12 h-12 bg-gray-800 hover:bg-purple-900/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700"
                  >
                    <Youtube className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                  </a>
                  <a
                    href="https://www.facebook.com/share/16sZcDgwaC/?mibextid=wwXIfr"
                    className="group relative w-12 h-12 bg-gray-800 hover:bg-purple-900/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700"
                  >
                    <Facebook className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                  </a>

                  <a
                    href="https://www.instagram.com/AdsHub.uk?igsh=MWd4YXJpcnE5NG9maw%3D%3D&utm_source=qr"
                    className="group relative w-12 h-12 bg-gray-800 hover:bg-purple-900/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700"
                  >
                    <Instagram className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                  </a>
                  <a
                    href="https://www.tiktok.com/@AdsHub.uk?_t=ZN-90cYZERSzUE&_r=1"
                    className="group relative w-12 h-12 bg-gray-800 hover:bg-purple-900/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700"
                  >
                    <img src="/tiktok-logo.svg" className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                  </a>

                </div>
              </div>
            </div>

            <div className="bg-gray-800/70 backdrop-blur-md rounded-3xl overflow-hidden border border-purple-700/50 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-purple-900/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20"></div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                  alt="Our creative workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 border border-purple-700/50">
                    <Target
                      size={32}
                      className="mx-auto mb-2 text-purple-400 animate-pulse"
                    />
                    <p className="text-lg font-semibold text-white">
                      Our Creative Hub
                    </p>
                    <p className="text-sm text-gray-300">
                      Where innovative campaigns come to life
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;