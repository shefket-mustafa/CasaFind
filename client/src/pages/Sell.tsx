import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { listingSchema } from "../utils/yup/listingSchema";
import { useListings } from "../context/ListingsContext";
import { v4 as uuidv4 } from "uuid";
import { usePopUp } from "../context/PopUpContext";
import { motion } from "motion/react";
import { BiBuildingHouse, BiHome } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";

interface FormData {
  title: string;
  image: string;
  category: "house" | "apartment";
  bathrooms: number;
  bedrooms: number;
  sqft: number;
  yearBuilt: number;
  price: number;
  address: string;
}

export default function Sell() {
  const navigate = useNavigate();
  const { addListing } = useListings();
  const { popHandler } = usePopUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(listingSchema) });

  const submitHouseButton = (data: FormData) => {
    const newListing = { ...data, id: uuidv4() };
    addListing(newListing);
    popHandler("You have submitted your property!");
    setTimeout(() => {
      navigate("/catalog");
    }, 2000);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden py-20 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-200 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl">
              <BiBuildingHouse className="text-4xl text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            List Your Property
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Connect with buyers looking for their perfect home. Fill in your
            property details below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/50 backdrop-blur-md border border-white rounded-3xl p-8 md:p-10 shadow-2xl"
        >
          <form
            onSubmit={handleSubmit(submitHouseButton)}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Property Title
              </label>
              <input
                {...register("title")}
                placeholder="e.g., Beautiful Downtown Apartment"
                className="w-full bg-white/50 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Image URL
              </label>
              <input
                {...register("image")}
                placeholder="https://example.com/image.jpg"
                className="w-full bg-white/50 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Property Type
              </label>
              <select
                {...register("category")}
                className="w-full bg-white/50 border border-gray-300 px-4 py-3 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              >
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Bedrooms
                </label>
                <input
                  {...register("bedrooms")}
                  type="number"
                  placeholder="3"
                  className="w-full bg-white/50 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                {errors.bedrooms && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.bedrooms.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Square Feet
                </label>
                <input
                  {...register("sqft")}
                  type="number"
                  placeholder="2500"
                  className="w-full bg-white/50 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                {errors.sqft && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.sqft.message}
                  </p>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Year Built
                </label>
                <input
                  {...register("yearBuilt")}
                  type="number"
                  placeholder="2020"
                  className="w-full bg-white/50 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                {errors.yearBuilt && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.yearBuilt.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Price ($)
                </label>
                <input
                  {...register("price")}
                  type="number"
                  placeholder="450000"
                  className="w-full bg-white/50 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.price.message}
                  </p>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Bathrooms
                </label>
                <input
                  {...register("bathrooms")}
                  type="number"
                  placeholder="2"
                  className="w-full bg-white/50 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                {errors.bathrooms && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.bathrooms.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Address
                </label>
                <input
                  {...register("address")}
                  type="text"
                  placeholder="123 Main Street"
                  className="w-full bg-white/50 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </motion.div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg transition flex items-center justify-center gap-2 group"
            >
              Submit Listing
              <AiOutlineArrowRight className="text-lg group-hover:translate-x-1 transition" />
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12"
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <BiHome className="text-2xl text-blue-600" />
              <h3 className="font-semibold text-gray-900">Reach More Buyers</h3>
            </div>
            <p className="text-sm text-gray-600">
              Your listing gets featured to thousands of active home seekers.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <BiBuildingHouse className="text-2xl text-purple-600" />
              <h3 className="font-semibold text-gray-900">No Hidden Fees</h3>
            </div>
            <p className="text-sm text-gray-600">
              List your property with complete transparency and no surprise
              charges.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
