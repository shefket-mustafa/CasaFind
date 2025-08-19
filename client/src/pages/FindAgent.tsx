import { Link } from "react-router";

const agents = [
  { id: 1, name: "Mickey Johnson", specialty: "Luxury Homes", email: "shefket.must@gmail.com", image: "https://tgr.tigerwoods.com/wp-content/uploads/sites/2/2016/11/TGR_TeamTeaser_About.jpg" },
  { id: 2, name: "David Chen", specialty: "Commercial Properties", email: "david@example.com", image: "https://s.yimg.com/ny/api/res/1.2/kTBoYKjhfRXtGR3n_u4_tw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/wwd_409/b20ca24782a5dfa6e794ad3fe4813bd8" },
  { id: 3, name: "Jackie Chan", specialty: "Family Houses", email: "maria@example.com", image: "https://live-production.wcms.abc-cdn.net.au/0cf9bc98fec9009c200a92e6894a4de0?impolicy=wcms_crop_resize&cropH=3326&cropW=3326&xPos=837&yPos=0&width=862&height=862" },
  { id: 4, name: "James Smith", specialty: "Apartments", email: "james@example.com", image: "https://ca-times.brightspotcdn.com/dims4/default/fd1661c/2147483647/strip/true/crop/3836x2600+0+203/resize/1200x813!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc2%2F21%2F77776cce441982c7a44c91138de9%2F1321170-la-sp-2023-espy-awards-126-ajs.jpg" },
];

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
            <a
              href={`mailto:${agent.email}`}
              className="mt-4 inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-sm font-medium transition self-start"
            >
              <Link to='/contact'>Details</Link>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
