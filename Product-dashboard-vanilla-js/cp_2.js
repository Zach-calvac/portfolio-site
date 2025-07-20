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
        const name = product?.fields?.name || 'Unnamed Product';
        console.log(name);
      });
    })
    .catch((error) => {
      console.error('Fetch error (then):', error);
    });
}

async function fetchProductsAsync() {
  try {
    showLoading();
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  } finally {
    hideLoading();
  }
}

function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = ''; 

  const firstFive = products.slice(0, 5);
  firstFive.forEach((product) => {
    const { name = 'Unnamed', price = 0, image = [] } = product.fields;
    const imgUrl = image[0]?.url || 'https://via.placeholder.com/150';

    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
      <img src="${imgUrl}" alt="${name}" />
      <h3>${name}</h3>
      <p>$${(price / 100).toFixed(2)}</p>
    `;

    container.appendChild(card);
  });
}

function handleError(error) {
  console.error(`An error occurred: ${error.message}`);
  
  const container = document.getElementById('product-container');
  if (container) {
    container.innerHTML = `<p class="error">An error occurred: ${error.message}</p>`;
  }
}

function showLoading() {
  const container = document.getElementById('product-container');
  container.innerHTML = `<p class="loading">Loading products...</p>`;
}

function hideLoading() {
}

fetchProductsThen();  
fetchProductsAsync();  