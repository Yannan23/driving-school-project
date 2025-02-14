import WhyChooseUsHeader from "./why-choose-us-components/wcu-header/wcu-header";
import WhyChooseUsBanner from "./why-choose-us-components/wcu-banner/wcu-banner";
import WhyChooseUsLabels from "./why-choose-us-components/wcu-labels/wcu-labels";
import WhyChooseUsComment from "./why-choose-us-components/wcu-comment/wcu-comment";
import WhyChooseUsFooter from "./why-choose-us-components/wcu-footer/wcu-footer"
import './why-choose-us.css'

const WhyChooseUs = () => {
    return (
        <div className="wcu-page-body">
            <WhyChooseUsHeader/>
            <WhyChooseUsBanner/>
            <WhyChooseUsLabels/>
            <WhyChooseUsComment/>
            <WhyChooseUsFooter/>
        </div>
    )
}

export default WhyChooseUs;