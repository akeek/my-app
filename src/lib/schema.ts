import {z} from "zod";

export const shopItemSchema = z.object({
    id: z.string().min(1),
    title: z.string(),
    price: z.number().positive(),
    discountedPrice: z.number().positive(),
    imageUrl: z.string().url()
  });
  
  export type ProductInfo = z.infer<typeof shopItemSchema>