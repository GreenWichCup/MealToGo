import React, { useState, useEffect, useContext } from "react";
import { LocationContext } from "../location/location-context";

import { tattooShopRequest, tattooShopTransform } from "./tattoo-shop-service";

export const TattooShopContext = React.createContext();

export const TattooShopContextProvider = ({ children }) => {
  const [tattooShop, setTattooShop] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);
  const retrieveTattooShop = (loc) => {
    setIsLoading(true);
    setTattooShop([]);
    setTimeout(() => {
      tattooShopRequest(loc)
        .then(tattooShopTransform)
        .then((results) => {
          setIsLoading(false);
          setTattooShop(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveTattooShop(locationString);
    }
  }, [location]);

  return (
    <TattooShopContext.Provider value={{ tattooShop, isLoading, error }}>
      {children}
    </TattooShopContext.Provider>
  );
};
