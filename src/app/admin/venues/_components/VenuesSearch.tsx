"use client"
import { Input } from "@/components/ui/input"
import { usePathname, useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"

export function Search({ placeholder }: { placeholder: string}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter()

    function handleSearch(term: string){
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        }else{
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <>
            <form className="flex justify-between items-center">
                <Input
                    type="search"
                    id="search"
                    name="search"
                    placeholder={placeholder}
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get('query')?.toString()}/>
            </form >
            
        </>
    
    )
}