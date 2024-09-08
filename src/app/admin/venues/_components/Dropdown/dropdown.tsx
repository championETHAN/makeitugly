import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ActivatorButton } from "./styles"
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import "./dropdown.css"
import { warn } from "console";

interface IDropdownItem {
    id: number;
    text: string;
  }
  
  interface IProps {
    items?: IDropdownItem[];
    selected: string | undefined;
    setSelected: (value: string ) => void;
  }
  
  const dropdownItems = [
    {
      id: 1,
      text: "Restaurant"
    },
    {
      id: 2,
      text: "Bar"
    },
    {
      id: 3,
      text: "Arcade"
    },
    {
      id: 4,
      text: "Bowling"
    },
    {
      id: 5,
      text: "Mini-Golf"
    },
    {
      id: 6,
      text: "Go-Kart Track"
    },
    {
      id: 7,
      text: "Coffee Shop"
    },
    {
      id: 8,
      text: "Shooting Range"
    },
    {
      id: 10,
      text: "Paint-Ball"
    },
    {
      id: 11,
      text: "Lounge"
    },
    {
      id: 12,
      text: "Zoo"
    },
    {
      id: 13,
      text: "Aquarium"
    },
    {
      id: 14,
      text: "Garden"
    },
    {
      id: 15,
      text: "Water Park"
    },
    {
      id: 16,
      text: "Amusment Park"
    },
    {
      id: 17,
      text: "Concert Hall"
    },
    {
      id: 19,
      text: "Public Pool"
    },
    {
      id: 20,
      text: "Moive Theater"
    },
    {
      id: 21,
      text: "Public Pool"
    },
    {
      id: 22,
      text: "Excape Room"
    },
    {
      id: 23,
      text: "Lazer Tag"
    },
    {
      id: 24,
      text: "Axe Throwing"
    },
    {
      id: 25,
      text: "Airsoft"
    },
    {
      id: 26,
      text: "Tattoo Parlor"
    },
    {
      id: 27,
      text: "Strip Club"
    },
    {
      id: 28,
      text: "Planetarium"
    },
    {
      id: 29,
      text: "Museum"
    },
  ];
  

export const NewDropDownM = ({
    items = dropdownItems,
    selected,
    setSelected,

  }: IProps) => {
  
    const [isOpen, setIsOpen] = useState(true);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
    return(
            <DropdownMenu>
                <DropdownMenuTrigger >
                    <div className="ActivateDropDown"
                        aria-haspopup="true"
                        aria-controls="dropdown1"
                        onClick={handleClick}
                    >
                    {selected ? selected : "select value"}
                    </div>
                </DropdownMenuTrigger>
                    <DropdownMenuContent className="MenuContentContainer">
                      {items.map((item) => (
                            <ul className=""
                                key={item.id}
                                style={{
                                backgroundColor: item.text === selected ? "lightblue" : "white"
                                }}
                                
                            >
                              <DropdownMenuItem 
                                textValue={selected}
                                id="dropdown1"
                                className="MenuItem"
                                inset={isOpen}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setSelected(item.text);
                                  setIsOpen(false);
                                }}
                              >
                                  {item.text}
                              </DropdownMenuItem>
                            </ul>
                            ))}
                    </DropdownMenuContent>
            </DropdownMenu>
    )
}