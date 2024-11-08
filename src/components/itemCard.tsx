import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import AddToCartButton from "@/app/addToCartButton";
import { type ProductInfo } from "@/lib/schema";

export const ItemCard = ({item:{id, title,imageUrl, price, discountedPrice}, detailsLink = true}:{item:ProductInfo, detailsLink?: boolean}) => {

    const isDiscounted = price !== discountedPrice;
    const discountPercent = Math.round((price - discountedPrice) / price * 100)
  
    return (
      <Card>
        <CardTitle>
          <div className="h-96 relative">
            <Image src={imageUrl} fill  style={{objectFit: "cover"}} alt={title} className="rounded-t-xl" />
          {isDiscounted ? <div className="w-36 bottom-0 left-0 bg-red-500 text-white absolute p-2">Take {discountPercent}% off</div> : null}
          </div>
        </CardTitle>
        <CardContent className="h-32">
        <div>
          
  
          <h2 className="text-xl py-4">{title}</h2>
  
          {isDiscounted ? <div className=" text-lg line-through text-red-500">{price}</div> : null}
          <div className="text-lg">{discountedPrice}</div>
  
        </div>
        </CardContent>
        <CardFooter>
    <div className="space-x-2">
          {detailsLink  && (
            <Button variant="outline" className="bg-gray-300" asChild>
            <Link href={`/item/${id}`}>View Item</Link>
            </Button>
          )}
          <AddToCartButton itemId={id} />
          </div>
        </CardFooter>
      </Card>
    )
  }