import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import AddToCartButton from "@/app/addToCartButton";
import { type ProductInfo } from "@/lib/schema";

export const SingleItemCard = ({
  item: {
    id,
    title,
    imageUrl,
    price,
    discountedPrice,
    description,
    rating,
    reviews,
  },
  detailsLink = true,
}: {
  item: ProductInfo;
  detailsLink?: boolean;
}) => {
  const isDiscounted = price !== discountedPrice;

  return (
    <div className="w-1/3 py-6 mx-auto">
      <Card>
        <CardTitle>
          <div className="container mx-auto p-4">
            <h2 className="text-4xl pb-3">{title}</h2>
            {rating ? (
              <p className="text-slate-500 font-normal">
                Average rating: {rating}
              </p>
            ) : (
              <p className="text-slate-500 font-light">No ratings yet</p>
            )}
            <div className="h-96 relative">
              <Image
                src={imageUrl}
                fill
                style={{ objectFit: "cover" }}
                alt={title}
                className="p-5"
              />
            </div>
          </div>
        </CardTitle>
        <CardContent>
          <p className="pb-3 font-semibold">{description}</p>
          <div className="pb-5">
            {isDiscounted ? (
              <p className=" text-lg line-through text-red-500">{price},-</p>
            ) : null}
            <div className="text-lg text-green-700">
              <p>On sale for {discountedPrice},-</p>
            </div>
            <div>
              <p>
                Save: {Math.round(price - discountedPrice).toFixed(2)}
                ,-
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl">Reviews:</h2>
            {reviews && reviews.length > 0 ? (
              <div>
                {reviews.map((review) => {
                  return (
                    <div>
                      <p>Name: {review.username}</p>
                      <p>Rating: {review.rating}</p>
                      <p>Description: {review.description}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-slate-500 font-light">No reviews yet</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <div className="space-x-2">
            {detailsLink && (
              <Button variant="outline" className="bg-gray-300" asChild>
                <Link href={`/item/${id}`}>View Item</Link>
              </Button>
            )}
            <AddToCartButton itemId={id} />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
