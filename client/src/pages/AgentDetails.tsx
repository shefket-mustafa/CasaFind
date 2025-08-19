import { Link, useParams } from "react-router";
import { agents } from "../mock-data/agents";

export default function AgentDetails() {
    const { id } = useParams();
    const agent = agents.find(a => String(a.id) === String(id));
  
    if (!agent) {
      return (
        <div className="max-w-3xl mx-auto py-10 px-4">
          <p className="text-red-600">Agent not found.</p>
          <Link to="/agents" className="text-blue-600 underline">Back to list</Link>
        </div>
      );
    }
  
    return (
        <div className="bg-white">
      <div className="max-w-4xl  mx-auto py-10 px-4">
        <div className="rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          <img src={agent.image} alt={agent.name} className="w-full h-64 md:h-80 object-cover object-top" />
  
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">{agent.name}</h1>
                <p className="text-gray-600">{agent.specialty}</p>
              </div>
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                {agent.years}+ yrs
              </span>
            </div>
  
            <div className="flex flex-wrap gap-2">
              {agent.languages.map(l => (
                <span key={l} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  {l}
                </span>
              ))}
            </div>
  
            <div>
              <h2 className="font-semibold mb-2">Accomplishments</h2>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {agent.accomplishments.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
  
            <div className="flex gap-3 pt-2">
              <div
                className="inline-flex items-center cursor-pointer gap-2 text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-sm font-medium transition"
              >
                <Link to='/contact'>Contact</Link>
              </div>
              <Link
                to='/findAgent'
                className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg text-sm font-medium transition"
              >
                Back to agents
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }