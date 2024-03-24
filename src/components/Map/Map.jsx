import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import GeoCoderMarker from '../GeoCoderMarker/GeoCoderMarker';

const Map = ({ address, city, country }) => {
  // Get the coordinates of the specified address using a geocoding service
  // For example, you can use the OpenStreetMap Nominatim API
  const getAddressCoordinates = async () => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address},${city},${country}`);
      const data = await response.json();
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        return [parseFloat(lat), parseFloat(lon)];
      }
    } catch (error) {
      console.error('Error fetching address coordinates:', error);
    }
    return [0, 0]; // Return default coordinates if fetching fails
  };

  const setMapCenter = async () => {
    const coordinates = await getAddressCoordinates();
    return coordinates;
  };

  return (
    <MapContainer
      center={[53.35, 18.8]} // Default center coordinates
      zoom={12} // Default zoom level
      scrollWheelZoom={false}
      style={{
        height: '40vh',
        width: '100%',
        marginTop: '20px',
        zIndex: 0,
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoCoderMarker address={`${address} ${city} ${country}`} />
    </MapContainer>
  );
};

export default Map;
