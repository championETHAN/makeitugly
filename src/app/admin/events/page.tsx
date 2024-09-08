"use server"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageHeader } from "../_components/PageHeader";
import { EventsTable } from "./_components/EventTable";
import { Search } from "../venues/_components/VenuesSearch";


export default async function AdminEventPage({
    searchParams
}: {
    searchParams: {
        query?: string;
    }
}) {

    const query = searchParams?.query || '';

     return (
        <>
            <div className="flex justify-between items-center gap-4">
                <PageHeader> Events </PageHeader>
                <Search placeholder="Search venues..." />
                    <Button>
                        <Link href="/admin/events/new">Add Event</Link>
                    </Button>
            </div>
            <EventsTable query={query} />
        </> 
      
    ) 
}


