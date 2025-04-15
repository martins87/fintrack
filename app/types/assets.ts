export type CurrencyValue = string | number | null;

export type Currency = {
  id: string;
  name: string;
  buy: number;
  sell: number | null;
  variation: number;
};

export type Index = {
  id: string;
  name: string;
  location: string;
  points: number;
  variation: number;
};

export type BitcoinMarket = {
  id: string;
  name: string;
  format: string[];
  last: number;
  buy?: number;
  sell?: number;
  variation: number;
};

export type Tax = {
  date: string;
  cdi: number;
  selic: number;
  daily_factor: number;
  selic_daily: number;
  cdi_daily: number;
};

export type Assets = {
  currencies: Currency[];
  stocks: Index[];
  bitcoin: BitcoinMarket[];
  taxes: Tax[];
};
