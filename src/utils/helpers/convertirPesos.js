export const convertirPesos = (numero) => {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "USD",
  }).format(n);
};

{
  /* <h1>{convertirPesos(price)}</h1> */
}
