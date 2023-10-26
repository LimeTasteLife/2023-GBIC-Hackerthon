export default function priceToString(price: any) {
  if (price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}