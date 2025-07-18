import { Link, useParams } from "react-router";
import { useListings } from "../context/ListingsContext";

export default function ItemDetails() {
  const { id } = useParams();
  const {listings} = useListings();
  const listing = listings.find((listing) => listing.id === id);

  if (!listing) {
    return (
      <div className="flex justify-center items-center h-[300px] text-2xl">
        Listing not found.
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-12 px-4 max-w-6xl mx-auto">
      {/* Image */}
      <div
        className="w-full h-64 md:h-96 rounded-lg bg-center bg-cover mb-8"
        style={{ backgroundImage: `url(${listing.image})` }}
      />

      {/* Title & Address */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
        <p className="text-gray-600 text-lg">{listing.address}</p>
      </div>

      {/* Quick Details Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center mb-10">
        <div>
          <p className="text-xl font-semibold">
            ${listing.price.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">Price</p>
        </div>
        <div>
          <p className="text-xl font-semibold">{listing.bedrooms}</p>
          <p className="text-sm text-gray-500">Bedrooms</p>
        </div>
        <div>
          <p className="text-xl font-semibold">{listing.bathrooms}</p>
          <p className="text-sm text-gray-500">Bathrooms</p>
        </div>
        <div>
          <p className="text-xl font-semibold">{listing.sqft} ft²</p>
          <p className="text-sm text-gray-500">SqFt</p>
        </div>
      </div>

      {/* Metadata */}
      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-semibold">Built in:</span> {listing.yearBuilt}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {listing.category}
        </p>
      </div>

      {/* Buy Now Button */}
      <div className="flex justify-center transform -translate-10">
        <Link to='/contact'
          className="bg-black text-white px-8 py-3 rounded-lg text-lg hover:bg-gray-800 transition duration-200"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}
