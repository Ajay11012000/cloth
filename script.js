const products = [
  {
    name: "Combo of oversized tshirt navy blue and dark grey",
    image: "https://images.meesho.com/images/products/576141807/6htbd_512.avif?width=512",
    price: 450
  },
  {
    name: "Down shoulder tshirt black and white pack of 2",
    image: "https://images.meesho.com/images/products/575984114/mrpcf_512.avif?width=512",
    price: 544
  },
  {
    name: "Downshoulder tshirt white",
    image: "https://images.meesho.com/images/products/575991619/abaxi_512.avif?width=512",
    price: 321
  },
  {
    name: "white down shoulder tshirt",
    image: "https://images.meesho.com/images/products/576141482/fsw7z_512.avif?width=512",
    price: 350
  },
  
];

let cart = [];

function renderProducts() {
  const productsDiv = document.querySelector('.products');
  productsDiv.innerHTML = '';
  products.forEach((prod, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}">
      <h3>${prod.name}</h3>
      <p>₹${prod.price}</p>
      <button class="add-cart" onclick="addToCart(${i})">Add to Cart</button>
    `;
    productsDiv.appendChild(card);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  document.getElementById('cart-count').innerText = cart.length;
  alert(`Added ${products[index].name} to cart!`);
}

window.onload = renderProducts;
