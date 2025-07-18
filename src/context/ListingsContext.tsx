import { createContext, useContext, useState } from "react";
import { mockListings } from "../mock-data/mock-listings";

export interface Listing {
    id: string;
    title: string;
    image: string;
    category: "house" | "apartment";
    bathrooms: number;
    bedrooms: number;
    sqft: number;
    yearBuilt: number;
    price: number;
    address: string
}

interface ListingsContextType  {
    listings: Listing[];
    addListing: (listing: Listing) => void;
}

const ListingsContext = createContext<ListingsContextType | undefined>(undefined);

export const ListingsProvider = ({children} : {children: React.ReactNode}) => {
    const [listings, setListings] = useState<Listing[]>(mockListings)

    const addListing = (listing: Listing) => {
        setListings((prev) => [...prev, listing]);
      };

      return (
        <ListingsContext.Provider value={{ listings, addListing }}>
        {children}
      </ListingsContext.Provider>
      )

    }
    export const useListings = () => {
      const context = useContext(ListingsContext);
      if (!context) throw new Error("useListings must be used inside ListingsProvider");
      return context;
    };
