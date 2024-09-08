"use server"
import { Button } from "@/components/ui/button";
import { PageHeader } from "../_components/PageHeader";
import Link from "next/link";
import { Search } from "..//venues/_components/VenuesSearch"
import { VenuesTable } from "./_components/VenuesTable";

export default async function AdminVenuePage({
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
                <PageHeader> Venues </PageHeader>
                <Search placeholder="Search venues..." />
                <Button>
                    <Link href="/admin/venues/new">Add Venue</Link>
                </Button>
            </div>
            <VenuesTable query={query} />
        </> 
      
    ) 
}


