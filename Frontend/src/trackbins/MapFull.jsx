import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import LocationIcon from "../assets/logo_bin.png";

const MapFull = () => {
  const [currentLocation, setCurrentLocation] = useState([
    26.7929645, 87.2897815,
  ]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);
  const bins = [
    { id: 1, name: "NeuroBin 1", lat: 26.7952611, lng: 87.2891011 },
    { id: 2, name: "NeuroBin 2", lat: 26.794893, lng: 87.294081 },
    { id: 3, name: "NeuroBin 3", lat: 26.792109, lng: 87.298796 },
    { id: 4, name: "NeuroBin 4", lat: 26.792436, lng: 87.293279 },
    { id: 5, name: "NeuroBin 5", lat: 26.7989239, lng: 87.29554 },
    { id: 6, name: "NeuroBin 6", lat: 26.789972, lng: 87.290778 },
    { id: 7, name: "NeuroBin 7", lat: 26.801238, lng: 87.289376 },
    // Add more bins as needed
  ];

  const customMarkerIcon = new L.Icon({
    iconUrl: LocationIcon,
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Point of the icon that corresponds to the marker's location
    popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
  });

  return (
    <div id="map" className="rounded-md">
      <MapContainer
        center={currentLocation}
        zoom={15}
        style={{ height: "500px", width: "100%", borderRadius: "6px" }}
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          className="rounded-md"
        />
        <Marker position={currentLocation}>
          <Popup>
            This is your current location.&nbsp;
            <span
              onClick={() => {
                location.reload();
              }}
              className="cursor-pointer text-primary"
            >
              Update
            </span>
          </Popup>
        </Marker>
        {bins.map((bin) => (
          <Marker
            key={bin.id}
            position={[bin.lat, bin.lng]}
            icon={customMarkerIcon}
          >
            <Popup>{bin.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapFull;
