export const formatPriceIntl = (
  price: number,
  locale = "en-US",
  currency = "USD",
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};
