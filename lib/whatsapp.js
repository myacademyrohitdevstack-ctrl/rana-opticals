export function whatsappLink({ phone, productName, productUrl } = {}) {
  const text = [
    productName ? `Hi, I'm interested in ${productName}.` : "Hi, I'd like some help choosing frames.",
    "Could you share the price and availability?",
    productUrl ? `Product: ${productUrl}` : "",
  ].filter(Boolean).join("\n");
  return `https://wa.me/${phone || ""}?text=${encodeURIComponent(text)}`;
}
