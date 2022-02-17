import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import StreamScreen from "./src/features/tattooShop/screens/stream.screen";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utility/safe-area-component";
import { Ionicons, FontAwesome5, Fontisto } from "@expo/vector-icons";
import { TattooShopContextProvider } from "./src/services/tattooShop/tattoo-shop-context";
import { LocationContextProvider } from "./src/services/location/location-context";

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
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

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
        <LocationContextProvider>
          <TattooShopContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={createScreenOptions}
                tabBarOptions={{
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "gray",
                }}
              >
                <Tab.Screen name="Stream" component={StreamScreen} />
                <Tab.Screen name="Chat" component={Chat} />
                <Tab.Screen name="Publish" component={Publish} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Profile" component={Profile} />
              </Tab.Navigator>
            </NavigationContainer>
          </TattooShopContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
