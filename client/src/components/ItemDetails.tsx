import { Link, useParams } from "react-router";
import { useListings } from "../context/ListingsContext";
import { motion } from "motion/react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { BiCalendar, BiMap } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function ItemDetails() {
  const { id } = useParams();
  const { listings } = useListings();
  const listing = listings.find((listing) => listing.id === id);

  if (!listing) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="text-center">
          <p className="mb-6">Listing not found.</p>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Back to Catalog
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-96 md:h-[500px] rounded-2xl bg-cover bg-center mb-10 shadow-2xl overflow-hidden"
          style={{ backgroundImage: `url(${listing.image})` }}
        />

        {/* Content Section */}
        <div className="space-y-8">
          {/* Title & Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {listing.title}
            </h1>
            <div className="flex items-center gap-2 text-gray-600 text-lg">
              <BiMap size={20} />
              <p>{listing.address}</p>
            </div>
          </motion.div>

          {/* Price Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8"
          >
            <p className="text-gray-600 text-sm font-semibold mb-2">PRICE</p>
            <p className="text-5xl font-bold text-blue-600">
              ${listing.price.toLocaleString()}
            </p>
          </motion.div>

          {/* Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <BiBed size={24} className="text-blue-500" />
                <span className="text-3xl font-bold text-gray-900">
                  {listing.bedrooms}
                </span>
              </div>
              <p className="text-sm text-gray-600 font-medium">Bedrooms</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <BiBath size={24} className="text-green-500" />
                <span className="text-3xl font-bold text-gray-900">
                  {listing.bathrooms}
                </span>
              </div>
              <p className="text-sm text-gray-600 font-medium">Bathrooms</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <BiArea size={24} className="text-purple-500" />
                <span className="text-2xl font-bold text-gray-900">
                  {listing.sqft}
                </span>
              </div>
              <p className="text-sm text-gray-600 font-medium">Sq Ft</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <BiCalendar size={24} className="text-orange-500" />
                <span className="text-2xl font-bold text-gray-900">
                  {listing.yearBuilt}
                </span>
              </div>
              <p className="text-sm text-gray-600 font-medium">Year Built</p>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="border-t-2 border-gray-200 pt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 uppercase mb-3">
                  Category
                </h3>
                <p className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium">
                  {listing.category}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600 uppercase mb-3">
                  Property Details
                </h3>
                <p className="text-gray-700">
                  Beautiful {listing.category.toLowerCase()} in a prime location
                  with {listing.bedrooms} bedrooms and {listing.bathrooms}{" "}
                  bathrooms. Built in {listing.yearBuilt} with{" "}
                  {listing.sqft.toLocaleString()} square feet of living space.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link
              to="/contact"
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 group"
            >
              <span>Schedule a Viewing</span>
              <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/catalog"
              className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-4 rounded-lg transition-all duration-200"
            >
              Back to Listings
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
