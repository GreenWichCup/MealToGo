import React, { useState, createContext, useEffect, useMemo } from "react";

import { tattooShopRequest, tattooShopTransform } from "./tattoo-shop-service";

export const TattooShopContext = createContext();

export const TattooShopContextProvider = ({ children }) => {
  const [tattooShop, setTattooShop] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveTattooShop = () => {
    setIsLoading(true);
    setTimeout(() => {
      tattooShopRequest()
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
    retrieveTattooShop();
  }, []);

  return (
    <TattooShopContext.Provider value={{ tattooShop, isLoading, error }}>
      {children}
    </TattooShopContext.Provider>
  );
};
