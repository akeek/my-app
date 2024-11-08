"use client"
import { Button } from "@/components/ui/button"
import { useBasket } from "@/stores/basket"


const ClearAllItems = () => {
    const clearAllItems = useBasket((state) => state.clearAllItems);

    const onClick = () => {
        clearAllItems();
    }

    return (
        <Button variant="destructive" onClick={onClick} className="mb-4">Clear all items</Button>
    )
}

export default ClearAllItems;