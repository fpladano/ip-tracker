import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useDetailsContext } from './DetailsProvider';

function ChangeMapView(props: any) {
  const map = useMap();
  map.setView(props.cordinates, props.zoom);
  return null;
}

function Map() {
  const context = useDetailsContext();

  if (!context) {
    return <h1>Loading...</h1>;
  }

  return (
    <Box width="100%" height="70vh">
      <MapContainer
        center={[
          context?.detailsData.location.lat,
          context?.detailsData.location.lng,
        ]}
        zoom={13}
        scrollWheelZoom={false}
        zoomControl={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeMapView
          cordinates={{
            lat: context?.detailsData.location.lat,
            lng: context?.detailsData.location.lng,
          }}
        />
        <Marker
          position={[
            context?.detailsData.location.lat,
            context?.detailsData.location.lng,
          ]}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}

export default Map;
