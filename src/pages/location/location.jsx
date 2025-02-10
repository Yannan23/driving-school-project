import LocationBanner from './location-components/location-banner/location-banner';
import LocationServiceArea from './location-components/location-service-area/location-service-area';
import LocationFooter from './location-components/location-footer/location-footer';

const Location = () => {
    return (
        <div>
            <LocationBanner/>
            <LocationServiceArea/>
            <LocationFooter/>
        </div>
    )
}

export default Location;