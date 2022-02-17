import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location-service";


export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("san francisco");

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(searchKeyword)
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    onSearch(keyword);
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: () => null, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
