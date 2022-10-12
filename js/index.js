// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');

  const quantity = product.querySelector('.quantity input');

  const priceValue = Number(price.innerText);

  const quantityValue = +quantity.value;

  const subtotalValue = priceValue * quantityValue;

  const sub = product.querySelector('.subtotal span');

  sub.innerText = subtotalValue;

  return subtotalValue;
}

function calculateAll() {
 // ITERATION 2
 const allProducts = document.querySelectorAll('.product');

 let subTotal = 0;

 for (let product of allProducts) {

   subTotal += updateSubtotal(product);
 }

 let totalValue = document.querySelector('#total-value span');

 totalValue.innerText = subTotal;

 return subTotal;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
 
  let parent = target.parentNode;

  parent.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  window.addEventListener('click', () => {
    const removeBtn = document.getElementsByClassName('action');
    for (let i = 0; i < removeBtn.length; i += 1) {
      removeBtn[i].addEventListener('click', removeProduct);
    }
  
  });
});

