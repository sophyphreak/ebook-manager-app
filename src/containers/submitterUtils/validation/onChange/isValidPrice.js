const isValidPrice = (price) => (
  !price || price.match(/^\d{1,}(\.\d{0,2})?$/)
);

export default isValidPrice;