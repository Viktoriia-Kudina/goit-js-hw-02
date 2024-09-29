function getShippingCost(country) {
  let info;
  switch (country) {
    case `China`:
      info = `Shipping to China will cost 100 credits`;
      break;
    case `Chile`:
      info = `Shipping to Chile will cost 250 credits`;
      break;
    case `Australia`:
      info = `Shipping to Australia will cost 170 credits`;
      break;
    case `Jamaica`:
      info = `Shipping to Jamaica will cost 120 credits`;
      break;
    default:
      info = `Sorry, there is no delivery to your country.`;
  }
  return info;
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
