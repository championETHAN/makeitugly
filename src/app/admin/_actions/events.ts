"use server"

import db from "@/db/db"
import { z } from "zod"
import fs from "fs/promises"
import { notFound, redirect } from "next/navigation"
import { revalidatePath } from "next/cache"


const eventFileSchema = z.instanceof(File, { message: "Required" })
const eventImageSchema = eventFileSchema.refine(file => file.size === 0 || file.type.startsWith("image/"))

const addEventSchema = z.object({
    eventType:           z.string().min(1),
    name:                z.string().min(1),
    description:         z.string().min(1),
    cost:                z.string().min(0),
    location:            z.string().min(1),
    duration:            z.string().min(1),
    eventCapacity:       z.string().min(1),
    eventRestrooms:      z.string().min(1),
    eventImage1: eventImageSchema.refine(file => file.size > 0, "Required"),
    eventImage2: eventImageSchema.refine(file => file.size > 0, "Required"),
    eventImage3: eventImageSchema.refine(file => file.size > 0, "Required"),
    eventImage4: eventImageSchema.refine(file => file.size > 0, "Required"),
    eventBannerImage: eventImageSchema.refine(file => file.size > 0, "Required"),
    eventFlyerImage:  eventImageSchema.refine(file => file.size > 0, "Required"),
    reservationRequired: z.string().min(0),
    ticketRequired:      z.string().min(0),
    payAtDoor:           z.string().min(0),
    recurringEvent:      z.string().min(0),
    twentyOnePlus:       z.string().min(0),
    eighteenPlus:        z.string().min(0),
    eventTheme:          z.string().min(0),
    specialGuest:        z.string().min(0),
    eventDiscountCoupon: z.string().min(0),
    eventVendors:        z.string().min(0),
    eventAnimalFriendly: z.string().min(0),
    eventRaffle:         z.string().min(0),
    photoOpLocation:     z.string().min(0),
    kidFriendly:         z.string().min(0),
    handicapAccessible:  z.string().min(0),
    eventPerformance:    z.string().min(0),
    eventFood:           z.string().min(0),
    eventSmokeFree:      z.string().min(0),
    eventSmokeAreas:     z.string().min(0),  
    eventPayment:        z.string().min(0),
    patronParticipation: z.string().min(0),
    eventLocation:       z.string().min(0),

})

