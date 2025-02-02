import './package-btn-bar.css'
import { NavLink } from "react-router-dom"; 

const PackageBtnBar = () => {
    return(
        <div className="package-btn-bar-box">
            <NavLink to="/package" className="package-btn-bar-btn package-btn-bar-btn-selected">
                Lessons
            </NavLink>

            <NavLink to="package" className="package-btn-bar-btn">
                Package
            </NavLink>

            <NavLink to="drive-test" className="package-btn-bar-btn">
                Drive Test
            </NavLink>
            
        </div>
    )
}
export default PackageBtnBar