import { Link } from "react-router";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Explore",
      links: [
        { label: "Browse Listings", href: "/catalog" },
        { label: "FAQ", href: "/faq" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "/legal/terms" },
        { label: "Privacy Policy", href: "/legal/privacy" },
        { label: "CCPA Privacy Policy", href: "/legal/ccpa" },
        { label: "Legal Disclaimer", href: "/legal/disclaimer" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-slate-950 text-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-3">
                casaFind
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner in finding the perfect home. Explore
                exclusive listings and connect with top agents across the US and
                Canada.
              </p>
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
              Connect
            </h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/10 hover:bg-pink-500/20 text-gray-300 hover:text-pink-400 transition-all duration-200"
              >
                <FaInstagram size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/shefket-mustafa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/10 hover:bg-gray-600/20 text-gray-300 hover:text-gray-200 transition-all duration-200"
              >
                <FaGithub size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/shefket-mustafa-81356a360/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/10 hover:bg-blue-600/20 text-gray-300 hover:text-blue-400 transition-all duration-200"
              >
                <FaLinkedin size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />

        {/* Disclaimer & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-gray-500 text-xs leading-relaxed">
            casaFind is not a real estate broker, mortgage broker or mortgage
            lender, and casaFind does not aid or assist borrowers in obtaining,
            solicit borrowers or lenders for, negotiate or make loans secured by
            liens on real property.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
            <p className="text-gray-600 text-xs">
              © {currentYear} casaFind - All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-600">
              <Link
                to="/legal/terms"
                className="hover:text-blue-400 transition-colors"
              >
                Terms
              </Link>
              <Link
                to="/legal/privacy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/legal/sitemap"
                className="hover:text-blue-400 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
