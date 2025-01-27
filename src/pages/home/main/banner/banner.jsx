import React from 'react';

const Banner = () => {
    return (
        <>
            <body className="bg-gray-600">
                <header className="sticky top-0 z-50 bg-slate-500 shadow">
                    <div className="container mx-auto px-6 py-3 h-32">
                        <div className="flex items-center justify-between">
                            <div>
                                <a href="#" className="text-xl font-bold text-gray-800">Brand</a>
                            </div>
                            <div className="hidden md:block">
                                <ul className="flex ml-2 space-x-8">
                                    <li><a href="#" className="text-gray-800">Home</a></li>
                                    <li><a href="#" className="text-gray-800">About</a></li>
                                    <li><a href="#" className="text-gray-800">Services</a></li>
                                    <li><a href="#" className="text-gray-800">Contact</a></li>
                                </ul>
                            </div>
                            <div className="md:hidden">
                                <button className="text-gray-800 focus:outline-none">
                                    <i className="fas fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </body>
        </>
    )
}

export default Banner;