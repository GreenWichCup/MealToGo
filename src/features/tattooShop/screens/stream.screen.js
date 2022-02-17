import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import TattooShopInfoCard from "../components/tattoo-shop-info-card";
import { Spacer } from "../../../components/spacer/spacer-component";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area-component";
import { TattooShopContext } from "../../../services/tattooShop/tattoo-shop-context";
import { ActivityIndicator, Colors } from "react-native-paper";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const TattooShopList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

const StreamScreen = () => {
  const { tattooShop, isLoading, error } = useContext(TattooShopContext);
  const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
  `;
  const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
  `;
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.red300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <TattooShopList
        data={tattooShop}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <TattooShopInfoCard tattooShop={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default StreamScreen;
