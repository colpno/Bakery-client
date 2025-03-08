import { faker } from '@faker-js/faker';

export const fruits = (count: number = 1) => {
  return faker.helpers.multiple(
    () => ({
      name: faker.food.fruit(),
      price: faker.commerce.price(),
      image: faker.image.urlPicsumPhotos(),
    }),
    {
      count,
    }
  );
};

export const meats = (count: number = 1) => {
  return faker.helpers.multiple(
    () => ({
      name: faker.food.meat(),
      price: faker.commerce.price(),
      image: faker.image.urlPicsumPhotos(),
    }),
    {
      count,
    }
  );
};

export const vegetables = (count: number = 1) => {
  return faker.helpers.multiple(
    () => ({
      name: faker.food.vegetable(),
      price: faker.commerce.price(),
      image: faker.image.urlPicsumPhotos(),
    }),
    {
      count,
    }
  );
};
