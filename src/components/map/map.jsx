import React from "react";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Map() {
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const markerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoieWFubmFuMTEyMiIsImEiOiJjbHpnMG04YmEwcmNlMmxxMTY0dmVjOXo2In0.ohiqPHaTXPRnyoPnk3HBTg";
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11", // Add a style URL
      center: [151.0335, -33.9124],
      zoom: 10.12,
    });

    mapRef.current.on("load", () => {
      // Create a custom marker element
      const el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundImage = "url(/images/logo.svg)";
      el.style.width = "32px";
      el.style.height = "32px";
      el.style.backgroundSize = "100%";

      // Add the marker to the map
      markerRef.current = new mapboxgl.Marker(el)
        .setLngLat([151.0335, -33.9124]) // Use the same coordinates as the map center
        .addTo(mapRef.current);
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <>
      <div
        className="w-full h-[220px] bg-amber-400"
        id="map-container"
        ref={mapContainerRef}
      ></div>
    </>
  );
}

export default Map;
