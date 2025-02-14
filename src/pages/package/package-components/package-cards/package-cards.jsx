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
                    <span className="package-cards-card-name">Observation Test</span> 
                    <span className="package-cards-card-price">$50</span>
                </div>

                <div className="package-cards-card-content-box">
                    <span className="package-cards-card-content">
                        <ul>
                            <li>1 Hour Session</li>
                        </ul>
                    </span>

                    <NavLink to="/contact-us" className="package-cards-card-btn">
                        BOOK NOW
                    </NavLink>

                </div>
            </div>

            <div className="package-cards-card">
                <div className="package-cards-card-header">
                    <span className="package-cards-card-name">Beginner 1 Hour Lesson</span> 
                    <span className="package-cards-card-price">$70</span>
                </div>

                <div className="package-cards-card-content-box">
                    <span className="package-cards-card-content">
                        <ul>
                            <li>1 Hour Lesson</li>
                            <li>1 Hour = 3 Hours Log Book</li>
                        </ul>
                    </span>

                    <NavLink to="/contact-us" className="package-cards-card-btn">
                        BOOK NOW
                    </NavLink>

                </div>
            </div>

            <div className="package-cards-card">
                <div className="package-cards-card-header">
                    <span className="package-cards-card-name">Beginner 2 Hours Lesson</span> 
                    <span className="package-cards-card-price">$120</span>
                </div>

                <div className="package-cards-card-content-box">
                    <span className="package-cards-card-content">
                        <ul>
                            <li>2 Hour Lesson</li>
                            <li>2 Hours = 6 Hours Log Book</li>
                            <li>Save $20</li>
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