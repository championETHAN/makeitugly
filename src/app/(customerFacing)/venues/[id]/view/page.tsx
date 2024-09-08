
import db from "@/db/db"
import { notFound } from "next/navigation"
import { ImageSlider } from "@/components/ImageSlider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { VenueTag } from "@/components/ui/venueTag"
import { cn } from "@/lib/utils"
import HoursDisplay from "@/components/ui/hours"
import SocialLinks from "@/components/ui/socialLinks"

export default async function ViewVenue({
    params: { id },
}: {
    params: {id: string }
}){
    const venue = await db.venue.findUnique({
        where: { id }})
    if (venue == null) return notFound()
    
    const IMAGES = [
        {url: venue.imagePath1, alt: "Picture One"},
        {url: venue.imagePath2, alt: "Picture Two"},
        {url: venue.imagePath3, alt: "Picture Three"},
        {url: venue.imagePath4, alt: "Picture Four"}
    ]
    const venueHours = [
        venue.sundaysHours,
        venue.mondaysHours,
        venue.tuesdaysHours,
        venue.wednesdaysHours,
        venue.thursdaysHours,
        venue.fridaysHours,
        venue.saturdaysHours 
    ]

    
    return(
        <>
            <div className="container pl-2 pr-2">
                <Card className="flex flex-col mt-4 overflow-hidden">
                    <CardHeader>
                        <CardTitle className="text-center text-3xl">{venue.name}</CardTitle>
                    </CardHeader>
                    <div className="p-1">
                        <div className="border-2 rounded-lg fill w-full h-full aspect-video">
                                <ImageSlider images={IMAGES}/>                  
                        </div>
                    </div>

                   <CardContent className="container">
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div className="border-2 rounded-lg">
                            <div className="bg-slate-200 border-2 pt-1 pl-3 pr-3 rounded-b-none ">
                                <h1 className="underline font-bold text-center text-normal mb-1">Description</h1>
                            </div>
                            <CardDescription className="text-pretty text-center pt-3 pb-2 pl-3 pr-3 ">{venue.description}</CardDescription>
                        </div>
                        <div className="border-2 rounded-lg">
                            <div className="bg-slate-200 border-2 pt-1 pl-3 pr-3 rounded-b-none ">
                                <h1 className="underline font-bold text-center text-normal mb-1">Overview</h1>
                            </div>
                            <div className="pl-4">
                                <div className="flex flex-row mt-2">
                                    <h1>Phone Number: </h1>
                                    <h1 className="text-pretty text-center pb-2 pl-2 pr-3 ">{venue.phoneNumber}</h1>
                                </div>
                                <div className="mt-1">
                                    <HoursDisplay
                                        sundaysHours={venue.sundaysHours}
                                        mondaysHours={venue.mondaysHours}
                                        tuesdaysHours={venue.tuesdaysHours}
                                        wednesdaysHours={venue.wednesdaysHours}
                                        thursdaysHours={venue.thursdaysHours}
                                        fridaysHours={venue.fridaysHours}
                                        saturdaysHours={venue.saturdaysHours}
                                    />
                                </div>
                                <div className="flex flex-row mt-2 ">
                                    <h1>Cost: </h1>
                                    <h1 className="text-pretty text-center pb-2 pl-2 pr-3 ">{venue.cost}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 rounded-lg">
                            <div className="bg-slate-200 border-2 pt-1 pl-3 pr-3 rounded-b-none ">
                                <h1 className="underline font-bold text-center text-normal mb-1">Links!</h1>
                            </div>
                            <div className="text-pretty  p-4 justify-center flex-col">
                                <SocialLinks facebookLink={venue.facebookLink} instagramLink={venue.instagramLink} websiteLink={venue.websiteLink}/>
                            </div>
                                
                        </div>
                    </div>

                    <div className="flex flex-col justify-center border-2 rounded-lg mt-3 ">
                        <div className="">
                            <div className="bg-slate-200 border-2 pt-1 pl-3 pr-3 rounded-b-none ">
                                <h1 className="underline font-bold text-center text-normal mb-1">Location</h1>
                            </div>
                            <CardDescription className="text-pretty flex flex-row mt-2">
                                <h3 className="text-pretty text-center pb-1 pl-1  font-semibold mr-1 mb-1">Parking Options:</h3>
                                <h3 className="text-pretty text-center pb-1 pl-1  ">{venue.parkingOptions}</h3>
                            </CardDescription>
                            <CardDescription className="text-pretty flex flex-row mt-2">
                                <h3 className="text-pretty text-center pb-1 pl-1 font-semibold mr-1 mb-1">Address:</h3>
                                <h3 className="text-pretty text-left pb-1 pl-1 ">{venue.location}</h3>
                            </CardDescription>
                        </div>
                        <div className="p-1">
                            <iframe className="border-2 rounded-lg fill w-full h-full aspect-auto" src="https://maps.google.com/maps?q=Jacksonville&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                        </div>
                        
                    </div>
                   </CardContent>
                </Card>
                <footer>
                <h1></h1>
                </footer>
            </div>
            

        </>
    )
}