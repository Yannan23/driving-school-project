import { NavLink } from "react-router-dom";
import './location-footer.css';

const LocationFooter = () => {
    return (
        <div className="location-footer">
            <p className="location-footer-content">
            Please note Pick and Drop off charge might occur in long-distance <strong style={{ color: "var(--orange-color)"}}>ONLY</strong>
            <br />
            If your Suburb does not show in the list please call us to check your suburb if it is available or not. We provide mostly greater park of Sydney and will assist you as fast as possible
            </p>

            <NavLink to="/contact-us" className="location-footer-btn">
                Book Now
            </NavLink>
        </div>
    );
};

export default LocationFooter


