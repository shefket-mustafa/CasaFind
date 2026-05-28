import { Link } from "react-router";
import { agents } from "../mock-data/agents";
import { motion } from "motion/react";
import { BiStar, BiBook } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function FindAgent() {
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 min-h-screen py-12 px-4">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-12"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert Agents
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find your perfect real estate partner. Our experienced agents are
            ready to help you find your dream home or close your next
            investment.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, idx) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-gray-200">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 bg-blue-500/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <BiStar size={14} />
                  {agent.years}+ Yrs
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex flex-col h-full">
                {/* Name & Specialty */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                    {agent.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mt-1">
                    {agent.specialty}
                  </p>
                </div>

                {/* Languages */}
                <div className="flex flex-wrap gap-2">
                  {agent.languages.slice(0, 2).map((language) => (
                    <span
                      key={language}
                      className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200"
                    >
                      {language}
                    </span>
                  ))}
                  {agent.languages.length > 2 && (
                    <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
                      +{agent.languages.length - 2} more
                    </span>
                  )}
                </div>

                {/* Accomplishments Preview */}
                <div className="flex-grow">
                  <p className="text-xs text-gray-600 flex items-start gap-2 mb-2">
                    <BiBook
                      size={14}
                      className="mt-0.5 flex-shrink-0 text-blue-500"
                    />
                    <span className="line-clamp-2">
                      {agent.accomplishments[0]}
                    </span>
                  </p>
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={`/agentDetails/${agent.id}`}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 group/btn"
                  >
                    <span>View Profile</span>
                    <AiOutlineArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-16 text-center"
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6">
            Connect with one of our agents today and let's find your perfect
            property.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 group"
          >
            <span>Schedule a Consultation</span>
            <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
