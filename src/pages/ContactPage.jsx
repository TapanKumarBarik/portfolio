// pages/ContactPage.jsx
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Download,
  MessageCircle,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  Video,
  Coffee,
  Zap,
  Globe,
  Twitter,
} from "lucide-react";
import { usePortfolio } from "../contexts";
import { Card, Button } from "../components/common";
import { validateEmail } from "../utils/helpers";

const ContactPage = () => {
  const { personalInfo } = usePortfolio();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    contactMethod: "email",
    projectType: "",
    budget: "",
    timeline: "",
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formStatus.type === "error") {
      setFormStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Enhanced validation
    if (!formData.name.trim()) {
      setFormStatus({ type: "error", message: "Please enter your name." });
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    if (!formData.message.trim()) {
      setFormStatus({ type: "error", message: "Please enter a message." });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setFormStatus({
        type: "success",
        message:
          "Thank you for reaching out! I'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        contactMethod: "email",
        projectType: "",
        budget: "",
        timeline: "",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or contact me directly.",
      });
    }

    setIsSubmitting(false);
  };

  const quickActions = [
    {
      title: "Quick Chat",
      description: "15-minute intro call",
      icon: <MessageCircle className="w-5 h-5" />,
      action: () =>
        window.open(
          `mailto:${personalInfo.contact.email}?subject=Quick Chat Request&body=Hi! I'd like to schedule a quick 15-minute chat about...`,
          "_blank"
        ),
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Project Inquiry",
      description: "Discuss your project",
      icon: <Zap className="w-5 h-5" />,
      action: () =>
        window.open(
          `mailto:${personalInfo.contact.email}?subject=Project Inquiry&body=Hi! I have a project I'd like to discuss...`,
          "_blank"
        ),
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Coffee Meeting",
      description: "Virtual coffee chat",
      icon: <Coffee className="w-5 h-5" />,
      action: () =>
        window.open(
          `mailto:${personalInfo.contact.email}?subject=Coffee Chat&body=Hi! Would you like to have a virtual coffee chat about...`,
          "_blank"
        ),
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Collaboration",
      description: "Partnership opportunities",
      icon: <Globe className="w-5 h-5" />,
      action: () =>
        window.open(
          `mailto:${personalInfo.contact.email}?subject=Collaboration Opportunity&body=Hi! I'm interested in collaborating on...`,
          "_blank"
        ),
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      platform: "GitHub",
      username: "@tapan",
      url: personalInfo.social.github,
      icon: <Github className="w-5 h-5" />,
      color:
        "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600",
      textColor: "text-gray-700 dark:text-gray-300",
    },
    {
      platform: "LinkedIn",
      username: "Connect",
      url: personalInfo.social.linkedin,
      icon: <Linkedin className="w-5 h-5" />,
      color:
        "bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50",
      textColor: "text-blue-700 dark:text-blue-300",
    },
    {
      platform: "Twitter",
      username: "@tapandev",
      url: personalInfo.social.twitter || "https://twitter.com/tapandev",
      icon: <Twitter className="w-5 h-5" />,
      color:
        "bg-sky-100 dark:bg-sky-900/30 hover:bg-sky-200 dark:hover:bg-sky-900/50",
      textColor: "text-sky-700 dark:text-sky-300",
    },
    {
      platform: "Email",
      username: personalInfo.contact.email,
      url: `mailto:${personalInfo.contact.email}`,
      icon: <Mail className="w-5 h-5" />,
      color:
        "bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50",
      textColor: "text-green-700 dark:text-green-300",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block p-4 bg-gradient-to-br from-green-100 to-purple-100 dark:from-green-900/20 dark:to-purple-900/20 rounded-2xl mb-6">
          <MessageCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Let's Create Something Amazing Together
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Whether you have a project in mind, want to collaborate, or just want
          to say hello – I'd love to hear from you!
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {quickActions.map((action, index) => (
          <Card
            key={index}
            className="p-6 text-center cursor-pointer group"
            hover={true}
            onClick={action.action}
          >
            <div
              className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}
            >
              {action.icon}
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">
              {action.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {action.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Send Me a Message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              {/* Company and Subject Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                </div>
              </div>

              {/* Project Details Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="consultation">Consultation</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex gap-4">
                  {["email", "phone", "video-call"].map((method) => (
                    <label
                      key={method}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={formData.contactMethod === method}
                        onChange={handleInputChange}
                        className="text-green-500 focus:ring-green-500"
                      />
                      <span className="text-gray-700 dark:text-gray-300 capitalize">
                        {method.replace("-", " ")}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project, ideas, or how I can help you..."
                  required
                ></textarea>
              </div>

              {/* Form Status */}
              {formStatus.message && (
                <div
                  className={`p-4 rounded-xl flex items-center gap-3 ${
                    formStatus.type === "success"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                      : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                  }`}
                >
                  {formStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  {formStatus.message}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                size="lg"
                icon={isSubmitting ? null : <Send className="w-5 h-5" />}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Message...
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Card>
        </div>

        {/* Contact Information Sidebar */}
        <div className="space-y-6">
          {/* Contact Details */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-500" />
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Email
                  </p>
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Phone
                  </p>
                  <a
                    href={`tel:${personalInfo.contact.phone}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                  >
                    {personalInfo.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Location
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {personalInfo.contact.location}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Response Time */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white">
                Response Time
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              I typically respond within <strong>24 hours</strong>. For urgent
              matters, feel free to call directly.
            </p>
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Usually online 9 AM - 6 PM EST
            </div>
          </Card>

          {/* Social Links */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Connect With Me
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all group ${social.color}`}
                >
                  <div className={social.textColor}>{social.icon}</div>
                  <div className="flex-1">
                    <span className={`font-medium block ${social.textColor}`}>
                      {social.platform}
                    </span>
                    <span className={`text-sm ${social.textColor} opacity-75`}>
                      {social.username}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </Card>

          {/* Availability */}
          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {personalInfo.status.availabilityText}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
              I'm currently accepting new projects and collaborations. Let's
              build something amazing together!
            </p>

            <div className="space-y-3">
              <Button
                icon={<Download className="w-4 h-4" />}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "#";
                  link.download = "Tapan_Resume.pdf";
                  link.click();
                }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg"
                size="sm"
              >
                Download Resume
              </Button>

              <Button
                variant="secondary"
                icon={<Calendar className="w-4 h-4" />}
                onClick={() =>
                  window.open("https://calendly.com/tapan", "_blank")
                }
                className="w-full"
                size="sm"
              >
                Schedule Meeting
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <Card className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              question: "What's the best way to reach you?",
              answer:
                "Email is usually best for detailed discussions. For quick questions or urgent matters, feel free to call. I also offer video calls for project discussions.",
              icon: <MessageCircle className="w-5 h-5" />,
            },
            {
              question: "What types of projects do you work on?",
              answer:
                "I specialize in web applications, mobile apps, and full-stack development. I also provide consulting, code reviews, and technical mentorship.",
              icon: <Zap className="w-5 h-5" />,
            },
            {
              question: "What's your typical response time?",
              answer:
                "I respond to emails within 24 hours on weekdays. For project inquiries, I'll get back to you with a detailed response within 48 hours.",
              icon: <Clock className="w-5 h-5" />,
            },
            {
              question: "Do you work with startups and small businesses?",
              answer:
                "Absolutely! I love working with startups and small businesses. I understand the unique challenges and can provide flexible solutions that scale with your growth.",
              icon: <Zap className="w-5 h-5" />,
            },
            {
              question: "Can we schedule a call to discuss my project?",
              answer:
                "Yes! I offer free 15-minute consultation calls to discuss your project needs. Use the 'Schedule Meeting' button or mention it in your message.",
              icon: <Video className="w-5 h-5" />,
            },
            {
              question: "What information should I include in my message?",
              answer:
                "Tell me about your project goals, timeline, budget range, and any specific requirements. The more details you provide, the better I can help you.",
              icon: <CheckCircle className="w-5 h-5" />,
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">{faq.icon}</span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  {faq.question}
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed ml-11">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ContactPage;
