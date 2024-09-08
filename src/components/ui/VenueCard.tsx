import Link from "next/link";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import Image from "next/image"
import { ImageSlider } from "../ImageSlider";
import "./VenueCard.css"



type VenueCardProps ={
    id: string
    name: string
    description : string
    cost: string
    venuePurpose: string
    imagePath1:  string
    imagePath2: string
    imagePath3: string
    imagePath4: string

}


export function VenueCard({ id, name, description, cost, imagePath1,imagePath2, imagePath3, imagePath4,venuePurpose }: VenueCardProps){
    
    const IMAGES = [
        {url: imagePath1, alt: "Picture One"},
        {url: imagePath2, alt: "Picture Two"},
        {url: imagePath3, alt: "Picture Three"},
        {url: imagePath4, alt: "Picture Four"}
    ] 
    return( 
    <Card className=" flex overflow-hidden flex-col">
        <div className="relative fill w-full h-80 aspect-video">
            <ImageSlider images={IMAGES} />
        </div>
        <CardHeader >
            <CardTitle>
                { name }
            </CardTitle>
            <div className="SideBySide">
            <CardDescription> { venuePurpose } 

            </CardDescription>
            <CardDescription> { cost } 

            </CardDescription>
            </div>
        </CardHeader>
        <CardContent className="flex-grow">
            <p className="line-clamp-4"> {description} </p>
        </CardContent>
        <CardFooter>
            <Button asChild size="lg" className="w-full">
                <Link href={`/venues/${id}/view`}>View</Link>
            </Button>
        </CardFooter>

    </Card>
    )
}

export function VenueCardSkeleton(){
    return (
        <Card className="overflow-hidden flex flex-col animate-pulse">
            <div className="w-full aspect-video bg-gray-300" />
            <CardHeader>
                <CardTitle>
                    <div className="w-3/4 h-6 rounded-full bg-gray-300" />
                </CardTitle>
                <CardDescription>
                    <div className="w-1/2 h-4 rounded-full bg-gray-300"/>
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="w-full h4  rounded-full bg-gray-300" />
                <div className="w-full h4  rounded-full bg-gray-300" />
                <div className="w-3/4  h4  rounded-full bg-gray-300" />
            </CardContent>
            <CardFooter>
                <Button className="w-full" disabled size="lg"></Button>
            </CardFooter>
        </Card>
    )
}