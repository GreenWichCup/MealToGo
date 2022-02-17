import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const tattooShopRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const tattooShopTransform = ({ results = [] }) => {
  const mappedResults = results.map((tattooShop) => {
    tattooShop.photos = tattooShop.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...tattooShop,
      isOpenNow: tattooShop.opening_hours && tattooShop.opening_hours.open_now,
      isClosedTemporarily: tattooShop.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
