import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

let map;

mapboxgl.accessToken =
  "pk.eyJ1IjoibG1haGEiLCJhIjoiY2xlbzl5ZHRlMDA5dzNwbW91bTRleTRyaSJ9.j5071AHIsXygVppap0NkwQ";

const Home = () => {
  const mapContainer = useRef(null);
  const mobile = window.innerWidth;

  useEffect(() => {
    map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [78.0, 12.0],
      minZoom: 2,
      zoom: mobile < 600 ? 5 : 7,
      type: "Map",
    });

    map.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      "top-left"
    );
    map.on("load", () => {
      map.addSource("karnataka", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [77.5946, 12.9716],
              },
            },
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [76.6394, 12.2958],
              },
            },
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [74.856, 12.9141],
              },
            },
          ],
        },
      });
      map.addLayer({
        id: "park-volcanoes",
        type: "circle",
        source: "karnataka",
        paint: {
          "circle-radius": 45,
          "circle-color": "#B42222",
          "circle-opacity": 0.3,
        },
        filter: ["==", "$type", "Point"],
      });
    });
  });

  return (
    <>
      <div ref={mapContainer} className="map-container" id="map" />
    </>
  );
};

export default Home;
