"use server"

import db from "@/db/db"
import { z } from "zod"
import fs from "fs/promises"
import { notFound, redirect } from "next/navigation"
import { revalidatePath } from "next/cache"


const fileSchema = z.instanceof(File, { message: "Required" })
const imageSchema = fileSchema.refine(file => file.size === 0 || file.type.startsWith("image/"))

const addSchema = z.object({
    name: z.string().min(1),
    phoneNumber: z.string().min(10),
    location: z.string().min(1),
    description: z.string().min(1),
    sundaysHours: z.string().min(5),
    mondaysHours: z.string().min(5),
    tuesdaysHours: z.string().min(5),
    wednesdaysHours: z.string().min(5),
    thursdaysHours: z.string().min(5),
    fridaysHours: z.string().min(5),
    saturdaysHours: z.string().min(5),
    parkingOptions: z.string().min(5),
    instagramLink: z.string().min(0),
    facebookLink: z.string().min(0),
    websiteLink: z.string().min(0),
    cost: z.string().min(0),
    fullBar: z.string().min(0),
    beerWine: z.string().min(0),
    image1: imageSchema.refine(file => file.size > 0, "Required"),
    image2: imageSchema.refine(file => file.size > 0, "Required"),
    image3: imageSchema.refine(file => file.size > 0, "Required"),
    image4: imageSchema.refine(file => file.size > 0, "Required"),
    venuePurpose: z.string().min(1),
})

export async function addVenue(prevState: unknown, formData: FormData) {
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if (result.success === false) {
        return result.error.formErrors.fieldErrors
    }

    const data = result.data

    await fs.mkdir("public/venues", { recursive: true })
    const imagePath1 = `/venues/${crypto.randomUUID()}-${data.image1.name}`
    await fs.writeFile(`public${imagePath1}`, Buffer.from(await data.image1.arrayBuffer()))

    await fs.mkdir("public/venues", { recursive: true })
    const imagePath2 = `/venues/${crypto.randomUUID()}-${data.image2.name}`
    await fs.writeFile(`public${imagePath2}`, Buffer.from(await data.image2.arrayBuffer()))

    await fs.mkdir("public/venues", { recursive: true })
    const imagePath3 = `/venues/${crypto.randomUUID()}-${data.image2.name}`
    await fs.writeFile(`public${imagePath3}`, Buffer.from(await data.image3.arrayBuffer()))

    await fs.mkdir("public/venues", { recursive: true })
    const imagePath4 = `/venues/${crypto.randomUUID()}-${data.image4.name}`
    await fs.writeFile(`public${imagePath4}`, Buffer.from(await data.image4.arrayBuffer()))

    await db.venue.create({ 
        data: {
            name: data.name,
            phoneNumber: data.phoneNumber,
            location: data.location,
            description: data.description,
            sundaysHours: data.sundaysHours,
            mondaysHours: data.mondaysHours,
            tuesdaysHours:data.tuesdaysHours,
            wednesdaysHours: data.wednesdaysHours,
            thursdaysHours: data.thursdaysHours,
            fridaysHours: data.fridaysHours,
            saturdaysHours: data.saturdaysHours,
            parkingOptions: data.parkingOptions,
            instagramLink: data.instagramLink,
            facebookLink: data.facebookLink,
            websiteLink: data.websiteLink,
            cost: data.cost,
            fullBar: data.fullBar,
            beerWine: data.beerWine,
            imagePath1,
            imagePath2,
            imagePath3,
            imagePath4,
            venuePurpose: data.venuePurpose,

        },
    })

    revalidatePath("/")
    revalidatePath("/venues")

    redirect("/admin/venues")
}

const editScheme = addSchema.extend({
    image1: imageSchema.optional(),
    image2: imageSchema.optional(),
    image3: imageSchema.optional(),
    image4: imageSchema.optional(),
})

