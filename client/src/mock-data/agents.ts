export type Agent = {
    id: number;
    name: string;
    specialty: string;
    email: string;
    image: string;
    years: number;
    languages: string[];
    accomplishments: string[];
  };
  
  export const agents: Agent[] = [
    {
      id: 1,
      name: "Mickey Johnson",
      specialty: "Luxury Homes",
      email: "shefket.must@gmail.com",
      image: "https://tgr.tigerwoods.com/wp-content/uploads/sites/2/2016/11/TGR_TeamTeaser_About.jpg",
      years: 8,
      languages: ["English", "Bulgarian"],
      accomplishments: [
        "Top 1% luxury closings (2023)",
        "Avg. 7 days on market",
        "Closed 120+ high-end deals"
      ],
    },
    {
      id: 2,
      name: "David Chen",
      specialty: "Commercial Properties",
      email: "david@example.com",
      image: "https://s.yimg.com/ny/api/res/1.2/kTBoYKjhfRXtGR3n_u4_tw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/wwd_409/b20ca24782a5dfa6e794ad3fe4813bd8",
      years: 6,
      languages: ["English", "Mandarin"],
      accomplishments: [
        "€50M+ commercial volume",
        "Retail & office specialist",
        "NPS 9.4 from clients"
      ],
    },
    {
      id: 3,
      name: "Jackie Chan",
      specialty: "Family Houses",
      email: "maria@example.com",
      image: "https://live-production.wcms.abc-cdn.net.au/0cf9bc98fec9009c200a92e6894a4de0?impolicy=wcms_crop_resize&cropH=3326&cropW=3326&xPos=837&yPos=0&width=862&height=862",
      years: 5,
      languages: ["English"],
      accomplishments: [
        "Neighborhood expert (Sofia South)",
        "97% list-to-sale ratio",
        "50+ happy families moved"
      ],
    },
    {
      id: 4,
      name: "James Smith",
      specialty: "Apartments",
      email: "james@example.com",
      image: "https://ca-times.brightspotcdn.com/dims4/default/fd1661c/2147483647/strip/true/crop/3836x2600+0+203/resize/1200x813!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc2%2F21%2F77776cce441982c7a44c91138de9%2F1321170-la-sp-2023-espy-awards-126-ajs.jpg",
      years: 4,
      languages: ["English", "Spanish"],
      accomplishments: [
        "Rentals & investment focus",
        "Strong negotiation track record",
        "Avg. 2.1% under asking"
      ],
    },
  ];
  