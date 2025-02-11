import { z } from "zod";
import { getProducts } from "@/lib/data";
import { SingleItemCard } from "@/components/singleItemCard";

const ItemPage = async ({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) => {
  const itemId = z
    .string()
    .min(32)
    .max(50)
    .parse((await params).itemId);

  const items = await getProducts();

  const item = items.find((i) => i.id === itemId);

  if (!item) {
    throw new Error("Ugyldig id");
  }

  return (
    <>
      <div className="container mx-auto">
        <SingleItemCard item={item} detailsLink={false} />
      </div>
    </>
  );
};

export default ItemPage;
