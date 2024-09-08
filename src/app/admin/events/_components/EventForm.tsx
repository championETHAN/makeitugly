"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addEvent, updateEvent } from "../../_actions/events"
import { useFormState, useFormStatus } from "react-dom"
import { Event } from "@prisma/client"
import Image from "next/image"
import React from "react"



export function EventForm({ event}: { event?: Event | null}) {
    const [error, action ] = useFormState(event == null? addEvent : updateEvent.bind(null, event.id), {});

    return (
    <form action={action} className="space-y-8">

        <div className="space-y-2">
            <Label htmlFor="name">Name: </Label>
            <Input type="text" id="name" name="name" required defaultValue={event?.name || ""}/>
            {error.name && <div className="text-destructive">{error.name}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="eventType">Event Type</Label>
            <Input type="text" id="eventType" name="eventType" required defaultValue={event?.eventType || ""}/>
            {error.eventType && <div className="text-destructive">{error.eventType}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input type="text" id="description" name="description" required defaultValue={event?.description || ""}/>
            {error.description && <div className="text-destructive">{error.description}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="cost">Cost</Label>
            <Input type="text" id="cost" name="cost" required defaultValue={event?.cost || ""}/>
            {error.cost && <div className="text-destructive">{error.cost}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input type="text" id="location" name="location" required defaultValue={event?.location || ""}/>
            {error.location && <div className="text-destructive">{error.location}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <Input type="text" id="duration" name="duration" required defaultValue={event?.duration || ""}/>
            {error.duration && <div className="text-destructive">{error.duration}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="eventCapacity">Event Capacity</Label>
            <Input type="text" id="eventCapacity" name="eventCapacity" required defaultValue={event?.eventCapacity || ""}/>
            {error.eventCapacity && <div className="text-destructive">{error.eventCapacity}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="eventRestrooms">Event Restrooms</Label>
            <Input type="text" id="eventRestrooms" name="eventRestrooms" required defaultValue={event?.eventRestrooms || ""}/>
            {error.eventRestrooms && <div className="text-destructive">{error.eventRestrooms}</div>}
        </div>



        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="reservationRequired">reservationRequired</Label>
            <Input type="text" id="reservationRequired" name="reservationRequired" required defaultValue={event?.reservationRequired || ""}/>
            {error.reservationRequired && <div className="text-destructive">{error.reservationRequired}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="payAtDoor">payAtDoor</Label>
            <Input type="text" id="payAtDoor" name="payAtDoor" required defaultValue={event?.payAtDoor || ""}/>
            {error.payAtDoor && <div className="text-destructive">{error.payAtDoor}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="recurringEvent">recurringEvent</Label>
            <Input type="text" id="recurringEvent" name="recurringEvent" required defaultValue={event?.recurringEvent || ""}/>
            {error.recurringEvent && <div className="text-destructive">{error.recurringEvent}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="twentyOnePlus">twentyOnePlus</Label>
            <Input type="text" id="twentyOnePlus" name="twentyOnePlus" required defaultValue={event?.twentyOnePlus || ""}/>
            {error.twentyOnePlus && <div className="text-destructive">{error.twentyOnePlus}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="eighteenPlus">eighteenPlus</Label>
            <Input type="text" id="eighteenPlus" name="eighteenPlus" required defaultValue={event?.eighteenPlus || ""}/>
            {error.eighteenPlus && <div className="text-destructive">{error.eighteenPlus}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="eventTheme">eventTheme</Label>
            <Input type="text" id="eventTheme" name="eventTheme" required defaultValue={event?.eventTheme || ""}/>
            {error.eventTheme && <div className="text-destructive">{error.eventTheme}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="specialGuest">specialGuest</Label>
            <Input type="text" id="specialGuest" name="specialGuest" required defaultValue={event?.specialGuest || ""}/>
            {error.specialGuest && <div className="text-destructive">{error.specialGuest}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="eventDiscountCoupon">eventDiscountCoupon</Label>
            <Input type="text" id="eventDiscountCoupon" name="eventDiscountCoupon" required defaultValue={event?.eventDiscountCoupon || ""}/>
            {error.eventDiscountCoupon && <div className="text-destructive">{error.eventDiscountCoupon}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="eventVendors">eventVendors</Label>
            <Input type="text" id="eventVendors" name="eventVendors" required defaultValue={event?.eventVendors || ""}/>
            {error.eventVendors && <div className="text-destructive">{error.eventVendors}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="eventAnimalFriendly">eventAnimalFriendly</Label>
            <Input type="text" id="eventAnimalFriendly" name="eventAnimalFriendly" required defaultValue={event?.eventAnimalFriendly || ""}/>
            {error.eventAnimalFriendly && <div className="text-destructive">{error.eventAnimalFriendly}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="eventRaffle">eventRaffle</Label>
            <Input type="text" id="eventRaffle" name="eventRaffle" required defaultValue={event?.eventRaffle || ""}/>
            {error.eventRaffle && <div className="text-destructive">{error.eventRaffle}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="photoOpLocation">photoOpLocation</Label>
            <Input type="text" id="photoOpLocation" name="photoOpLocation" required defaultValue={event?.photoOpLocation || ""}/>
            {error.photoOpLocation && <div className="text-destructive">{error.photoOpLocation}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="kidFriendly">kidFriendly</Label>
            <Input type="text" id="kidFriendly" name="kidFriendly" required defaultValue={event?.kidFriendly || ""}/>
            {error.kidFriendly && <div className="text-destructive">{error.kidFriendly}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="handicapAccessible">handicapAccessible</Label>
            <Input type="text" id="handicapAccessible" name="handicapAccessible" required defaultValue={event?.handicapAccessible || ""}/>
            {error.handicapAccessible && <div className="text-destructive">{error.handicapAccessible}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="eventPerformance">eventPerformance</Label>
            <Input type="text" id="eventPerformance" name="eventPerformance" required defaultValue={event?.eventPerformance || ""}/>
            {error.eventPerformance && <div className="text-destructive">{error.eventPerformance}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="eventFood">eventFood</Label>
            <Input type="text" id="eventFood" name="eventFood" required defaultValue={event?.eventFood || ""}/>
            {error.eventFood && <div className="text-destructive">{error.eventFood}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="eventSmokeFree">eventSmokeFree</Label>
            <Input type="text" id="eventSmokeFree" name="eventSmokeFree" required defaultValue={event?.eventSmokeFree || ""}/>
            {error.eventSmokeFree && <div className="text-destructive">{error.eventSmokeFree}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="eventSmokeAreas">eventSmokeAreas</Label>
            <Input type="text" id="eventSmokeAreas" name="eventSmokeAreas" required defaultValue={event?.eventSmokeAreas || ""}/>
            {error.eventSmokeAreas && <div className="text-destructive">{error.eventSmokeAreas}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="eventPayment">eventPayment</Label>
            <Input type="text" id="eventPayment" name="eventPayment" required defaultValue={event?.eventPayment || ""}/>
            {error.eventPayment && <div className="text-destructive">{error.eventPayment}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="patronParticipation">patronParticipation</Label>
            <Input type="text" id="patronParticipation" name="patronParticipation" required defaultValue={event?.patronParticipation || ""}/>
            {error.patronParticipation && <div className="text-destructive">{error.patronParticipation}</div>}
        </div>
        {/* just for testing */}
        <div className="space-y-2">
            <Label htmlFor="eventLocation">eventLocation</Label>
            <Input type="text" id="eventLocation" name="eventLocation" required defaultValue={event?.eventLocation || ""}/>
            {error.eventLocation && <div className="text-destructive">{error.eventLocation}</div>}
        </div>

        


        <div className="space-y-2">
            <Label htmlFor="eventImage1">Image 1 of 4</Label>
            <Input type="file" id="eventImage1" name="eventImage1" required={event == null}  />
            {event != null && ( 
                <Image 
                    src={event.imageEventPath1}
                    height="400"
                    width="400"
                    alt="Event Image 1"
                />
            )}

            {error.eventImage1 && <div className="text-destructive">{error.eventImage1}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="eventImage2">Image 2 of 4</Label>
            <Input type="file" id="eventImage2" name="eventImage2" required={event == null}  />
            {event != null && ( 
                <Image 
                    src={event.imageEventPath2}
                    height="400"
                    width="400"
                    alt="Event Image 2"
                />
            )}

            {error.eventImage2 && <div className="text-destructive">{error.eventImage2}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="eventImage3">Image 3 of 4</Label>
            <Input type="file" id="eventImage3" name="eventImage3" required={event == null}  />
            {event != null && ( 
                <Image 
                    src={event.imageEventPath3}
                    height="400"
                    width="400"
                    alt="Event Image 3"
                />
            )}

            {error.eventImage3 && <div className="text-destructive">{error.eventImage3}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="eventImage4">Image 4 of 4</Label>
            <Input type="file" id="eventImage4" name="eventImage4" required={event == null}  />
            {event != null && ( 
                <Image 
                    src={event.imageEventPath4}
                    height="400"
                    width="400"
                    alt="Event Image 4"
                />
            )}

            {error.eventImage4 && <div className="text-destructive">{error.eventImage4}</div>}
        </div>


        <div className="space-y-2">
            <Label htmlFor="eventBannerImage">Event Banner</Label>
            <Input type="file" id="eventBannerImage" name="eventBannerImage" required={event == null}  />
            {event != null && ( 
                <Image 
                    src={event.imageBannerPath}
                    height="400"
                    width="400"
                    alt="Event Banner Image"
                />
            )}

            {error.eventBannerImage && <div className="text-destructive">{error.eventBannerImage}</div>}
        </div>

        <div className="space-y-2">
            <Label htmlFor="eventFlyerImage">Event Flyer</Label>
            <Input type="file" id="eventFlyerImage" name="eventFlyerImage" required={event == null}  />
            {event != null && ( 
                <Image 
                    src={event.imageFlyerPath}
                    height="400"
                    width="400"
                    alt="Event Flyer Image"
                />
            )}

            {error.eventFlyerImage && <div className="text-destructive">{error.eventFlyerImage}</div>}
        </div>
        <SubmitButton />
    </form>
    )
}

function SubmitButton(){
    const { pending } = useFormStatus()
    
    return <Button type="submit" disabled={ pending }>{ pending ? "Saving..." : "Save"}</Button>
}