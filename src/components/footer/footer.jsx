import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='container' >
            <div className=''>
                <div className=''>
                    <div className='grid grid-cols-2 bg-black h-6'>
                        <a href="">
                            <img src="/src/assets/logo.svg" alt="" />
                        </a>
                    </div>
                    <div className='grid grid-cols-6 bg-slate-700'>

                    </div>
                    <div className='grid grid-cols-4 bg-slate-500'>

                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer;