function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = parseInt(productInput.value);
  if (isIncreasing) {
    productNumber += 1;
  } else if (productNumber > 0) {
    productNumber -= 1;
  }
  productInput.value = productNumber;
  //   update total
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
  calculateTotal();
}
function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * phonePrice;
  const caseTotal = getInputValue("case") * casePrice;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;

  //   update on html
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = totalPrice;
}
// phone
const phonePrice = 1219;
const casePrice = 59;
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", phonePrice, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", phonePrice, false);
});
// case
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", casePrice, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", casePrice, false);
});
