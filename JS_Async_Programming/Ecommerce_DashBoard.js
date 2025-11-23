async function fetchAndDisplayProducts() {
  const apiUrl = "https://fakestoreapi.com/products";

  try {
    console.log("Fetching products...");
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const products = await response.json();

    products.forEach(product => {
      const productTitle = product.title;
      const productPrice = product.price;
      const productImage = product.image;

      console.log(`Product: ${productTitle}`);
      console.log(`Price: $${productPrice}`);
      console.log(`Image: ${productImage}`);
      console.log("-------------");


      const productCard = document.createElement("div");
      productCard.className = "product-card";

      const titleElement = document.createElement("h3");
      titleElement.textContent = productTitle;

      const priceElement = document.createElement("p");
      priceElement.textContent = `$${productPrice}`;

      const imageElement = document.createElement("img");
      imageElement.src = productImage;
      imageElement.alt = productTitle;
      imageElement.width = 150;

      productCard.appendChild(titleElement);
      productCard.appendChild(priceElement);
      productCard.appendChild(imageElement);

      document.body.appendChild(productCard);
    });
  } catch (error) {
    console.log("Failed to load products. Please try again.");
    console.log("Detailed error:", error.message);
  }
}

fetchAndDisplayProducts();
