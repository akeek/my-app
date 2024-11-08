import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type StoreItem = {
    id: string;
}

type Store = {
  count: number;
  items: StoreItem[];
  
  addItem: (id:string) => void;
  removeItem: (id:string) => void;
  clearAllItems: () => void;
}

export const useBasket = create<Store>()(
    persist(
        (set) => ({
            count: 0,
            items: [],

            addItem: (id:string) => set((state) => ({
                count: state.count + 1,
                items: [
                    ...state.items,
                    {id}
                ]
            })),

            removeItem: (id:string) => set((state) => ({
                count: state.count -1,
                items: state.items.filter((i) => i.id !== id)
            })),

            clearAllItems: () => set(()=>({
                count: 0,
                items:[]
            }))
        }),
        {
           name:'basket-store'
        }
    )
);