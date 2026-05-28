import { useNavigate } from "react-router";
import { usePopUp } from "../context/PopUpContext";
import { motion } from "motion/react";
import { BiPhone, BiMailSend, BiMap } from "react-icons/bi";

export interface PopHandler {
  popHandler: (message: string) => void;
}

export default function Contacts() {
  const navigate = useNavigate();
  const { popHandler } = usePopUp();

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-blue-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl hover:shadow-lg transition">
                <BiPhone className="text-blue-600 mb-3" size={28} />
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">+1 (555) 000-0000</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-white border border-purple-200 rounded-xl hover:shadow-lg transition">
                <BiMailSend className="text-purple-600 mb-3" size={28} />
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">info@casafind.com</p>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const name = formData.get("name");
                popHandler(
                  `Thanks for reaching out, ${name}! Our team will contact you ASAP!`,
                );
                (e.target as HTMLFormElement).reset();
                setTimeout(() => {
                  navigate("/");
                }, 2000);
              }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-white/50 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-white/50 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  className="w-full bg-white/50 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  required
                  className="w-full bg-white/50 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 mt-6"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Map & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Map */}
            <div className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23456.003859020784!2d27.234567640660302!3d42.703710554404196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a67d1235fd61f7%3A0xd02df78ed5d97238!2zODUwMCDQkNC50YLQvtGB!5e0!3m2!1sbg!2sbg!4v1752698361686!5m2!1sbg!2sbg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Office Info */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <BiMap className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    Our Office
                  </h3>
                  <p className="text-gray-600">8500 Sofia, Bulgaria</p>
                  <p className="text-gray-600">
                    Available Monday - Friday, 9AM - 6PM
                  </p>
                </div>
              </div>
              <div className="border-t border-blue-200 pt-6">
                <p className="text-sm text-gray-600 mb-4">
                  <strong className="text-gray-900">Response Time:</strong> We
                  typically respond within 24 hours
                </p>
                <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
                  <p className="text-xs text-gray-600">
                    <strong>Emergency Support?</strong> Call us directly at{" "}
                    <strong className="text-blue-600">+1 (555) 000-0000</strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
