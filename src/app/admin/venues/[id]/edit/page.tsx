import db from "@/db/db";
import { PageHeader } from "../../../_components/PageHeader";
import { VenueForm } from "../../_components/VenueForm";

export default async function EditVenuePage({
    params: { id },
}: {
    params: { id: string }
}) {

    const venue = await db.venue.findUnique({ where: {
        id}})
    return (
        <>
            <PageHeader>Edit Venue</PageHeader>        
            <VenueForm venue={ venue }/>
        </>
    )
}