import { shopItemSchema } from "./schema";
import { z } from "zod";

export const getProducts = async () => {
  const res = await fetch("https://api.noroff.dev/api/v1/online-shop", {
    next: {
      revalidate: 3600,
    },
  });
  return z.array(shopItemSchema).parse(await res.json());
};
