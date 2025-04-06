export const getCurrencies = async () => {
  const response = await fetch("/api/assets");

  // TODO threat errors
  const data = await response.json();

  const assets = {
    bitcoin: Object.values(data.results.bitcoin),
    currencies: Object.values(data.results.currencies).filter(
      (c) => typeof c === "object"
    ),
    stocks: Object.values(data.results.stocks),
    taxes: data.results.taxes,
  };

  return assets;
};
