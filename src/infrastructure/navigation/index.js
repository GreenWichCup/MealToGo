import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AccountNavigator } from "./account-navigator";
import { AppNavigator } from "./app-navigator";

import { AuthentificationContext } from "../../services/authentification/authentification-context";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthentificationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
