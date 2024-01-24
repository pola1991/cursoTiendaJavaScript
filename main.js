const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const mobileMenu= document.querySelector('.mobile-menu');
const burguerIcon= document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');


menuEmail.addEventListener('click', ToggleDesktopMenu);
burguerIcon.addEventListener('click', ToggleMobileMenu);
shoppingCart.addEventListener('click', ToggleShoppingCart);


/*Funcion Menu escritorio*/
function ToggleDesktopMenu() {
  const carritoClosed = productDetail.classList.contains('inactive')

  desktopMenu.classList.toggle('inactive');
  if (!carritoClosed){
    productDetail.classList.add('inactive');

  }
}

/* Funcion menu Mobile*/ 
function ToggleMobileMenu() { 
  const carritoClosed = productDetail.classList.contains('inactive')

  mobileMenu.classList.toggle('inactive');

  if (!carritoClosed){
    productDetail.classList.add('inactive');

  }

  
 }

/* Funcion carrito de compras */
function ToggleShoppingCart() {
  const menuMobileClosed = mobileMenu.classList.contains('inactive');
  
  productDetail.classList.toggle('inactive');
  
  if (!menuMobileClosed){
    mobileMenu.classList.add('inactive')
  }

}