export async function addEvent(prevState: unknown, formData: FormData) {
    const result = addEventSchema.safeParse(Object.fromEntries(formData.entries()))
    console.log(result);
    if (result.success === false) {
        return result.error.formErrors.fieldErrors
    }

    const data = result.data

    await fs.mkdir("public/events", { recursive: true })
    const imageEventPath1 = `/events/${crypto.randomUUID()}-${data.eventImage1.name}`
    await fs.writeFile(`public${imageEventPath1}`, Buffer.from(await data.eventImage1.arrayBuffer()))

    await fs.mkdir("public/events", { recursive: true })
    const imageEventPath2 = `/events/${crypto.randomUUID()}-${data.eventImage2.name}`
    await fs.writeFile(`public${imageEventPath2}`, Buffer.from(await data.eventImage2.arrayBuffer()))

    await fs.mkdir("public/events", { recursive: true })
    const imageEventPath3 = `/events/${crypto.randomUUID()}-${data.eventImage3.name}`
    await fs.writeFile(`public${imageEventPath3}`, Buffer.from(await data.eventImage3.arrayBuffer()))

    await fs.mkdir("public/events", { recursive: true })
    const imageEventPath4 = `/events/${crypto.randomUUID()}-${data.eventImage4.name}`
    await fs.writeFile(`public${imageEventPath4}`, Buffer.from(await data.eventImage4.arrayBuffer()))

    await fs.mkdir("public/events", { recursive: true })
    const imageBannerPath = `/events/${crypto.randomUUID()}-${data.eventBannerImage.name}`
    await fs.writeFile(`public${imageBannerPath}`, Buffer.from(await data.eventBannerImage.arrayBuffer()))

    await fs.mkdir("public/events", { recursive: true })
    const imageFlyerPath = `/events/${crypto.randomUUID()}-${data.eventFlyerImage.name}`
    await fs.writeFile(`public${imageFlyerPath}`, Buffer.from(await data.eventFlyerImage.arrayBuffer()))

    await db.event.create({ 
        data: {
            eventType: data.eventType,
            name: data.name,
            description: data.description,
            cost: data.cost,
            location: data.location,
            duration: data.duration,
            eventCapacity: data.eventCapacity,
            eventRestrooms: data.eventRestrooms,
            reservationRequired: data.reservationRequired,
            ticketRequired: data.ticketRequired,
            payAtDoor: data.payAtDoor,
            recurringEvent: data.recurringEvent,
            twentyOnePlus: data.twentyOnePlus,
            eighteenPlus: data.eighteenPlus,
            eventTheme: data.eventTheme,  
            specialGuest: data.specialGuest, 
            eventDiscountCoupon: data.eventDiscountCoupon,
            eventVendors: data.eventVendors,
            eventAnimalFriendly: data.eventAnimalFriendly,
            eventRaffle: data.eventRaffle,
            photoOpLocation: data.photoOpLocation,
            kidFriendly: data.kidFriendly,
            handicapAccessible: data.handicapAccessible,
            eventPerformance: data.eventPerformance,
            eventFood: data.eventFood,
            eventSmokeFree: data.eventSmokeFree,
            eventSmokeAreas: data.eventSmokeAreas,
            eventPayment: data.eventPayment, 
            patronParticipation: data.patronParticipation,
            eventLocation: data.eventLocation,
            imageEventPath1,
            imageEventPath2,
            imageEventPath3,
            imageEventPath4,
            imageBannerPath,
            imageFlyerPath
        },
    })
    revalidatePath("/")
    revalidatePath("/events")

    redirect("/admin/events")
}

const editEventScheme = addEventSchema.extend({
    eventImage1: eventImageSchema.optional(),
    eventImage2: eventImageSchema.optional(),
    eventImage3: eventImageSchema.optional(),
    eventImage4: eventImageSchema.optional(),
    imageBanner: eventImageSchema.optional(),
    imageFlyer:  eventImageSchema.optional(),

})

