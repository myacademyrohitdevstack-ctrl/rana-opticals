export function formatPrice(price) {
  if (price === null || price === undefined || price === "") {
    return "Price on enquiry";
  }
  const num = typeof price === "number" ? price : Number(price);
  if (isNaN(num)) {
    return "Price on enquiry";
  }
  return `₹ ${num.toLocaleString("en-IN")}`;
}
