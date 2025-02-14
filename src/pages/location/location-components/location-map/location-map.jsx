import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './location-map.css';

function LocationMap() {
    const mapRef = useRef(null);
    const mapContainerRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZHl4OTUyMjczMTExIiwiYSI6ImNtNnlrN2w4bDA3NWsya29iMXV4OXB4NjIifQ.dKXAXIkR-Beo9upl5D227Q';

        if (!mapContainerRef.current) return;

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [151.0335, -33.9124],
            zoom: 10.12
        });

        mapRef.current.on('load', () => {
            const el = document.createElement('a');
            el.className = 'marker';
            el.href = 'https://www.google.com/maps/search/?api=1&query=25-29+French+Avenue+Bankstown';
            el.target = '_blank'; 
            el.rel = 'noopener noreferrer';
            el.style.backgroundImage = 'url(/images/logo.svg)';
            el.style.width = '32px';
            el.style.height = '32px';
            el.style.backgroundSize = '100%';
            el.style.display = 'block'; 
            el.style.cursor = 'pointer'; 

            markerRef.current = new mapboxgl.Marker({ element: el })
                .setLngLat([151.0335, -33.9124]) 
                .addTo(mapRef.current);
        });

        return () => {
            markerRef.current?.remove();
            mapRef.current?.remove();
        };
    }, []);

    return (
        <div className="location-map-container">
            <div className="location-map-map" ref={mapContainerRef}></div>
        </div>
    );
}

export default LocationMap;
