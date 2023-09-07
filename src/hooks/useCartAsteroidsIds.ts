import { useState } from 'react';

export const useCartAsteroidsIds = (defaultIds: number[] = []) => {
  const [cartAsteroidsIds, setCartAsteroidsIds] =
    useState<number[]>(defaultIds);

  const handlePurchase = (id: number) => {
    const isPurchased = cartAsteroidsIds.includes(id);
    setCartAsteroidsIds(state =>
      isPurchased
        ? state.filter(purchasedId => purchasedId !== id)
        : [...state, id]
    );
  };

  return [cartAsteroidsIds, handlePurchase] as const;
};
