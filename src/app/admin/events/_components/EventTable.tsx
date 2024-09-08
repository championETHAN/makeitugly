

import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { searchEvents, allEvents } from "../../_actions/events";


export async function EventsTable({ query }: { query: string }){
    
    let events = await searchEvents(query)
    let all = await allEvents();
    return( 
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-0">
                        <span className="sr-only">Available Events</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Event Capacity</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="w-0">
                        <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {events.map(events => (
                    <TableRow key={events.id}>
                        <TableCell>
                            {events.name}
                        </TableCell>
                        <TableCell>
                            {events.eventCapacity}
                        </TableCell>
                        <TableCell>
                            {events.location}
                        </TableCell>
                        <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <MoreVertical />
                                    <span className="sr-only"> Actions</span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem asChild>
                                        <Link href={`/admin/events/${events.id}/edit`}>
                                            Edit
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator/>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

