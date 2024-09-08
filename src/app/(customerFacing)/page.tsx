
import { Button } from "@/components/ui/button"
import { VenueCard, VenueCardSkeleton } from "@/components/ui/VenueCard"
import db from "@/db/db"
import { cache } from "@/lib/cache"
import { Venue } from "@prisma/client"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"


const getNewestVenues = cache(async () => {
  return await db.venue.findMany({
    orderBy: { createdAt: "desc" },
    take: 6,
  })
}, ["/", "getNewestVenues"])

export default function HomePage() {
  
  return (
    <main className="space-y-12 container my-6 grid grid-cols-1 lg gap-4 ">
      <img src="assets/JacksonvilleSkyLineHandDrawn.png" alt="SkyLine" /> 
      <VenueGridSection title="Newest" venuesFetcher={getNewestVenues} /> 
    </main>
  )
}

type VenueGridSectionProps = {
  title: string
 venuesFetcher: () => Promise<Venue[]>
}

function VenueGridSection({
    venuesFetcher,
  title,
}: VenueGridSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Button variant="outline" asChild>
          <Link href="/venues" className="space-x-2">
            <span>View All</span>
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense
          fallback={
            <>
              <VenueCardSkeleton />
              <VenueCardSkeleton />
              <VenueCardSkeleton />
            </>
          }
        >
          <VenueSuspense venuesFetcher={venuesFetcher} />
        </Suspense>

        
      </div>
    </div>
  )
}

async function VenueSuspense({
    venuesFetcher,
}: {
    venuesFetcher: () => Promise<Venue[]>
}) {
  return (await venuesFetcher()).map(venue => (
    <VenueCard key={venue.id} {...venue} />
  ))
}