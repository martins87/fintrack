import { BitcoinMarket, Currency, Stock, Tax } from "../types/assets";

export const getAssets = async () => {
  const response = await fetch("/api/assets");

  // TODO threat errors
  const data = await response.json();

  const currencies: Currency[] = Object.entries(data.currencies)
    .filter(([key]) => key !== "source")
    .map(([id, currency]) => ({
      id,
      name: (currency as Currency).name,
      buy: (currency as Currency).buy,
      sell: (currency as Currency).sell,
      variation: (currency as Currency).variation,
    }));

  const stocks: Stock[] = Object.entries(data.stocks).map(([id, stock]) => ({
    id,
    name: (stock as Stock).name,
    location: (stock as Stock).location,
    points: (stock as Stock).points,
    variation: (stock as Stock).variation,
  }));

  const bitcoin: BitcoinMarket[] = Object.entries(data.bitcoin).map(
    ([id, market]) => ({
      id,
      name: (market as BitcoinMarket).name,
      format: (market as BitcoinMarket).format,
      last: (market as BitcoinMarket).last,
      buy: (market as BitcoinMarket).buy,
      sell: (market as BitcoinMarket).sell,
      variation: (market as BitcoinMarket).variation,
    })
  );

  const taxes: Tax[] = data.taxes;

  const assets = {
    currencies,
    stocks,
    bitcoin,
    taxes,
  };

  return assets;
};
