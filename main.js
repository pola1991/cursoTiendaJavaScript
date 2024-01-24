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


//Tipo base de datos
const productsList = [];

productsList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productsList.push({
  name: 'Compu',
  price: 200,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productsList.push({
  name: 'Guitarra',
  price: 900,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productsList.push({
  name: 'Guitarra',
  price: 900,
  image: 'https://alveal.cl/39978-large_default/guitarra-acustica-ambar-ga3-ibanez.jpg',

});
productsList.push({
  name: 'Guitarra',
  price: 900,
  image: 'https://alveal.cl/39978-large_default/guitarra-acustica-ambar-ga3-ibanez.jpg',

});
productsList.push({
  name: 'Guitarra',
  price: 900,
  image: 'https://alveal.cl/39978-large_default/guitarra-acustica-ambar-ga3-ibanez.jpg',

});

// Creo una estructura de como quiero que se vean los productos para luego se cree esa estructura para cada producto que hay en la base de datos
/*<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>*/


//Función para que se pueda pasar quizas otro array que tengamos diferentes productos y no estar determinado a solo un array en especifico
function renderProducts(array) {
  for (product of array){
    const cardsContainer= document.querySelector('.cards-container')
    
    const productCardDiv = document.createElement('div');
    productCardDiv.classList.add('product-card');
  
    const image = document.createElement('img');
    image.setAttribute('src', product.image);
  
    const productInfo= document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv= document.createElement('div');
    const precioP= document.createElement('p');
    precioP.innerText = '$'+ product.price
  
    const nameP= document.createElement('p');
    nameP.innerText = product.name;
  
    productInfoDiv.appendChild(precioP);
    productInfoDiv.appendChild(nameP);
  
    const figure = document.createElement('figure');
    const imgFigure= document.createElement('img');
    imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg' );
  
    figure.appendChild(imgFigure);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(figure);
    productCardDiv.appendChild(image);
    productCardDiv.appendChild(productInfo);
  
    cardsContainer.appendChild(productCardDiv);
    
  
  }
}

renderProducts(productsList);