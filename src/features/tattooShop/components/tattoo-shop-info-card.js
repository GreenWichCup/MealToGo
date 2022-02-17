import React from "react";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer-component";
import { Text } from "../../../components/typography/text-component";
import starsRating from "../../../../assets/stars-rating";
import Images from "../../../../assets/localImage";
import {
  Info,
  TattooShopCard,
  TattooShopCardCover,
  IconFellows,
  Section,
  SectionEnd,
  Rating,
} from "./tattoo-shop-info-card-styles";

const TattooShopInfoCard = ({ tattooShop = {} }) => {
  const {
    name = "Some Tattoo Shop",
    icon = "../../../../assets/ic_fellow_nbg.png",
    isOpenNow = true,
    isClosedTemporarily = false,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    felows = 320,
    rating,
    isFavorite = true,
  } = tattooShop;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <TattooShopCard elevation={5}>
      <TattooShopCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={starsRating} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            <Spacer position="right" size="medium">
              <IconFellows source={Images.iconFellow} />
            </Spacer>
            <Text variant="error">{felows}</Text>
          </SectionEnd>
        </Section>
        <Text variant="body">{address}</Text>
      </Info>
    </TattooShopCard>
  );
};

export default TattooShopInfoCard;
