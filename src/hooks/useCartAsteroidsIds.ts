import { useState } from 'react';

export const useCartAsteroidsIds = (defaultIds: string[] = []) => {
  const [cartAsteroidsIds, setCartAsteroidsIds] =
    useState<string[]>(defaultIds);

  const handlePurchase = (id: string) => {
    const isPurchased = cartAsteroidsIds.includes(id);
    setCartAsteroidsIds(state =>
      isPurchased
        ? state.filter(purchasedId => purchasedId !== id)
        : [...state, id]
    );
  };

  return [cartAsteroidsIds, handlePurchase] as const;
};
