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
                    <span className="package-cards-card-name">6 Hour Lesson Package</span> 
                    <span className='package-cards-card-limited-label'>Limited Time Only!!</span>
                    <span className="package-cards-card-price">$360</span>
                </div>

                <div className="package-cards-card-content-box">
                    <span className="package-cards-card-content">
                        <ul>
                            <li>6 Hours Lesson</li>
                            <li>6 Hours = 18 Hours Log Book</li>
                            <li>$200 deposit on first lesson</li>
                        </ul>
                    </span>

                    <NavLink to="/contact-us" className="package-cards-card-btn">
                        Book Now
                    </NavLink>

                </div>
            </div>

            <div className="package-cards-card">
                <div className="package-cards-card-header">
                    <span className="package-cards-card-name">10 Hour Lesson Package</span> 
                    <span className='package-cards-card-limited-label'>Limited Time Only!!</span>
                    <span className="package-cards-card-price">$600</span>
                </div>

                <div className="package-cards-card-content-box">
                    <span className="package-cards-card-content">
                        <ul>
                            <li>10 Hours Lesson</li>
                            <li>10 Hours = 30 Hours Log Book</li>
                            <li>$300 deposit on first lesson with 2 installment</li>
                        </ul>
                    </span>

                    <NavLink to="/contact-us" className="package-cards-card-btn">
                        Book Now
                    </NavLink>

                </div>
            </div>

            <div className="package-cards-card">
                <div className="package-cards-card-header">
                    <span className="package-cards-card-name">20 Hour Lesson Package</span> 
                    <span className='package-cards-card-limited-label'>Limited Time Only!!</span>
                    <span className="package-cards-card-price">$1200</span>
                </div>

                <div className="package-cards-card-content-box">
                    <span className="package-cards-card-content">
                        <ul>
                            <li>20 Hours Lesson</li>
                            <li>20 Hours = 60 Hours Log Book</li>
                            <li>$500 deposit on first lesson with 2 installment</li>
                        </ul>
                    </span>

                    <NavLink to="/contact-us" className="package-cards-card-btn">
                        Book Now
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

export default PackageCards