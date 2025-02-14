import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DropdownInput from '../../components/dropdown-input/dropdown-input';
import CallButton from '../../components/buttons/call-button';
import ajvErrors from 'ajv-errors';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';  // <-- Import ajv-formats


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

    const [userInfo, setUserInfo] = useState({ name: "", email: "", number: "", message: "", suburb: "" });
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
        setErrors({});

        const validationErrors = validateForm(userInfo);
        if (validationErrors) {
            setErrors(validationErrors);
            return;
        }

        const formData = new FormData(event.target);
        formData.append("access_key", "5e50c550-f99a-40b3-b1f9-79ffd6febe33");
        const json = JSON.stringify(Object.fromEntries(formData));

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: json
        }).then(res => res.json());

        if (res.success) {
            alert("Form submitted successfully");
        }
    };

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
                            {['name', 'email', 'number'].map((field) => (
                                <div key={field}>
                                    <input
                                        name={field}
                                        type={field === 'email' ? 'email' : 'text'}
                                        value={userInfo[field]}
                                        onChange={field === 'number' ? (e) => {
                                            const value = e.target.value.replace(/[^0-9]/g, '');
                                            setUserInfo({ ...userInfo, [e.target.name]: value });
                                        } : handleChange}
                                        className='bg-yellow-400 h-10 lg:h-11 w-full px-4 capitalize'
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
                            <button className='!bg-dark !w-full h-16 !text-yellow !uppercase !text-2xl'>submit</button>
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
                        <p className='px-4 text-justify capitalize'>Bankstown | Canterbury | Georges Hall | Hurtsville | Liverpool | Rhodes  Campsie | Lakembha | Wiley Park | Lidcomb | Condell Park | Roseland | Burwood | Yagoona | Cabramatta | Revesby | condell park | padstow | Riverwood | Narwee | Bevery Hills | Mount Lewis | Greenacre | Chullora | Strathfield | Burwood ⁠</p>
                        <p className='text-xs text-gray-400 p-4 text-justify'>* Please note Pick and Drop off might occour in long distance ONLY. If Your Suburb not shows in the list please call us for check your suburb if its avaialble or not. We provide mostly greater park of sydney and will assist you as fast as possible.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;