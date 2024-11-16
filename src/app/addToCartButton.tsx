"use client";
import { Button } from "@/components/ui/button";
import { useBasket } from "@/stores/basket";

const AddToCartButton = ({ itemId }: { itemId: string }) => {
  const addItem = useBasket((state) => state.addItem);

  const onClick = () => {
    addItem(itemId);
  };

  return (
    <Button variant="outline" onClick={onClick}>
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
