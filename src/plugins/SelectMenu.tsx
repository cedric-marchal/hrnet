import { useState } from "react";

type Option = {
  label: string;
  value: unknown;
};

type SelectMenuProps = {
  options: Option[];
};

export const SelectMenu = ({ options }: SelectMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(false);
  };

  return (
    <div className="relative w-48">
      <button
        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={handleToggle}
      >
        {options[selectedIndex].label}
      </button>
      {isOpen && (
        <ul className="absolute w-full mt-2 bg-white rounded shadow-lg">
          {options.map((option: Option, index: number) => (
            <li
              key={index}
              className="w-full px-4 py-2 truncate cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(index)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
