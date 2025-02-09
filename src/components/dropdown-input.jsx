import React, { useState } from 'react';

const DropdownInput = () => {

    const [selectOption, setSelectOption] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const options = ['Bankstown', 'Canterbury', 'Georges Hall', 'Hurtsville', 'Liverpool', 'Rhodes', 'Campsie', 'Lakembha', 'Wiley Park', 'Lidcomb', 'Condell Park', 'Roseland', 'Burwood', 'Yagoona', 'Cabramatta'
    ]

    return (
        <div>
            <input type='text' className='bg-yellow-400 h-10 w-full px-4 capitalize' value={selectOption} onClick={() => setIsOpen(!isOpen)} placeholder='suburb'>
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