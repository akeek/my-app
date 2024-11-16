import { z } from "zod";

const reviewSchema = z.object({
  id: z.string().min(1),
  username: z.string().min(1),
  rating: z.number().min(0).max(5),
  description: z.string(),
});

export const shopItemSchema = z.object({
  id: z.string().min(1),
  title: z.string(),
  price: z.number().positive(),
  discountedPrice: z.number().positive(),
  imageUrl: z.string().url(),
  description: z.string().min(1),
  rating: z.number(),
  reviews: z.array(reviewSchema),
});

export type ProductInfo = z.infer<typeof shopItemSchema>;
