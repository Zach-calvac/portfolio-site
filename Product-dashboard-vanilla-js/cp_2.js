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