export async function updateEvent(
    id: string,
    prevState: unknown,
    formData: FormData
) {
    const result = editEventScheme.safeParse(Object.fromEntries(formData.entries()))
    if (result.success === false) {
        return result.error.formErrors.fieldErrors
    }

    const data = result.data
    const event = await db.event.findUnique({where: { id } })
    
    if (event == null) return notFound()

    let imageEventPath1 = event.imageEventPath1
    if (data.eventImage1 != null && data.eventImage1.size > 0){
        await fs.unlink(`public${event.imageEventPath1}`)
        imageEventPath1 = `/events/${crypto.randomUUID()}-${data.eventImage1.name}`
        await fs.writeFile(`public${imageEventPath1}`, Buffer.from(await data.eventImage1.arrayBuffer()))
    }
    let imageEventPath2 = event.imageEventPath2
    if (data.eventImage2 != null && data.eventImage2.size > 0){
        await fs.unlink(`public${event.imageEventPath2}`)
        imageEventPath2 = `/events/${crypto.randomUUID()}-${data.eventImage2.name}`
        await fs.writeFile(`public${imageEventPath2}`, Buffer.from(await data.eventImage2.arrayBuffer()))
    }
    let imageEventPath3 = event.imageEventPath3
    if (data.eventImage3 != null && data.eventImage3.size > 0){
        await fs.unlink(`public${event.imageEventPath3}`)
        imageEventPath3 = `/events/${crypto.randomUUID()}-${data.eventImage3.name}`
        await fs.writeFile(`public${imageEventPath3}`, Buffer.from(await data.eventImage3.arrayBuffer()))
    }
    let imageEventPath4 = event.imageEventPath4
    if (data.eventImage4 != null && data.eventImage4.size > 0){
        await fs.unlink(`public${event.imageEventPath4}`)
        imageEventPath4 = `/events/${crypto.randomUUID()}-${data.eventImage4.name}`
        await fs.writeFile(`public${imageEventPath4}`, Buffer.from(await data.eventImage4.arrayBuffer()))
    }
    let imageBannerPath = event.imageBannerPath
    if (data.imageBanner != null && data.imageBanner.size > 0){
        await fs.unlink(`public${event.imageBannerPath}`)
        imageBannerPath = `/events/${crypto.randomUUID()}-${data.imageBanner.name}`
        await fs.writeFile(`public${imageBannerPath}`, Buffer.from(await data.imageBanner.arrayBuffer()))
    }
    let imageFlyerPath = event.imageFlyerPath
    if (data.imageFlyer != null && data.imageFlyer.size > 0){
        await fs.unlink(`public${event.imageFlyerPath}`)
        imageFlyerPath = `/events/${crypto.randomUUID()}-${data.imageFlyer.name}`
        await fs.writeFile(`public${imageFlyerPath}`, Buffer.from(await data.imageFlyer.arrayBuffer()))
    }

    await db.event.update({ 
        where: { id },
        data: {
            eventType:                  data.eventType,
            name:                       data.name,
            description:                data.description,
            cost:                       data.cost,
            location:                   data.location,
            duration:                   data.duration,
            eventCapacity:              data.eventCapacity,
            eventRestrooms:             data.eventRestrooms,
            reservationRequired:        data.reservationRequired,
            ticketRequired:             data.ticketRequired,
            payAtDoor:                  data.payAtDoor,
            recurringEvent:             data.recurringEvent,
            twentyOnePlus:              data.twentyOnePlus,
            eighteenPlus:               data.eighteenPlus,
            eventTheme:                 data.eventTheme,  
            specialGuest:               data.specialGuest, 
            eventDiscountCoupon:        data.eventDiscountCoupon,
            eventVendors:               data.eventVendors,
            eventAnimalFriendly:        data.eventAnimalFriendly,
            eventRaffle:                data.eventRaffle,
            photoOpLocation:            data.photoOpLocation,
            kidFriendly:                data.kidFriendly,
            handicapAccessible:         data.handicapAccessible,
            eventPerformance:           data.eventPerformance,
            eventFood:                  data.eventFood,
            eventSmokeFree:             data.eventSmokeFree,
            eventSmokeAreas:            data.eventSmokeAreas,
            eventPayment:               data.eventPayment, 
            patronParticipation:        data.patronParticipation,
            eventLocation:              data.eventLocation,
            imageEventPath1,
            imageEventPath2,
            imageEventPath3,
            imageEventPath4,
            imageBannerPath,
            imageFlyerPath,
        },
    })

    revalidatePath("/")
    revalidatePath("/events")
    
    redirect("/admin/events")
}

export async function deleteEvent(id: string){
    const event = await db.event.delete({where: { id } })

    if (event == null) return notFound()

    await fs.unlink(`public${event.imageEventPath1}`)
    await fs.unlink(`public${event.imageEventPath2}`)
    await fs.unlink(`public${event.imageEventPath3}`)
    await fs.unlink(`public${event.imageEventPath4}`)
    await fs.unlink(`public${event.imageBannerPath}`)
    await fs.unlink(`public${event.imageFlyerPath}`)
    revalidatePath("/")
    revalidatePath("/events")
}
type SmallEventProps = {
    eventCapacity: string,
    id:string,
    name:string,
    location: string,
}
type searchStringProps= {
    searchString: string
}
export async function searchEvents(searchValue: string):Promise<SmallEventProps[]>{
    let events = await db.event.findMany({
        where: {
            name: {
                contains: `${searchValue}`
            },
            
        },
        orderBy: { name: "asc" }
    })

    if (events == null) return notFound()

    return (
        events
    )
}


export async function allEvents():Promise<SmallEventProps[]>{
    let events = await db.event.findMany({ 
        select: {
            id:true,
            name:true,
            location: true,
            eventCapacity:true,
        },
        orderBy: { name: "asc" }
    })


    if (events == null) return notFound()

    return (
        events
    )
}


