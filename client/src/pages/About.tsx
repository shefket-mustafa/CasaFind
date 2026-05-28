import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa";

export default function About() {
  const values = [
    {
      title: "Transparency",
      desc: "Open and honest communication every step of the way",
    },
    {
      title: "Expertise",
      desc: "Market-leading knowledge from seasoned professionals",
    },
    {
      title: "Innovation",
      desc: "Cutting-edge technology for seamless experiences",
    },
    {
      title: "Community",
      desc: "Building lasting relationships with our clients",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-200 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center mb-20 px-4 pt-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About CasaFind
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're committed to transforming real estate by connecting people to
            the homes they love, backed by technology and human expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24 px-4"
        >
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-10 md:p-12 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              At CasaFind, we're redefining real estate by connecting people to
              the places they truly belong. We believe finding a home should be
              personal, transparent, and supported by professionals who
              genuinely care about your journey.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 px-4"
        >
          <div className="bg-white/50 backdrop-blur-md border border-white rounded-2xl p-8 hover:border-blue-200 transition">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where every home search is stress-free, fully
              digital, and tailored to your lifestyle. Using technology, market
              insights, and genuine human connection, we deliver the most
              seamless real estate experience possible.
            </p>
          </div>
          <div className="bg-white/50 backdrop-blur-md border border-white rounded-2xl p-8 hover:border-purple-200 transition">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Meet the Team
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We're a diverse group of real estate agents, designers, and tech
              innovators united by one mission — helping you love where you
              live. With over 10 years of combined experience, we're here to
              guide you at every step.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-24 px-4"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-200/50 rounded-xl p-6 flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                    <FaCheck className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20 px-4"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose CasaFind?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              We combine industry expertise, innovative technology, and genuine
              human care to make your real estate journey seamless, transparent,
              and successful.
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition"
            >
              Start Your Journey
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
