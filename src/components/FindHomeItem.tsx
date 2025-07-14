import { Link } from "react-router"

interface Listing {
    listing: {
    id:string,
title:string,
category:string,
bedrooms:number,
bathrooms:number,
sqft:number,
price:number,
yearBuilt:number,
address:string,
image:string
}
}

export default function FindHomeItem({listing}: Listing) {

    return(
        <>
        

        <div className=" relative h-55 bg-cover bg-center"
        style={{backgroundImage: `url(${listing.image})`}}>

                <Link className="absolute bottom-0 
                left-1/2 transform translate-y-1/2 -translate-x-1/2 
                bg-black py-2 px-8 text-lg md:text-2xl text-white
                rounded-lg
                " to='/homes/:id/details'>Buy</Link>

        </div>

        </>
    )
}