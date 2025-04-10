import { create } from "zustand";
import { BitcoinMarket, Currency, Stock, Tax } from "../types/assets";

type AssetsData = {
  currencies: Currency[];
  stocks: Stock[];
  bitcoin: BitcoinMarket[];
  taxes: Tax[];
};

type AssetsState = {
  currencies: Currency[];
  stocks: Stock[];
  bitcoin: BitcoinMarket[];
  taxes: Tax[];
  setAssets: (assets: AssetsData) => void;
  getAssetById: (
    id: string
  ) => Currency | Stock | BitcoinMarket | Tax | undefined;
};

export const useAssetsStore = create<AssetsState>((set, get) => ({
  currencies: [],
  stocks: [],
  bitcoin: [],
  taxes: [],
  setAssets: (assets) => set(assets),
  getAssetById: (id: string) => {
    const { currencies, stocks, bitcoin, taxes } = get();
    return (
      currencies.find((c) => c.id === id) ||
      stocks.find((s) => s.id === id) ||
      bitcoin.find((b) => b.id === id) ||
      taxes.find((t) => t.date === id)
    );
  },
}));
