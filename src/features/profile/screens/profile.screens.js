import React, { useContext, useCallback, useState } from "react";
import styled from "styled-components";
import { List, Avatar } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthentificationContext } from "../../../services/authentification/authentification-context";

const ProfileItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;
export const ProfileScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthentificationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    try {
      const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
      setPhoto(photoUri);
    } catch (error) {
      console.log("AsyncStorage error:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <ProfileItem
          title="Favourites"
          description="View your TattooShop"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <ProfileItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
