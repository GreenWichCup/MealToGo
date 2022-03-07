import React, { useEffect } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { ProfileScreen } from "../../features/profile/screens/profile.screens";
import { FavouritesScreen } from "../../features/profile/screens/favourites.screen";
import { CameraScreen } from "../../features/profile/screens/camera.screen";

const ProfileStack = createStackNavigator();

export const ProfileNavigator = ({ route, navigation }) => {
  return (
    <ProfileStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="Favourites" component={FavouritesScreen} />
      <ProfileStack.Screen name="Camera" component={CameraScreen} />
    </ProfileStack.Navigator>
  );
};
