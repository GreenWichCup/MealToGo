import React from "react";
import { Text } from "react-native";
import { Ionicons, FontAwesome5, Fontisto } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TattooShopNavigator } from "./tattoo-shop-navigator";

import { SafeArea } from "../../components/utility/safe-area-component";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Stream: "photograph",
  Chat: "chatbubble-ellipses-outline",
  Publish: "add-circle-outline",
  Map: "globe-americas",
  Profile: "user",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => {
      if (route.name === "Stream") {
        return <Fontisto name={iconName} size={size} color={color} />;
      } else if (route.name === "Chat" || route.name === "Publish") {
        return <Ionicons name={iconName} size={size} color={color} />;
      } else if (route.name === "Profile" || route.name === "Map") {
        return <FontAwesome5 name={iconName} size={size} color={color} />;
      }
    },
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

const Profile = () => (
  <SafeArea>
    <Text>Profile</Text>
  </SafeArea>
);
const Chat = () => (
  <SafeArea>
    <Text>Chat</Text>
  </SafeArea>
);
const Publish = () => (
  <SafeArea>
    <Text>Publish</Text>
  </SafeArea>
);

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Stream"
      screenOptions={createScreenOptions}
    >
      <Tab.Screen name="Stream" component={TattooShopNavigator} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Publish" component={Publish} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
