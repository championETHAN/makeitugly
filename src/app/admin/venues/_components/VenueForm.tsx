"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addVenue, updateVenue } from "../../_actions/venues"
import { useFormState, useFormStatus } from "react-dom"
import { Venue } from "@prisma/client"
import Image from "next/image"
import React from "react"


import { NewDropDownM } from "./Dropdown/dropdown"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"




export function VenueForm({ venue}: { venue?: Venue | null}) {
    const [selected, setSelected] = useState<string | undefined>(venue?.venuePurpose);
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>(venue?.phoneNumber);
    const [error, action ] = useFormState(venue == null? addVenue : updateVenue.bind(null, venue.id), {})

    return (
    <form action={action} className="space-y-8">
        <div className="space-y-2">
            <Label>Venue Type: </Label>
            <Input type="hidden" id="venuePurpose" name="venuePurpose" required defaultValue={selected || ""}/>
            <NewDropDownM setSelected={setSelected} selected={selected}/>
            {error.venuePurpose && <div className="text-destructive">{error.venuePurpose}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required defaultValue={venue?.name || ""}/>
            {error.name && <div className="text-destructive">{error.name}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input type="text" id="phoneNumber" name="phoneNumber" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
            {error.phoneNumber && <div className="text-destructive">{error.phoneNumber}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="cost">Cost</Label>
            <Input type="text" id="cost" name="cost" required defaultValue={venue?.cost || ""}/>
            {error.cost && <div className="text-destructive">{error.cost}</div>}
        </div>

        <div className="space-y-2">
            <Label htmlFor="fullBar">Full Bar</Label>
            <Input type="text" id="fullBar" name="fullBar" required defaultValue={venue?.fullBar || ""}/>
            {error.fullBar && <div className="text-destructive">{error.fullBar}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="beerWine">Beer/Wine</Label>
            <Input type="text" id="beerWine" name="beerWine" required defaultValue={venue?.beerWine || ""}/>
            {error.beerWine && <div className="text-destructive">{error.beerWine}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="instagramLink">Instagram Link</Label>
            <Input type="text" id="instagramLink" name="instagramLink"  defaultValue={venue?.instagramLink || ""} />
            {error.instagramLink && <div className="text-destructive">{error.instagramLink}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="facebookLink">Facebook Link</Label>
            <Input type="text" id="facebookLink" name="facebookLink"  defaultValue={venue?.facebookLink || ""} />
            {error.facebookLink && <div className="text-destructive">{error.facebookLink}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="websiteLink">Website Link</Label>
            <Input type="text" id="websiteLink" name="websiteLink"  defaultValue={venue?.websiteLink || ""} />
            {error.websiteLink && <div className="text-destructive">{error.websiteLink}</div>}
        </div>




        <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input type="text" id="location" name="location" required  defaultValue={venue?.location || ""}/>
            {error.location && <div className="text-destructive">{error.location}</div>}
            <Label htmlFor="parkingOptions">Parking Options</Label>
            <Input type="text" id="parkingOptions" name="parkingOptions" required  defaultValue={venue?.parkingOptions || ""}/>
            {error.parkingOptions && <div className="text-destructive">{error.parkingOptions}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" required defaultValue={venue?.description || ""}/>
            {error.description && <div className="text-destructive">{error.description}</div>}
        </div>

        <div className="space-y-2">
            <h1 className="font-bold">Hours Of Operation</h1>
            <h3 className="">open: hour/am||pm</h3>
            <h3 className="pb-5">close: hour/am||pm</h3>

            <Label htmlFor="sundaysHours">Sunday</Label>
            <Input type="text" id="sundaysHours" name="sundaysHours" required  defaultValue={venue?.sundaysHours || ""}/>
            {error.sundaysHours && <div className="text-destructive">{error.sundaysHours}</div>}

            <Label htmlFor="mondaysHours">Monday</Label>
            <Input type="text" id="mondaysHours" name="mondaysHours" required  defaultValue={venue?.mondaysHours || ""}/>
            {error.mondaysHours && <div className="text-destructive">{error.mondaysHours}</div>}

            <Label htmlFor="tuesdaysHours">Tuesday</Label>
            <Input type="text" id="tuesdaysHours" name="tuesdaysHours" required  defaultValue={venue?.tuesdaysHours || ""}/>
            {error.tuesdaysHours && <div className="text-destructive">{error.tuesdaysHours}</div>}


            <Label htmlFor="wednesdaysHours">Wednesday</Label>
            <Input type="text" id="wednesdaysHours" name="wednesdaysHours" required  defaultValue={venue?.wednesdaysHours || ""}/>
            {error.wednesdaysHours && <div className="text-destructive">{error.wednesdaysHours}</div>}


            <Label htmlFor="thursdaysHours">Thursday</Label>
            <Input type="text" id="thursdaysHours" name="thursdaysHours" required  defaultValue={venue?.thursdaysHours || ""}/>
            {error.thursdaysHours && <div className="text-destructive">{error.thursdaysHours}</div>}


            <Label htmlFor="fridaysHours">Friday</Label>
            <Input type="text" id="fridaysHours" name="fridaysHours" required  defaultValue={venue?.fridaysHours || ""}/>
            {error.fridaysHours && <div className="text-destructive">{error.fridaysHours}</div>}

            <Label htmlFor="saturdaysHours">Saturday</Label>
            <Input type="text" id="saturdaysHours" name="saturdaysHours" required  defaultValue={venue?.saturdaysHours || ""}/>
            {error.saturdaysHours && <div className="text-destructive">{error.saturdaysHours}</div>}

        </div>
        <div className="space-y-2">
            <Label htmlFor="image1">Image 1 of 4</Label>
            <Input type="file" id="image1" name="image1" required={venue == null}  />
            {venue != null && ( 
                <Image 
                    src={venue.imagePath1}
                    height="400"
                    width="400"
                    alt="Venue Image 1"
                />
            )}

            {error.image1 && <div className="text-destructive">{error.image1}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="image2">Image 2 of 4</Label>
            <Input type="file" id="image2" name="image2" required={venue == null}  />
            {venue != null && ( 
                <Image 
                    src={venue.imagePath2}
                    height="400"
                    width="400"
                    alt="Venue Image 2"
                />
            )}

            {error.image2 && <div className="text-destructive">{error.image2}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="image3">Image 3 of 4</Label>
            <Input type="file" id="image3" name="image3" required={venue == null}  />
            {venue != null && ( 
                <Image 
                    src={venue.imagePath3}
                    height="400"
                    width="400"
                    alt="Venue Image 3"
                />
            )}

            {error.image3 && <div className="text-destructive">{error.image3}</div>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="image4">Image 4 of 4</Label>
            <Input type="file" id="image4" name="image4" required={venue == null}  />
            {venue != null && ( 
                <Image 
                    src={venue.imagePath4}
                    height="400"
                    width="400"
                    alt="Venue Image 4"
                />
            )}

            {error.image4 && <div className="text-destructive">{error.image4}</div>}
        </div>
        <SubmitButton />
    </form>
    )
}

function SubmitButton(){
    const { pending } = useFormStatus()
    return <Button type="submit" disabled={ pending }>{ pending ? "Saving..." : "Save"}</Button>
}