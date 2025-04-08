import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import addFormats from 'ajv-formats';  // <-- Import ajv-formats

import DropdownInput from '../../components/dropdown-input/dropdown-input';
import CallButton from '../../components/buttons/call-button';


const schema = {
    type: "object",
    properties: {
        name: { type: "string", minLength: 1, errorMessage: "Name can't be empty" },
        email: { type: "string", format: "email", errorMessage: "Invalid email format" },
        number: { type: "string", pattern: "^0[23478][0-9]{8}$", errorMessage: "Number must be a valid number" },
        suburb: { type: "string", minLength: 1, errorMessage: "Suburb cannot be empty" },
        message: { type: "string" }
    },
    required: ["name", "email", "number", "suburb"],
    errorMessage: {
        required: {
            name: "Name is required",
            email: "Email is required",
            number: "Number is required",
            suburb: "Suburb is required"
        }
    }
};

const ContactUs = () => {
    const [capVal, setcapVal] = useState(true);
    const captchaRef = useRef(null);
    const [result, setResult] = useState('')
    const [token, setToken] = useState(null);

    const [userInfo, setUserInfo] = useState({ Name: "", Email: "", Number: "", message: "", suburb: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const handleDropdownSelect = (option) => {
        setUserInfo(prevData => ({ ...prevData, suburb: option }));
    };

    const validateForm = (data) => {
        const ajv = new Ajv({ allErrors: true });
        ajvErrors(ajv);
        addFormats(ajv);  // <-- Add format support (including "email")

        const validate = ajv.compile(schema);
        const isValid = validate(data);

        if (!isValid) {
            const fieldErrors = {};
            validate.errors?.forEach((error) => {
                const field = error.instancePath.substring(1) || error.params.missingProperty;
                fieldErrors[field] = error.message;
            });
            return fieldErrors;
        }
        return null;
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", "780268db-f29d-48e5-bffb-1a37f51e60b4");
        formData.append("h-captcha-response", token);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            // event.target.reset();
        } else {
            console.log("Error", data);
        }
    };
    const onLoad = () => {
        captchaRef.current.execute();
    }

    useEffect(() => {
        if (token) {
            console.log(`hCaptcha Token: ${token}`);
        }
    }, [token])
    // const onLoad = () => {
    //     captchaRef.current.execute();
    // }

    useEffect(() => {
        if (token) {
            console.log(`hCaptcha Token: ${token}`);
        }
    }, [token])
    // const onHCaptchaChange = (token) => {
    //     // Verify the token on your server
    //     console.log('Captcha token:', token);
    //     // Proceed with form submission
    // };

    return (
        <div className='mt-[130px] font-Roboto-Condensed p-2 md:p-4 lg:p-8'>
            <div className='flex justify-center items-center flex-col'>
                <h1 className="uppercase !text-xl md:!text-2xl p-4 text-center !font-bold">book now / contact us</h1>
                <img src="/images/line.jpg" className='w-1/6 md:w-1/9 !h-0.5 md:!h-1 mb-2 lg:mb-4' alt="" />
            </div>
            <div className='md:grid md:grid-cols-2 grid-flow-dense md:p-4 lg:px-8'>
                <div className='md:col-start-2 flex flex-col !p-4 lg:!p-8 gap-2'>
                    <div className='py-2 px-4'>
                        <h2 className='uppercase text-yellow !font-bold py-4'>book now</h2>
                        <form onSubmit={onSubmit} className='w-full flex flex-col gap-2 lg:gap-3'>
                            {['Name', 'Email', 'Number'].map((field) => (
                                <div key={field}>
                                    <input
                                        name={field}
                                        type={field === 'email' ? 'email' : 'text'}
                                        value={userInfo[field]}
                                        onChange={field === 'number' ? (e) => {
                                            const value = e.target.value.replace(/[^0-9]/g, '');
                                            setUserInfo({ ...userInfo, [e.target.name]: value });
                                        } : handleChange}
                                        className='bg-yellow-400 h-10 lg:h-11 w-full px-4'
                                        placeholder={field}
                                    />
                                    {errors[field] && <p className="text-red-500 text-xs">{errors[field]}</p>}
                                </div>
                            ))}
                            <div>
                                <DropdownInput name="suburb" value={userInfo.suburb} onSelect={handleDropdownSelect} />
                                {errors.suburb && <p className="text-red-500 text-xs">{errors.suburb}</p>}
                            </div>
                            <div>
                                <textarea name='message' value={userInfo.message} onChange={handleChange} className='bg-yellow-400 h-40 w-full px-4 py-2 capitalize text-start' placeholder='message' />
                                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                            </div>

                            {/**hcaptcha */}
                            <HCaptcha
                                sitekey="2cf6b9a4-9b0c-4d52-af28-6782a0549ef0"
                                // onVerify={setToken}
                                // onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}

                                ref={captchaRef}
                                // onLoad={onLoad}
                                onVerify={(token) => setToken(token)}
                                onExpire={() => {
                                    setcapVal(false)
                                }}

                            // onVerify={(val) => setcapVal(val)}
                            />
                            <button
                                type='submit'
                                disabled={!capVal}
                                className={`!bg-dark !w-full h-16 !text-yellow !uppercase !text-2xl 
                                    ${capVal ?
                                        "hover:!text-white hover:!bg-yellow-400 cursor-pointer" :
                                        "cursor-not-allowed opacity-50"}`
                                }>submit</button>
                        </form>
                    </div>


                </div>
                <div className='md:col-start-1 flex flex-col p-4 lg:p-8 gap-2'>
                    <h2 className='uppercase text-yellow !font-bold px-4 md:pt-8 '>contact info</h2>
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
                            <div className='text-gray-500 text-lg capitalize'>
                                <p className='capitalize'>email</p>
                                <NavLink to="/contact-us" className='hover:text-amber-400 cursor-pointer'>khanrashed2411@gmail.com</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='py-2 px-4'>
                        <div className='flex bg-gray-100 w-full md:w-[80%] p-4 gap-4 items-center'>
                            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                                <i className="fa-solid fa-location-dot text-3xl"></i>
                            </div>
                            <div className='text-gray-500 text-lg capitalize'>
                                <p>address</p>
                                <p>bankstown NSW</p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-4 sm:py-2 sm:mb-4 lg:pb-8'>
                        <h2 className='uppercase text-yellow !font-bold p-4'>areas we cover</h2>
                        <p className='px-4 text-justify capitalize'>Bankstown | Canterbury | Georges Hall | Hurtsville | Liverpool | Rhodes  Campsie | Lakembha | Wiley Park | Lidcomb | Condell Park | Roseland | Burwood | Yagoona | Cabramatta | Revesby | condell park | padstow | Riverwood | Narwee | Bevery Hills | Mount Lewis | Greenacre | Chullora | Strathfield | Burwood | Rosemeadow | St Helens Park |Ambervale | Campbelltown | Bradbury | Glen alpine | Airds | Ruse | Lumeah | Blair Athol | Minto | Claymore | Eschol Park | Eagle Vale | Ingleburn | Glenfield
                        </p>
                        <p className='text-xs p-4 text-justify text-amber-400'>* Please note Pick and Drop off might occour in long distance ONLY. If Your Suburb not shows in the list please call us for check your suburb if its avaialble or not. We provide mostly greater park of sydney and will assist you as fast as possible.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;