import React from "react";
import { MapContainer as LeafletMap, TileLayer, useMap } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

const Map = ({ countries, casesType, center, zoom }) => {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom} className="markercluster-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <SetViewOnClick coords={center} />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
};

export default Map;
