import LocationBanner from './location-components/location-banner/location-banner';
import LocationServiceArea from './location-components/location-service-area/location-service-area';
import LocationFooter from './location-components/location-footer/location-footer';
import LocationMap from './location-components/location-map/location-map';

const Location = () => {
    return (
        <div>
            <LocationBanner/>
            <LocationMap/>
            <LocationServiceArea/>
            <LocationFooter/>
        </div>
    )
}

export default Location;