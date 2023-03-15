
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup, } from "react-leaflet";
import { useEffect, useState } from "react";

const Map = ({ position }) => {

    const [map, setMap] = useState(null)

    useEffect(() => {
        if (!map) {
            return
        }
        map.setView(position, 13)
    }, [position, map])

    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            ref={setMap}
            style={{ minHeight: "calc(70vh)", minWidth: "50vw", flexShrink: '0', zIndex: '0' }} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}
                icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 0] })}>
                <Popup>
                    • Here • <br />  how I wish you were here♫.
                </Popup>
            </Marker>
        </MapContainer>
    );
};


export default Map