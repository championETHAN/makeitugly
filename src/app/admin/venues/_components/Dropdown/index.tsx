import * as React from "react";
import { ActivatorButton, DropdownList, Wrapper } from "./styles";
import { useState } from "react";


interface IDropdownItem {
  id: number;
  text: string;
}

interface IProps {
  activatorText?: string;
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
  }
];

const Dropdown = ({
  items = dropdownItems,
  selected,
  setSelected
}: IProps) => {

  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const keyHandler = (event: React.KeyboardEvent) => {
    if (isOpen) {
      switch (event.key) {
        case "Escape":
          setIsOpen(false);
          break;
      }
    }
  };


  return (
    <Wrapper onKeyUp={keyHandler}>
      <ActivatorButton
        aria-haspopup="true"
        aria-controls="dropdown1"
        onClick={handleClick}
      >
        {selected ? selected : "select value"}
      </ActivatorButton>
      <DropdownList id="dropdown1" _active={isOpen} role="list">
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              backgroundColor: item.text === selected ? "lightblue" : "white"
            }}
            
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelected(item.text);
                setIsOpen(false);
              }}
            >
              {item.text}
            </button>
          </li>
        ))}
      </DropdownList>
    </Wrapper>
  );
};

export default Dropdown;
