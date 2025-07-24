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
    editListing: (listing: Listing) => void;
    getCurrentListing: (id: string) => Listing | undefined;
    deleteListing: (id: string) => void;
}

const ListingsContext = createContext<ListingsContextType | undefined>(undefined);

export const ListingsProvider = ({children} : {children: React.ReactNode}) => {
    const [listings, setListings] = useState<Listing[]>(mockListings)

    const addListing = (listing: Listing) => {
        setListings((prev) => [...prev, listing]);
      };

      const editListing = (updatedList: Listing) => {
        setListings((prev) => {
          return prev.map((listing) =>  listing.id === updatedList.id ? updatedList : listing)
        })
      }

      const deleteListing = (id:string) => {
        setListings((prev) => {
          return prev.filter((listing) => listing.id !== id)
        })
      }

      //For edit section's values
      const getCurrentListing = (id:string)=> {
        return listings.find((listing) => listing.id === id);
      } ;

      return (
        <ListingsContext.Provider value={{ listings, addListing, editListing, getCurrentListing, deleteListing }}>
        {children}
      </ListingsContext.Provider>
      )

    }
    export const useListings = () => {
      const context = useContext(ListingsContext);
      if (!context) throw new Error("useListings must be used inside ListingsProvider");
      return context;
    };
