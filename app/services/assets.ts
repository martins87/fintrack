import { BitcoinMarket, Currency, Index, Tax } from "../types/assets";

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

  const indexes: Index[] = Object.entries(data.stocks).map(([id, index]) => ({
    id,
    name: (index as Index).name,
    location: (index as Index).location,
    points: (index as Index).points,
    variation: (index as Index).variation,
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
    indexes,
    bitcoin,
    taxes,
  };

  return assets;
};

export const getStocks = async () => {
  const response = await fetch("/api/stocks");

  // TODO threat errors
  const data = await response.json();

  return data.results;
};

// export const getStock = async (ticker: string): Promise<Record<string, number>> => {
export const getStock = async (ticker: string) => {
  const response = await fetch(`/api/stocks/${ticker}`);
  const data = await response.json();

  // Get all available dates and sort them in descending order
  const sortedDates = Object.keys(data).sort((a, b) => (a > b ? -1 : 1));

  // Get the latest date (most recent working day)
  const latestDate = sortedDates[0];

  // Get the data for that date and ticker symbol
  const timeSeries = data[latestDate][ticker];

  // Transform into an array of { [time]: price } objects
  const result = Object.entries(timeSeries).map(([time, price]) => ({
    [time]: price,
  }));

  return result;
};
