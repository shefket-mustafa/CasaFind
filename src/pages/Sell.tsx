import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { listingSchema } from "../utils/yup/listingSchema";
import { useListings } from "../context/ListingsContext";
import { v4 as uuidv4 } from "uuid";
import { PopHandler } from "./Contacts";

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

export default function Sell({ popHandler }: PopHandler) {
  const navigate = useNavigate();
  const { addListing } = useListings();

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
    <div className="w-full min-h-screen bg-white flex justify-center items-center px-4 py-20">
      <div className="w-full max-w-3xl bg-white border border-gray-200 shadow-xl rounded-2xl p-10">
        <h2 className="text-4xl font-bold text-center text-black mb-10">
          List Your Property
        </h2>

        <form
          onSubmit={handleSubmit(submitHouseButton)}
          className="space-y-6"
        >
          <input
            {...register("title")}
            name="title"
            placeholder="Title"
            required
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            {...register("image")}
            name="imageUrl"
            required
            placeholder="Image URL"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <select
            {...register("category")}
            name="category"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
          </select>
          <div className="grid grid-cols-2 gap-4">
            <input
              {...register("bedrooms")}
              name="bedrooms"
              type="number"
              placeholder="Bedrooms"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              {...register("sqft")}
              name="sqft"
              type="number"
              placeholder="Square Feet"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              {...register("yearBuilt")}
              name="yearBuilt"
              type="number"
              placeholder="Year Built"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              {...register("price")}
              name="price"
              type="number"
              placeholder="Price"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              {...register("bathrooms")}
              name="bathrooms"
              type="number"
              placeholder="Bathrooms"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              {...register("address")}
              name="address"
              type="text"
              placeholder="Address"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold cursor-pointer px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Submit Listing
          </button>
        </form>
      </div>
    </div>
  );
}