export async function updateVenue(
    id: string,
    prevState: unknown,
    formData: FormData
) {
    const result = editScheme.safeParse(Object.fromEntries(formData.entries()))
    if (result.success === false) {
        return result.error.formErrors.fieldErrors
    }

    const data = result.data
    const venue = await db.venue.findUnique({where: { id } })
    
    if (venue == null) return notFound()

    let imagePath1 = venue.imagePath1
    if (data.image1 != null && data.image1.size > 0){
        await fs.unlink(`public${venue.imagePath1}`)
        imagePath1 = `/venues/${crypto.randomUUID()}-${data.image1.name}`
        await fs.writeFile(`public${imagePath1}`, Buffer.from(await data.image1.arrayBuffer()))
    }
    let imagePath2 = venue.imagePath2
    if (data.image2 != null && data.image2.size > 0){
        await fs.unlink(`public${venue.imagePath2}`)
        imagePath2 = `/venues/${crypto.randomUUID()}-${data.image2.name}`
        await fs.writeFile(`public${imagePath2}`, Buffer.from(await data.image2.arrayBuffer()))
    }
    let imagePath3 = venue.imagePath3
    if (data.image3 != null && data.image3.size > 0){
        await fs.unlink(`public${venue.imagePath3}`)
        imagePath3 = `/venues/${crypto.randomUUID()}-${data.image3.name}`
        await fs.writeFile(`public${imagePath3}`, Buffer.from(await data.image3.arrayBuffer()))
    }
    let imagePath4 = venue.imagePath4
    if (data.image4 != null && data.image4.size > 0){
        await fs.unlink(`public${venue.imagePath4}`)
        imagePath4 = `/venues/${crypto.randomUUID()}-${data.image4.name}`
        await fs.writeFile(`public${imagePath4}`, Buffer.from(await data.image4.arrayBuffer()))
    }

    await db.venue.update({ 
        where: { id },
        data: {
            name: data.name,
            phoneNumber: data.phoneNumber,
            location: data.location,
            description: data.description,
            sundaysHours: data.sundaysHours,
            mondaysHours: data.mondaysHours,
            tuesdaysHours:data.tuesdaysHours,
            wednesdaysHours: data.wednesdaysHours,
            thursdaysHours: data.thursdaysHours,
            fridaysHours: data.fridaysHours,
            saturdaysHours: data.saturdaysHours,
            parkingOptions: data.parkingOptions,
            instagramLink: data.instagramLink,
            facebookLink: data.facebookLink,
            websiteLink: data.websiteLink,
            cost: data.cost,
            fullBar: data.fullBar,
            beerWine: data.beerWine,
            imagePath1,
            imagePath2,
            imagePath3,
            imagePath4,
            venuePurpose: data.venuePurpose,
        },
    })

    revalidatePath("/")
    revalidatePath("/venues")
    
    redirect("/admin/venues")
}

export async function deleteVenue(id: string){
    const venue = await db.venue.delete({where: { id } })

    if (venue == null) return notFound()

    await fs.unlink(`public${venue.imagePath1}`)
    await fs.unlink(`public${venue.imagePath2}`)
    await fs.unlink(`public${venue.imagePath3}`)
    await fs.unlink(`public${venue.imagePath4}`)
    revalidatePath("/")
    revalidatePath("/venues")
        
}
type SmallVenueProps = {
    id:string,
    name:string,
    phoneNumber:string,
    location: string,
}
type searchStringProps= {
    searchString: string
}
export async function searchVenues(searchValue: string):Promise<SmallVenueProps[]>{
    let venues = await db.venue.findMany({
        where: {
            name: {
                contains: `${searchValue}`
            },
            
        },
        orderBy: { name: "asc" }
    })

    if (venues == null) return notFound()

    return (
        venues
    )
}


export async function allVenues():Promise<SmallVenueProps[]>{
    let venues = await db.venue.findMany({ 
        select: {
            id:true,
            name:true,
            phoneNumber:true,
            location: true,
        },
        orderBy: { name: "asc" }
    })


    if (venues == null) return notFound()

    return (
        venues
    )
}


