
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { searchVenues } from "../../_actions/venues";

export async function VenuesTable({ query }: { query: string }){
    
    let venues = await searchVenues(query)
    
    return( 
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-0">
                        <span className="sr-only">Available Venues</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>PhoneNumber</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Favorites</TableHead>
                    <TableHead className="w-0">
                        <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {venues.map(venue => (
                    <TableRow key={venue.id}>
                        <TableCell>

                        </TableCell>
                        <TableCell>
                            {venue.name}
                        </TableCell>
                        <TableCell>
                            {venue.phoneNumber}
                        </TableCell>
                        <TableCell>
                            {venue.location}
                        </TableCell>
                        <TableCell>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <MoreVertical />
                                    <span className="sr-only"> Actions</span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem asChild>
                                        <Link href={`/admin/venues/${venue.id}/edit`}>
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

