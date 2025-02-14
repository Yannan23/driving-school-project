import { NavLink } from "react-router-dom";
import './wcu-footer.css';

const WhyChooseUsFooter = () => {
    return (
        <div className="wcu-footer">
            <h3 className="wcu-footer-title">
                Ready To Start Your Journey?
            </h3>

            <NavLink to="/contact-us" className="wcu-footer-btn">
                BOOK NOW
            </NavLink>
        </div>
    );
};

export default WhyChooseUsFooter;
