'use client'

import React from 'react'
import './searchFilter.css'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function SearchFilter({placeholder}: {placeholder : string}){
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search',term);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  },500);
  return (
    <form onSubmit={handleSearch} className="SearchFilterContainer">
        <div className="SearchContainer">
            <input className="SearchBar" type="search" placeholder={placeholder || "search..."} defaultValue={searchParams.get('search')?.toString()} onChange={(e) => {handleSearch(e.target.value);}}/>
            <button type="submit" className="SearchButton">
                <img className="SearchSVG" src="assets/magnifying-glass-svgrepo-com.svg" alt="search"></img>
            </button>
        </div>
        <div className="FilterContainer">
            <button className="FilterOptionButton">Venue Type</button>
            <button className="FilterOptionButton">Amenities</button>
            <button className="FilterOptionButton">Price</button>
            <button className="FilterOptionButton">Hours</button>
            <button className="FilterOptionButton">Distance</button>

        </div>
    </form>
    
  )
}