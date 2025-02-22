import { NavLink } from "react-router-dom";
import './location-footer.css';

const LocationFooter = () => {
    return (
        <div className="location-footer">
            <p className="location-footer-content">
            <strong style={{ color: "var(--orange-color)"}}>Please note Pick and Drop off charge might occur in long-distance ONLY</strong>
            <br />
            <br />
            If your Suburb does not show in the list please call us to check your suburb if it is available or not. We provide mostly greater park of Sydney and will assist you as fast as possible
            </p>

            <NavLink to="/contact-us" className="location-footer-btn">
                BOOK NOW
            </NavLink>
        </div>
    );
};

export default LocationFooter


