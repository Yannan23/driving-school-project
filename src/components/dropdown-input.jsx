import React, { useState, useEffect, useRef } from 'react';

const DropdownInput = () => {

    const [selectOption, setSelectOption] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const options = ['Bankstown', 'Canterbury', 'Georges Hall', 'Hurtsville', 'Liverpool', 'Rhodes', 'Campsie', 'Lakembha', 'Wiley Park', 'Lidcomb', 'Condell Park', 'Roseland', 'Burwood', 'Yagoona', 'Cabramatta'
    ]

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
    }, [])

    return (
        <div>
            <input type='text' className='bg-yellow-400 h-10 lg:h-11 w-full px-4 capitalize' value={selectOption} onClick={() => setIsOpen(!isOpen)} readOnly placeholder='suburb'>
            </input>
            {
                isOpen && (
                    <ul className='bg-dark'>
                        {options.map((option, index) => (
                            <li key={index} className='px-4 py-1 text-light hover:bg-amber-400' onClick={() => {
                                setSelectOption(option);
                                setIsOpen(false)
                            }}>
                                {option}
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
};

export default DropdownInput;