import './package.css'
import PackageBanner from "./package-components/package-banner/package-banner";
import PackageBtnBar from "./package-components/package-btn-bar/package-btn-bar";
import PackageCards from "./package-components/package-cards/package-cards";


const Package = () => {
    return (
        <body className='package-page-container'>
            <PackageBanner/>
            <PackageBtnBar/>
        </body>
    )
}

export default Package;