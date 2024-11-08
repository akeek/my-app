import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { z } from "zod";

import AddToCartButton from "./addToCartButton";
import ClearAllItems from "./clearAllItems";
import Link from "next/link";

import { shopItemSchema } from "@/lib/schema";
import { ItemCard } from "@/components/itemCard";
import { getProducts } from "@/lib/data";


export default async function Home() {
  const items = await getProducts();
  
  return (
    <>
    <div className="bg-gradient-to-tl from-sky-50 to-sky-100 pt-6 text-center">
      <h1 className="text-5xl font-semibold">Welcome to our online store</h1>
      <p className="py-4 container mx-auto">Welcome to our e-commerce site! We are thrilled to have you here and we hope that your online shopping experience with us will be nothing short of exceptional. Our platform offers an extensive range of products, from the latest fashion trends to high-tech gadgets, all at competitive prices.</p>
    </div>

<div className="text-center py-10 mx-auto w-72">
<h2 className="text-3xl font-semibold pb-5">All products</h2>

<ClearAllItems />

<Input
placeholder="Search our products"
className="border-solid"
 />
 </div>
  
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
  {items.map((i) => (
    <ItemCard key={i.id} item={i} />
  ))}

</div>

</>
  );
}