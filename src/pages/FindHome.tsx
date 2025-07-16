import { IoSearchOutline } from "react-icons/io5";
import { MdFilterList } from "react-icons/md";
import { MdOutlineSort } from "react-icons/md";
import { mockListings } from "../mock-data/mock-listings";
import { useState } from "react";
import FindHomeItem from "../components/FindHomeItem";

export default function FindHome() {
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");


  const filteredListings = mockListings.filter((listing) => {
    return (
      (filterBy === ""  || listing.category.toLowerCase().includes(filterBy.toLowerCase())) && 
      (searchQuery === "" || listing.title.toLowerCase().includes(searchQuery.toLowerCase()))
    )});

  const sortedListings = [...filteredListings].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "year-asc":
        return a.yearBuilt - b.yearBuilt;
      case "year-desc":
        return b.yearBuilt - a.yearBuilt;
      case "sqft-asc":
        return a.sqft - b.sqft;
      case "sqft-desc":
        return b.sqft - a.sqft;
      default:
        return 0;
    }
  });

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <div className="relative h-[450px]">
        <div className="absolute inset-0 z-0 bg-[url('https://robbreport.com/wp-content/uploads/2023/02/41Popcorn_HiRes_23080901-1.jpg?w=800')] bg-cover" />
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black to-transparent" />
        <div className="relative z-10 pt-40 flex flex-col justify-center items-center text-white gap-6 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Exclusive Homes</h1>
          <p className="max-w-[600px]">
            With locations all across the US and Canada, you can search for real estate listings,
            view photos, and connect with a PLACE Partner agent almost anywhere.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-1/2 h-[80px] bg-white/50 z-10 clip-x-slant"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-[80px] bg-white/50 z-10 clip-x-slant-reverse"></div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10 px-6">
        {/* Sort */}
        <div className="flex items-center gap-2">
          <MdOutlineSort className="text-gray-700" />
          <label className="font-semibold">Sort:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-200 px-3 py-2 rounded"
          >
            <option value="">Select</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="year-asc">Year ↑</option>
            <option value="year-desc">Year ↓</option>
            <option value="sqft-asc">SqFt ↑</option>
            <option value="sqft-desc">SqFt ↓</option>
          </select>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2">
          <MdFilterList className="text-gray-700" />
          <label className="font-semibold">Filter:</label>
          <select
            value={filterBy}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-200 px-3 py-2 rounded"
          >
            <option value="">All</option>
            <option value="apartment">Apartments</option>
            <option value="house">Houses</option>
          </select>
        </div>

        {/* Search  */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-200 px-4 py-3 pr-12 rounded w-full"
          />
          <IoSearchOutline className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-20 px-6">
        {sortedListings.map((listing) => (
          <FindHomeItem key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
