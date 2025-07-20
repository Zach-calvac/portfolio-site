function fetchProductsThen() {
  fetch('https://www.course-api.com/javascript-store-products')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((products) => {
      products.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
}

fetchProductsThen();

async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

function displayProducts(products) {
  console.log('Displaying products:', products);
}

function handleError(error) {
  console.error('Error fetching products:', error);
}

fetchProductsAsync();

function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = ''; 

  products.slice(0, 5).forEach((product) => {
    const { name, price, image } = product.fields;
    const imgUrl = image[0].url;

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = name;

    const title = document.createElement('h3');
    title.textContent = name;

    const priceTag = document.createElement('p');
    priceTag.textContent = `$${(price / 100).toFixed(2)}`;

    productCard.appendChild(img);
    productCard.appendChild(title);
    productCard.appendChild(priceTag);

    container.appendChild(productCard);
  });
}