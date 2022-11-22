import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const Map = ({ lat }) => {
    const [position, setPosition] = useState(lat);

    useEffect(() => {
        setPosition(lat)
        console.log(lat, "entre?")
    }, lat)
    
    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            style={{ minHeight: "calc(70vh)", minWidth: "50vw", flexShrink: '0', zIndex: '0' }}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    • Here • <br />  how I wish you were here♫.
                </Popup>
            </Marker>
        </MapContainer>
    );
};


export default Map