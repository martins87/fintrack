import { create } from "zustand";
import { BitcoinMarket, Currency, Index, Tax } from "../types/assets";

type AssetsData = {
  currencies: Currency[];
  indexes: Index[];
  bitcoin: BitcoinMarket[];
  taxes: Tax[];
};

type AssetsState = {
  currencies: Currency[];
  indexes: Index[];
  bitcoin: BitcoinMarket[];
  taxes: Tax[];
  setAssets: (assets: AssetsData) => void;
  getAssetById: (
    id: string
  ) => Currency | Index | BitcoinMarket | Tax | undefined;
};

export const useAssetsStore = create<AssetsState>((set, get) => ({
  currencies: [],
  indexes: [],
  bitcoin: [],
  taxes: [],
  setAssets: (assets) => set(assets),
  getAssetById: (id: string) => {
    const { currencies, indexes, bitcoin, taxes } = get();
    return (
      currencies.find((c) => c.id === id) ||
      indexes.find((s) => s.id === id) ||
      bitcoin.find((b) => b.id === id) ||
      taxes.find((t) => t.date === id)
    );
  },
}));
