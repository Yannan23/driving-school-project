import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const DropdownInput = ({ name, value, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const dropdownRef = useRef(null);

  const options = [
    "Bankstown",
    "Canterbury",
    "Chullora",
    "Georges Hall",
    "Hurstville",
    "Liverpool",
    "Rhodes",
    "Campsie",
    "Lakemba",
    "Wiley Park",
    "Lidcombe",
    "Condell Park",
    "Roselands",
    "Burwood",
    "Yagoona",
    "Cabramatta",
    "Revesby",
    "Padstow",
    "Riverwood",
    "Narwee",
    "Beverly Hills",
    "Mount Lewis",
    "Greenacre",
    "Strathfield",
    "Rosemeadow",
    "St Helens Park",
    "Ambervale",
    "Campbelltown",
    "Bradbury",
    "Glen Alpine",
    "Airds",
    "Ruse",
    "Leumeah",
    "Blair Athol",
    "Minto",
    "Claymore",
    "Eschol Park",
    "Eagle Vale",
    "Ingleburn",
    "Glenfield",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (inputValue.trim() !== "") {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(inputValue.toLowerCase()),
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsOpen(true);
  };

  const handleOptionSelect = (option) => {
    setInputValue(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <input
        type="text"
        name={name}
        className="bg-yellow-400 h-10 lg:h-11 w-full px-4 capitalize"
        value={inputValue}
        onChange={handleInputChange}
        onClick={() => setIsOpen(true)}
        placeholder="Select or type suburb"
      />

      {isOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-10 bg-dark w-full max-h-40 overflow-auto">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 text-light hover:bg-amber-400 cursor-pointer"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropdownInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default DropdownInput;
