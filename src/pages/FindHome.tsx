import { IoSearchOutline } from "react-icons/io5";
import { mockListings } from "../mock-data/mock-listings";
import FindHomeItem from "../components/FindHomeItem";
export default function FindHome() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="relative  h-[450px]  ">
          <div
            className=" absolute inset-0 z-0
            bg-[url(https://robbreport.com/wp-content/uploads/2023/02/41Popcorn_HiRes_23080901-1.jpg?w=800)]
            h-[450px] w-full bg-cover 
            "
          ></div>

          <div className="absolute inset-0 h-[450px] bg-black/50 bg-gradient-to-b from-black to-transparent"></div>

          <div className="relative pt-40 z-10 flex flex-col justify-center items-center text-white gap-10">
            <p className="text-6xl font-bold">Exclusive Homes</p>
            <p className="max-w-[250px] md:max-w-[500px] text-center">
              With locations all across the US and Canada, you can search for
              real estate listings, view photos, and connect with a PLACE
              Partner agent almost anywhere.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-1/2 h-[80px] bg-white/50 z-15 clip-x-slant"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-[80px] bg-white/50 z-15 clip-x-slant-reverse"></div>
        </div>

        {/* Search */}
        <div className="flex justify-center items-center px-6 mt-10">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search location..."
              className="bg-gray-200 px-4 py-3 pr-12 rounded w-full"
            />
            <IoSearchOutline className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-20 px-15">
          {mockListings.map((listing) => (
            <div key={listing.id}>
              <FindHomeItem listing={listing} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
