import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Spacer } from "../spacer/spacer-component";
import { CompactTattooShopInfo } from "../tattooShop/compact-tattooShop-info";
import { Text } from "../typography/text-component";

const FavouriteWrapper = styled.View`
  padding: 10px;
`;

export const FavouriteBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouriteWrapper>
      <Spacer variant="left.large">
        <Text variant="caption"> Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((tattooShop) => {
          const key = tattooShop.name.split(" ").join("");
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate("TattooShopDetail", { tattooShop })}
              >
                <CompactTattooShopInfo tattooShop={tattooShop} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouriteWrapper>
  );
};
