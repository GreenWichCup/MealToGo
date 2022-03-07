import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Favourite } from "../../../components/favourites/favourite.component";
import starsRating from "../../../../assets/stars-rating";
import Images from "../../../../assets/localImage";
import {
  Info,
  TattooShopCard,
  TattooShopCardCover,
  Icon,
  Section,
  SectionEnd,
  Rating,
} from "./tattoo-shop-info-card-styles";

const TattooShopInfoCard = ({ tattooShop = {} }) => {
  const {
    name = "Some Tattoo Shop",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    felows = 320,
    rating = 3,
    placeId,
  } = tattooShop;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <TattooShopCard elevation={5}>
      <Favourite tattooShop={tattooShop} />
      <TattooShopCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={starsRating}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            <Spacer position="right" size="medium">
              <Icon source={{ uri: icon }} />
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
