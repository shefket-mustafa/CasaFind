import { useListings } from "../context/ListingsContext"

export default function AdminPanel() {

    const {listings} = useListings();

    return(
        <div className="min-h-screen bg-white px-4 py-8 md:px-12 lg:px-24">
        <h1 className="text-3xl font-bold text-black mb-8 text-center">
          Admin Dashboard
        </h1>
  
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((item: ListingType) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="py-4 px-6 text-black font-medium">{item.title}</td>
                  <td className="py-4 px-6 text-gray-600">${item.price}</td>
                  <td className="py-4 px-6">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-24 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-4 px-6 flex space-x-2">
                    <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition text-lg">
            + Add New Listing
          </button>
        </div>
      </div>
    )
}