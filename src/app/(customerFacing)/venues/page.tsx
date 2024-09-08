
import { SearchFilter } from "@/components/ui/searchFilter";
import { VenueCard, VenueCardSkeleton } from "@/components/ui/VenueCard";
import db from "@/db/db";
import { cache } from "@/lib/cache";
import { Suspense } from "react";


type SearchVenueProps = {
    id:string,
    name:string,
    description: string,
    cost: string,
    imagePath1: string,
    imagePath2: string,
    imagePath3: string,
    imagePath4: string,
    venuePurpose: string,
}
// const searchVenues = cache((searchValue: string):Promise<SearchVenueProps[]> =>{
//     return db.venue.findMany({
//         where: {
//             name: {
//                 contains: `${searchValue}`
//             },
            
//         },
//         orderBy: { name: "asc" }
//     })
// },["/venues", "getSearch"], { revalidate: 60 * 60 * 24 })

const searchVenues = cache((searchValue: string):Promise<SearchVenueProps[]> =>{
    return db.venue.findMany({
        where: {
            OR:[
            {
                name: {
                    contains: `${searchValue}`
                },

            },
            {
                venuePurpose:{
                    contains: `${searchValue}`
                }
            },
            {
                cost:{ 
                    contains: `${searchValue}`
                }
            }
            ]
            
        },
        orderBy: { name: "asc" }
    })
},["/venues", "getSearch"], { revalidate: 60 * 60 * 24 })


export default function VenuesPage({ 
    searchParams
}:{
    searchParams?: {
        search?: string;
        page?: string;
    }
}){
    const search = searchParams?.search || '';
    return (
        <>
        <SearchFilter placeholder={""}/>
        <div className="container my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <Suspense
                fallback={<>
                    <VenueCardSkeleton />
                    <VenueCardSkeleton />
                    <VenueCardSkeleton />
                    <VenueCardSkeleton />
                    <VenueCardSkeleton />
                    <VenueCardSkeleton />
                    <VenueCardSkeleton />
                </>}
            >
                <VenuesSuspense query={search} />
            </Suspense>
        </div>
        </>
    )
}

async function VenuesSuspense({ query }: { query: string }){
    const venues = await searchVenues(query)
    return venues.map(venue => (<VenueCard key={venue.id} {...venue} />))
}