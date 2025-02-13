import React, { useState, useRef } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
import { NavLink } from 'react-router-dom';
import DropdownInput from '../../components/dropdown-input'
import CallButton from '../../components/buttons/call-button';

const ContactUs = () => {
    // const [capVal, setcapVal] = useState(null);
    // const recaptchaRef = useRef(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [textArea, setTextArea] = useState('');

    // const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        // formData.append("access_key", "5e50c550-f99a-40b3-b1f9-79ffd6febe33");//Rashed
        formData.append("access_key", "780268db-f29d-48e5-bffb-1a37f51e60b4");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };

    return (
        <div className='mt-[130px] font-Roboto-Condensed p-2 md:p-4 lg:p-8'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className="uppercase !text-xl md:!text-2xl p-4 text-center !font-bold">book now / contact us</h1>
                <img src="/images/line.jpg" className='w-1/6 md:w-1/9 !h-0.5 md:!h-1 mb-2 lg:mb-4' alt="" />
            </div>

            <div className='md:grid md:grid-cols-2 grid-flow-dense md:p-4 lg:px-8'>
                {/** form */}
                <div className='md:col-start-2 flex flex-col p-4 lg:p-8 gap-2'>
                    <h2 className='uppercase text-yellow !font-bold py-4'>book now</h2>
                    <form onSubmit={onSubmit} className='w-full flex flex-col gap-2 lg:gap-3'>
                        <input name='name' type="text" value={name} onChange={(e) => { setName(e.target.value) }} className='bg-yellow-400 h-10 lg:h-11 w-full px-4' placeholder='Name' />
                        <input name='email' type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className='bg-yellow-400 h-10 lg:h-11 w-full px-4 capitalize' placeholder='email' />
                        <input name='phone number' type="text" value={number} onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value)) { // Allow only digits (no letters, no special characters)
                                setNumber(value);
                            }
                        }} className='bg-yellow-400 h-10 lg:h-11 w-full px-4' placeholder='phone' />
                        <DropdownInput />
                        <textarea name='message' value={textArea} onChange={(e) => { setTextArea(e.target.value) }} className='bg-yellow-400 h-40 w-full px-4 !py-2 capitalize text-start' placeholder='message' />

                        {/**recaptcha */}
                        {/* < ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6Lc9itEqAAAAAED4du2DdXh6NKf_fQn-pMvZ5nr3"
                            onChange={(val) => setcapVal(val)}
                        /> */}

                        {/* <button disabled={!capVal} className={`!bg-dark !w-full h-16 !text-yellow !uppercase !text-2xl ${capVal ? "hover:!text-white hover:!bg-yellow-400 cursor-pointer" : "cursor-not-allowed opacity-50"}`}>submit</button> */}
                        <button className={`!bg-dark !w-full h-16 !text-yellow !uppercase !text-2xl`}>submit</button>
                    </form>
                </div>

                {/**contact info */}
                <div className='md:col-start-1'>
                    <div className='flex flex-col gap-0 md:p-4 lg:p-8'>
                        <h2 className='uppercase text-yellow !font-bold p-4'>contact info</h2>
                        <div className='py-2 px-4'>
                            <div className='flex bg-gray-100 w-full md:w-[80%] p-4 gap-4 items-center'>
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-mobile-screen-button text-3xl"></i>
                                </div>
                                <div className='text-gray-500 text-lg'>
                                    <p className='capitalize'>phone</p>
                                    <CallButton />
                                </div>
                            </div>
                        </div>
                        <div className='py-2 px-4'>
                            <div className='flex bg-gray-100 w-full md:w-[80%] p-4 gap-4 items-center'>
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-envelope text-3xl"></i>
                                </div>
                                <div className='text-gray-500 text-lg'>
                                    <p className='capitalize'>email</p>
                                    <p className='hover:text-amber-400 cursor-pointer'><NavLink to="/contact-us">khanrashed2411@gmail.com</NavLink></p>
                                </div>
                            </div>
                        </div>
                        <div className='py-2 px-4'>
                            <div className='flex bg-gray-100 w-full md:w-[80%] p-4 gap-4 items-center'>
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                                    <i className="fa-solid fa-location-dot text-3xl"></i>                                </div>
                                <div className='text-gray-500 text-lg capitalize'>
                                    <p>address</p>
                                    <p>bankstown NSW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-4 sm:px-4 sm:py-2 sm:mb-4 lg:px-8 lg:pb-8'>
                        <h2 className='uppercase text-yellow !font-bold p-4'>areas we cover</h2>
                        <p className='px-4 text-justify'>Bankstown | Canterbury | Georges Hall | Hurtsville | Liverpool | Rhodes  Campsie |Lakembha | Wiley Park | Lidcomb | Condell Park | Roseland | Burwood| Yagoona | Cabramatta
                        </p>
                        <p className='text-xs text-gray-400 p-4 text-justify'>* Please note Pick and Drop off might occour in long distance ONLY .
                            If Your Suburb not shows in the list please call us for check your suburb if its avaialble or not. We provide mostly greater park of sydney and will assist you as fast as possible.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactUs;