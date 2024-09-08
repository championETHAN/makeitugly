"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useTransition } from "react"
import { deleteVenue, searchVenues } from "../../_actions/venues"
import { useRouter } from "next/navigation"
import { useFormStatus } from "react-dom"
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import db from "@/db/db";
import { MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function DeleteDropDownItem({
    id,
    disabled,
}: {
    id: string 
    disabled: boolean
})  {
    const [ isPending, startTransition ] = useTransition()
    const router = useRouter()
    return (
        <DropdownMenuItem
            variant="destructive"
            disabled={disabled || isPending} 
            onClick={() => {
                startTransition(async () => {
                    await deleteVenue(id)
                    router.refresh()
                })
            }}
        >
            Delete
        </DropdownMenuItem>
    )
}



