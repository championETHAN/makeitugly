"use client"
import { Accordion ,AccordionContent ,AccordionItem ,AccordionTrigger } from "@/components/ui/accordion"
import { parse } from "path"
import React ,{ ReactNode, useState } from "react"
import { isDayOfWeekType } from "react-day-picker"

type VENUEHOURSPROPS = {
    sundaysHours: ReactNode,
    mondaysHours: ReactNode,
    tuesdaysHours: ReactNode,
    wednesdaysHours: ReactNode,
    thursdaysHours: ReactNode,
    fridaysHours: ReactNode,
    saturdaysHours: ReactNode 
}

export default function HoursDisplay ({sundaysHours, mondaysHours,tuesdaysHours,wednesdaysHours , thursdaysHours, fridaysHours, saturdaysHours}: VENUEHOURSPROPS){
    let TodaysDate =new Date().toLocaleDateString('en-US', { weekday: 'long' });
    let CurrentTime = new Date().toLocaleTimeString('en-US', { timeStyle: 'short' });
    const [openChecker, setOpenChecker] = useState();

    return (
        <>
            <div className="flex">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>{TodaysDate} Hours: </AccordionTrigger>
                        <AccordionContent>
                           <h1 className="ml-2 font-semibold">Sunday: {sundaysHours}</h1>
                        </AccordionContent>
                        <AccordionContent>
                            <h1 className="ml-2 font-semibold">Monday: {mondaysHours}</h1>
                        </AccordionContent>
                        <AccordionContent>
                            <h1 className="ml-2 font-semibold">Tuesday: {tuesdaysHours}</h1>
                        </AccordionContent>
                        <AccordionContent>
                            <h1 className="ml-2 font-semibold">Wednesday: {wednesdaysHours}</h1>
                        </AccordionContent>
                        <AccordionContent>
                            <h1 className="ml-2 font-semibold">Thursday: {thursdaysHours}</h1>
                        </AccordionContent>
                        <AccordionContent>
                            <h1 className="ml-2 font-semibold">Friday: {fridaysHours}</h1>
                        </AccordionContent>
                        <AccordionContent>
                            <h1 className="ml-2 font-semibold">Saturday: {saturdaysHours}</h1>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>        
        </>
    )
}