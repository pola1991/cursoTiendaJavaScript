const menuEmail= document.querySelector('.navbar-email');
const desktopProfileMenu= document.querySelector('.desktop-menu');
const mobileMenu= document.querySelector('.mobile-menu');
const burguerIcon= document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('#product-detail');
const openProductDetail = document.querySelector('.product-detail')
const closeProductDetail = document.querySelector('.product-detail-close')


menuEmail.addEventListener('click', ToggleDesktopMenu);
burguerIcon.addEventListener('click', ToggleMobileMenu);
shoppingCart.addEventListener('click', ToggleShoppingCart);
closeProductDetail.addEventListener('click', closeProductDetailClick)




/*Funcion Menu escritorio*/
function ToggleDesktopMenu() {
  const carritoClosed = productDetail.classList.contains('inactive')

  desktopProfileMenu.classList.toggle('inactive');
  
  /* Si el carrito esta abierto se cierra */
  if (!carritoClosed ){
    productDetail.classList.add('inactive');
    

  }else{
    openProductDetail.classList.add('inactive')
  }

 
}

/* Funcion menu Mobile*/ 
function ToggleMobileMenu() { 
  const carritoClosed = productDetail.classList.contains('inactive')

  mobileMenu.classList.toggle('inactive');

  if (!carritoClosed){
    productDetail.classList.add('inactive');

  }else{
    openProductDetail.classList.add('inactive')

  }

  
 }

 
/* Funcion carrito de compras */
function ToggleShoppingCart() {
  const menuMobileClosed = mobileMenu.classList.contains('inactive');
  
  productDetail.classList.toggle('inactive');
  
  if (!menuMobileClosed){
    mobileMenu.classList.add('inactive');
   
  }
  if (menuMobileClosed){
    
    openProductDetail.classList.add('inactive');

  }

};




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
  for (const product of array){
    const cardsContainer= document.querySelector('.cards-container')
    
    const productCardDiv = document.createElement('div');
    productCardDiv.classList.add('product-card');

    const image = document.createElement('img');
    image.style.cursor= 'pointer';
    image.setAttribute('src', product.image);

    image.addEventListener('click', function() {
      openDetails(product); // Pasar directamente el producto a openDetails
    });

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
    console.log(product)
  }
}

renderProducts(productsList);

function openDetails(product) {
  selectProduct(product);
  openProductDetail.classList.remove('inactive')

}


//Seleccion de producto ver id
function selectProduct(product) {
  const selectedImage = openProductDetail.querySelector('.selectedImage');
  const productInfo = openProductDetail.querySelector('.product-info');

  // Actualizar la imagen, precio y nombre del producto
  selectedImage.setAttribute('src', product.image);
  productInfo.children[0].textContent = '$' + product.price;
  productInfo.children[1].textContent = product.name;

  // Mostrar los detalles del producto
  openProductDetail.classList.remove('inactive');
}



function closeProductDetailClick() {
  openProductDetail.classList.add('inactive')
}

