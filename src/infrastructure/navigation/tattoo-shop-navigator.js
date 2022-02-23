import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { TattooShopScreen } from "../../features/tattooShop/screens/tattoo-shop.screen";
import { TattooShopDetailScreen } from "../../features/tattooShop/screens/tattoo-shop-detail.screen";

const TattooShopStack = createStackNavigator();

export const TattooShopNavigator = () => {
  return (
    <TattooShopStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <TattooShopStack.Screen
        name="TattooShopList"
        component={TattooShopScreen}
      />
      <TattooShopStack.Screen
        name="TattooShopDetail"
        component={TattooShopDetailScreen}
      />
    </TattooShopStack.Navigator>
  );
};
