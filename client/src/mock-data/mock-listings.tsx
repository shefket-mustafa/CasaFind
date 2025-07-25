import { Listing } from "../context/ListingsContext";


export const mockListings = [
    {
      id: "1",
      title: "Modern Family house",
      category: "house",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1800,
      price: 375000,
      yearBuilt: 2015,
      address: "123 Maple St, Austin, TX",
      image: "https://i.pinimg.com/736x/fd/c5/b3/fdc5b3520870af529fa626369db16265.jpg"
    },
    {
      id: "2",
      title: "Luxury Downtown apartment",
      category: "apartment",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1100,
      price: 450000,
      yearBuilt: 2020,
      address: "89 King St, San Francisco, CA",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      id: "3",
      title: "Cozy Studio",
      category: "apartment",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 650,
      price: 220000,
      yearBuilt: 2012,
      address: "9 Elm St, Brooklyn, NY",
      image: "https://sometimes-homemade.com/wp-content/uploads/2016/02/exterior.png"
    },
    {
      id: "4",
      title: "Spacious Country house",
      category: "house",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2400,
      price: 490000,
      yearBuilt: 2009,
      address: "88 Oak Dr, Nashville, TN",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
    },
    {
      id: "5",
      title: "Modern Loft",
      category: "apartment",
      bedrooms: 1,
      bathrooms: 1,
      sqft: 780,
      price: 299000,
      yearBuilt: 2018,
      address: "301 Highline, Seattle, WA",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    {
      id: "6",
      title: "Traditional Colonial Home",
      category: "house",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1600,
      price: 320000,
      yearBuilt: 1995,
      address: "12 Lincoln Ave, Hartford, CT",
      image: "https://images.unsplash.com/photo-1628744448839-a475cc0e90c3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmljZSUyMGhvdXNlfGVufDB8fDB8fHww"
    },
    {
      id: "7",
      title: "Charming Bungalow",
      category: "house",
      bedrooms: 2,
      bathrooms: 1,
      sqft: 950,
      price: 250000,
      yearBuilt: 1982,
      address: "73 Main St, Tucson, AZ",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
    },
    {
      id: "8",
      title: "High-Rise apartment",
      category: "apartment",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1300,
      price: 520000,
      yearBuilt: 2022,
      address: "22 Horizon Blvd, Miami, FL",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    {
      id: "9",
      title: "Coastal Retreat",
      category: "house",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2100,
      price: 599000,
      yearBuilt: 2010,
      address: "48 Ocean View Rd, Malibu, CA",
      image: "https://cdn.mos.cms.futurecdn.net/KV82TseQgkKZJb4C5heqsQ.jpg"
    },
    {
      id: "10",
      title: "Urban Flat",
      category: "apartment",
      bedrooms: 2,
      bathrooms: 1,
      sqft: 950,
      price: 305000,
      yearBuilt: 2019,
      address: "305 5th Ave, Chicago, IL",
      image: "https://media.vrbo.com/lodging/35000000/34330000/34327800/34327788/529f0747.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
    },
    {
      id: "11",
      title: "Luxury Mansion",
      category: "house",
      bedrooms: 6,
      bathrooms: 5,
      sqft: 5400,
      price: 1200000,
      yearBuilt: 2017,
      address: "99 Grand Dr, Beverly Hills, CA",
      image: "https://media.vrbo.com/lodging/35000000/34330000/34327800/34327788/ffc5633a.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
    },
    {
      id: "12",
      title: "Suburban Townhouse",
      category: "house",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1500,
      price: 340000,
      yearBuilt: 2011,
      address: "10 Maplewood Ln, Columbus, OH",
      image: "https://i.dailymail.co.uk/1s/2025/01/11/20/93996079-0-image-a-17_1736625681270.jpg"
    },
    {
      id: "13",
      title: "Penthouse Suite",
      category: "apartment",
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2000,
      price: 950000,
      yearBuilt: 2021,
      address: "777 Skyline Rd, New York, NY",
      image: "https://thumbs.dreamstime.com/b/nice-house-landscaped-hill-3258444.jpg"
    },
    {
      id: "14",
      title: "Riverside Cabin",
      category: "house",
      bedrooms: 2,
      bathrooms: 1,
      sqft: 900,
      price: 215000,
      yearBuilt: 2005,
      address: "3 Riverbank Rd, Boise, ID",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb"
    },
    {
      id: "15",
      title: "Contemporary apartment",
      category: "apartment",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      price: 385000,
      yearBuilt: 2016,
      address: "404 Central Ave, Denver, CO",
      image: "https://cdn.houseplansservices.com/content/kbif4utjo4lvt8kq27s4tj9cq6/w991x660.jpg?v=10"
    },
    {
      id: "16",
      title: "Rustic Farmhouse",
      category: "house",
      bedrooms: 4,
      bathrooms: 2,
      sqft: 2300,
      price: 450000,
      yearBuilt: 1990,
      address: "55 Prairie Ln, Des Moines, IA",
      image: "https://en.idei.club/uploads/posts/2023-12/1702587927_en-idei-club-p-nice-house-with-swimming-pool-dizain-pinte-1.jpg"
    }
  ] as const satisfies Listing[];
  