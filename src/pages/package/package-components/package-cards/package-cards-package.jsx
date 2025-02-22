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
                    <span className='package-cards-card-limited-label'>Wouldn't Last Long!!</span>
                    <span className="package-cards-card-price">$360</span>
                </div>

                <div className="package-cards-card-content-box">
                    <span className="package-cards-card-content">
                        <ul>
                            <li className='package-cards-card-content-save'><strong>Save $60 great discount for student</strong></li>
                            <li>6 Hours Lesson</li>
                            <li>6 Hours = 18 Hours Log Book</li>
                            <li>Opportunity to pay by installment</li>
                        </ul>
                    </span>

                    <NavLink to="/contact-us" className="package-cards-card-btn">
                        BOOK NOW
                    </NavLink>

                </div>
            </div>

            <div className="package-cards-card">
                <div className="package-cards-card-header">
                    <span className="package-cards-card-name">10 Hour Lesson Package</span> 
                    <span className='package-cards-card-limited-label'>Wouldn't Last Long!!</span>
                    <span className="package-cards-card-price">$600</span>
                </div>

                <div className="package-cards-card-content-box">
                    <span className="package-cards-card-content">
                        <ul>
                            <li className='package-cards-card-content-save'><strong>Save $100 awesome discount for student</strong></li>
                            <li>10 Hours Lesson</li>
                            <li>10 Hours = 30 Hours Log Book</li>
                            <li>Opportunity to pay by installment</li>
                        </ul>
                    </span>

                    <NavLink to="/contact-us" className="package-cards-card-btn">
                        BOOK NOW
                    </NavLink>

                </div>
            </div>

            <div className="package-cards-card">
                <div className="package-cards-card-header">
                    <span className="package-cards-card-name">20 Hour Lesson Package</span> 
                    <span className='package-cards-card-limited-label'>Wouldn't Last Long!!</span>
                    <span className="package-cards-card-price">$1200</span>
                </div>

                <div className="package-cards-card-content-box">
                    <span className="package-cards-card-content">
                        <ul>
                            <li className='package-cards-card-content-save'><strong>$200 Big savings discount for student</strong></li>
                            <li>20 Hours Lesson</li>
                            <li>20 Hours = 60 Hours Log Book</li>
                            <li>Opportunity to pay by installment</li>
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