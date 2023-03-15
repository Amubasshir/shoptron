export const currencyFormatter = (price) => {
  if (!price) return null;
  return price.toLocaleString('en-BD', { style: 'currency', currency: 'USD' });
};
