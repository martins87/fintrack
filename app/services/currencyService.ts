export const getCurrencies = async () => {
  const response = await fetch("/api/assets");
  const data = await response.json();
  return data.results;
};
