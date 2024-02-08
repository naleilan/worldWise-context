// import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import City from "./City";

function Map() {
  // const navigate = useNavigate();
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  // const [searchParam, setSearchParams] = useSearchParams();

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {cities.map((city) => ( */}
        <Marker position={mapPosition}>
          <Popup>
            <span>city</span>
          </Popup>
        </Marker>
        {/* ))} */}
      </MapContainer>
    </div>
  );
}

export default Map;
