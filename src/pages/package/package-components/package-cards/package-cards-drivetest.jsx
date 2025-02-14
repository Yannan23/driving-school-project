import './package-cards.css'
import { NavLink } from "react-router-dom"

const PackageCards = () => {
    return(
        <div className="package-cards-box">
            <h1 className="package-cards-box-title">
                Lessons
            </h1>

            <div className="package-cards-card">
                <div className="package-cards-card-header">
                    <span className="package-cards-card-name">RMS Driving Test</span> 
                    <span className="package-cards-card-price">$200</span>
                </div>

                <div className="package-cards-card-content-box">
                    <span className="package-cards-card-content">
                        <ul>
                            <li>Pick up & Drop off Include</li>
                            <li>30 minutes skim through pre road test before exam</li>
                            <li>Use Instructor RMS approved Vehicle</li>
                        </ul>
                    </span>

                    <NavLink to="/contact-us" className="package-cards-card-btn">
                        BOOK NOW
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

export default PackageCards