import products from "./data.mjs";

export const findMax = (products) => {
  return products.find(
    (e) => e.price === Math.max(...products.map((e) => e.price))
  );
};
export const findMinWomen = (products) => {
  return products.find(
    (e) =>
      e.price ===
      Math.min(
        ...products.filter((e) => e.type === "Women").map((e) => e.price)
      )
  );
};
