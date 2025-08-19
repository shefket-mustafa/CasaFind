import { Link } from "react-router";
import { agents } from "../mock-data/agents";



export default function FindAgent() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-white items-center py-10 px-4">
    <h2 className="text-2xl font-bold mb-6 text-center">Choose your agent</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {agents.map((agent) => (
        <div
          key={agent.id}
          className="rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition flex flex-col"
        >
          {/* Top half image */}
          <img
            src={agent.image}
            alt={agent.name}
            className="w-full h-80 object-fit bg-center bg-no-repeat"
          />

          {/* Bottom half content */}
          <div className="flex flex-col justify-between p-4 flex-1">
            <div>
              <h3 className="text-lg font-semibold">{agent.name}</h3>
              <p className="text-sm text-gray-500">{agent.specialty}</p>
            </div>
            <div
              className="mt-4 inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-sm font-medium transition self-start"
            >
              <Link to={`/agentDetails/${agent.id}`}>Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
