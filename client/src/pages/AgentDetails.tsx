import { Link, useParams } from "react-router";
import { agents } from "../mock-data/agents";
import { motion } from "motion/react";
import { BiStar, BiPhone, BiMailSend } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function AgentDetails() {
  const { id } = useParams();
  const agent = agents.find((a) => String(a.id) === String(id));

  if (!agent) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="text-center">
          <p className="text-2xl mb-6">Agent not found.</p>
          <Link
            to="/findAgent"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Back to Agents
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        >
          {/* Agent Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-96 md:h-[450px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${agent.image})`,
            }}
          />

          {/* Agent Info */}
          <div className="p-8 md:p-10 space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b-2 border-gray-200"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {agent.name}
                </h1>
                <p className="text-xl text-blue-600 font-semibold">
                  {agent.specialty}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
                <BiStar className="text-yellow-500" size={20} />
                <span className="text-sm font-semibold text-blue-700">
                  {agent.years}+ Years Experience
                </span>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-3">
                Languages Spoken
              </h3>
              <div className="flex flex-wrap gap-2">
                {agent.languages.map((language) => (
                  <motion.span
                    key={language}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg font-medium text-sm border border-blue-200"
                  >
                    {language}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Accomplishments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-4">
                Accomplishments & Expertise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {agent.accomplishments.map((accomplishment, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-slate-50 to-gray-100 rounded-lg border border-gray-200 hover:border-blue-300 transition"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {accomplishment}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4 pt-6 border-t-2 border-gray-200"
            >
              <Link
                to="/contact"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 group shadow-lg hover:shadow-xl"
              >
                <BiMailSend size={20} />
                <span>Contact Agent</span>
              </Link>
              <Link
                to="/findAgent"
                className="flex-1 flex items-center justify-center gap-2 border-2 border-blue-200 hover:border-blue-500 text-blue-600 hover:text-blue-700 font-semibold py-4 rounded-lg transition-all duration-200 bg-blue-50 hover:bg-blue-100"
              >
                <span>Back to All Agents</span>
                <AiOutlineArrowRight />
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 bg-blue-50 border border-blue-200 rounded-lg"
            >
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <BiPhone className="text-blue-600" size={16} />
                Need help? Contact our support team for more information about{" "}
                <span className="font-semibold text-gray-900">
                  {agent.name}
                </span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
