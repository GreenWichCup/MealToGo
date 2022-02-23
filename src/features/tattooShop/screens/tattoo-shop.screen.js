import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer-component";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area-component";
import Search from "../components/search-component";
import TattooShopInfoCard from "../components/tattoo-shop-info-card";
import { FavouriteBar } from "../../../components/favourites/favourite-bar-component";

import { TattooShopContext } from "../../../services/tattooShop/tattoo-shop-context";
import { FavouritesContext } from "../../../services/favourites/favourites-context";

const TattooShopList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const TattooShopScreen = ({ navigation }) => {
  const { tattooShop, isLoading } = useContext(TattooShopContext);
  const { favourites } = useContext(FavouritesContext);
  const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
  `;

  const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
  `;

  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.red300} />
        </LoadingContainer>
      )}

      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => {
          setIsToggled(!isToggled);
        }}
      />
      {isToggled && (
        <FavouriteBar
          onNavigate={navigation.navigate}
          favourites={favourites}
        />
      )}

      <TattooShopList
        data={tattooShop}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TattooShopDetail", { tattooShop: item })
              }
            >
              <Spacer position="bottom" size="large">
                <TattooShopInfoCard tattooShop={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
