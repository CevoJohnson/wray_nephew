import React, { useEffect, useRef } from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import zipUrl from "./coastalcomms 2.zip";
import Shapefile from "./Shapefile";

function Leaflet() {
  const mapRef = useRef();

  useEffect(() => {
    const map = mapRef.current.leafletElement;
    map.setView([17, -77], 2);
  }, []);

  const position = [17, -77];
  return (
    <Map center={position} zoom={13} style={{ height: "100vh" }} ref={mapRef}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Shapefile zipUrl={zipUrl} className="final" />
    </Map>
  );
}

export default Leaflet;
