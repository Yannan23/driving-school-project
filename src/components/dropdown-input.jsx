import React, { useState, useEffect, useRef } from 'react';

const DropdownInput = ({ name, value, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const options = [
        'Bankstown', 'Canterbury', 'Georges Hall', 'Hurtsville', 'Liverpool',
        'Rhodes', 'Campsie', 'Lakembha', 'Wiley Park', 'Lidcomb',
        'Condell Park', 'Roseland', 'Burwood', 'Yagoona', 'Cabramatta'
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative">
            {/* Input Field */}
            <input
                type="text"
                name={name}
                className="bg-yellow-400 h-10 lg:h-11 w-full px-4 capitalize cursor-pointer"
                value={value}
                onClick={() => setIsOpen(!isOpen)}
                readOnly
                placeholder="Select suburb"
            />

            {/* Dropdown Options */}
            {isOpen && (
                <ul className="absolute z-10 bg-dark w-full max-h-40 overflow-auto">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 text-light hover:bg-amber-400 cursor-pointer"
                            onClick={() => {
                                onSelect(option); // Pass selected option to parent
                                setIsOpen(false); // Close dropdown
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownInput;
