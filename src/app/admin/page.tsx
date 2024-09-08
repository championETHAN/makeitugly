import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import db from "@/db/db"
import { formatNumber } from "@/lib/formatters";

// async function getFavoritesData(){
//     const data = await db.favorite.aggregate({
//         _count: true
//     })
//     return {
//         numberOfFavorites: data._count
//     }
// }

 async function getEventData(){

     const eventCount = await db.event.count()
     return {
       eventCount
    }
 }

async function getVenueData(){

    const venueCount = await db.venue.count()
    return {
       venueCount
    }
}

export default async function AdminDashboard(){

    // const [events, userData, venueData] = await Promise.all([
    //     getFavoritesData(),
    //     getUserData(),
    //     getVenueData()
    // ])
        const [venueData] = await Promise.all([

                getVenueData()
            ])
        const [eventData] = await Promise.all([

                getEventData()
            ])

    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       <DashboardCard 
            title="Events"
            subtitle={`${formatNumber(eventData.eventCount)} Events`}
            body={"body"} 
        />
        <DashboardCard 
            title="Venues"
            subtitle={`${formatNumber(venueData.venueCount)} Venues`}
            body={"body"} 
        />
    </div>
}

type DashboardCardProps = {
     title: string 
     subtitle: string
     body: string
}

function DashboardCard({title,subtitle,body}: DashboardCardProps){
    return <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{body}</p>
            </CardContent>
        </Card>

}