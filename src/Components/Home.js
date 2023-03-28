import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DisplayCards from "./DisplayCards";
import UserInfo from "./UserInfo";
import mapboxgl from "mapbox-gl";
import CountrySearch from "./CountrySearch";
import "./scss/home.scss";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { selectRegionInfo } from "../Selectors/RegionInfoSelector";

let map;

mapboxgl.accessToken =
  "pk.eyJ1IjoibG1haGEiLCJhIjoiY2xlbzl5ZHRlMDA5dzNwbW91bTRleTRyaSJ9.j5071AHIsXygVppap0NkwQ";

const Home = () => {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(76.89);
  const [lat, setLat] = useState(23.45);
  const [zoom, setZoom] = useState(9);
  const regionInfo = useSelector(selectRegionInfo);

  useEffect(() => {
    map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [77.0, 20.0],
      minZoom: 2,
      zoom: 3,
      type: "Map",
      interactive: false,
    });

    map.addControl(
      new mapboxgl.NavigationControl({ showCompass: false }),
      "top-left"
    );
  });

  useEffect(() => {
    if (regionInfo.length) {
      const location = regionInfo[0].capitalInfo.latlng;
      const popup = new mapboxgl.Popup().setHTML(
        `<h4> Welcome to ${regionInfo[0].name.common}</h4>`
      );
      const center = [location[1], location[0]];
      map.flyTo({
        center,
      });

      const el = document.createElement("div");
      el.id = "marker";
      const marker = new mapboxgl.Marker({ color: "red" })
        .setLngLat([location[1], location[0]])
        .setPopup(popup)
        .addTo(map);
      marker.togglePopup();
    }
  }, [regionInfo]);

  return (
    <>
      <div className="homePageConatiner">
        <div ref={mapContainer} className="map-container" id="map" />
        <div className="flyerContainer">
          <CountrySearch />
          <UserInfo className="loginInfo" />
        </div>
        {regionInfo.length && <DisplayCards regionInfo={regionInfo} />}
      </div>
    </>
  );
};

export default Home;
