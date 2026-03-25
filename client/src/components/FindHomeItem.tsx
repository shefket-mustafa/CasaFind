import { Link } from "react-router";
import { motion } from "motion/react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Listing {
  listing: {
    id: string;
    title: string;
    category: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    price: number;
    yearBuilt: number;
    address: string;
    image: string;
  };
}

export default function FindHomeItem({ listing }: Listing) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${listing.image})` }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        {/* Category Badge */}
        <div className="self-start">
          <span className="bg-blue-500/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
            {listing.category}
          </span>
        </div>

        {/* Bottom Content */}
        <div className="space-y-3">
          {/* Price */}
          <div>
            <p className="text-white text-2xl font-bold">
              ${listing.price.toLocaleString()}
            </p>
            <p className="text-gray-200 text-sm font-medium truncate">
              {listing.title}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-4 text-xs">
            <div className="flex items-center gap-1 text-gray-100 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg">
              <BiBed size={16} />
              <span>{listing.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-100 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg">
              <BiBath size={16} />
              <span>{listing.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-100 bg-white/10 backdrop-blur-md px-2 py-1 rounded-lg">
              <BiArea size={16} />
              <span>{listing.sqft} ft²</span>
            </div>
          </div>

          {/* View Button */}
          <Link
            to={`/homes/${listing.id}/details`}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 group/btn"
          >
            <span>View Details</span>
            <AiOutlineArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
