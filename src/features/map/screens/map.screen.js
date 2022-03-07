import React, { useState, useEffect, useContext } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";

import { TattooShopContext } from "../../../services/tattooShop/tattoo-shop-context";
import { LocationContext } from "../../../services/location/location-context";

import { Search } from "../components/search.component";
import { MapCallOut } from "../components/map-call-out.component";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { tattooShop = [] } = useContext(TattooShopContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {tattooShop.map((item) => {
          return (
            <MapView.Marker
              key={item.name}
              title={item.name}
              coordinate={{
                latitude: item.geometry.location.lat,
                longitude: item.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("TattooShopDetail", { tattooShop: item })
                }
              >
                <MapCallOut tattooShop={item} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
