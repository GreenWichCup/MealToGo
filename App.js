import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { TattooShopContextProvider } from "./src/services/tattooShop/tattoo-shop-context";
import { LocationContextProvider } from "./src/services/location/location-context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites-context";
import { AuthentificationContextProvider } from "./src/services/authentification/authentification-context";

import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthentificationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <TattooShopContextProvider>
                <Navigation />
              </TattooShopContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthentificationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
