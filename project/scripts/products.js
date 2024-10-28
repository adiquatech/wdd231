

const productsUrl = "https://adiquatech.github.io/wdd231/project/data/products.json";
const productsContainer = document.querySelector("#product-container"); // The container to hold product cards
const modal = document.querySelector("#myModal"); // Modal element
const modalTitle = document.querySelector("#modal-title"); // Modal title element
const modalDescription = document.querySelector("#modal-description"); // Modal description element
const closeModalButton = document.querySelector(".close"); // Close button for the modal

// Close modal event listener
closeModalButton.addEventListener("click", () => modal.style.display = 'none');

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Fetch JSON data and display product cards
fetch(productsUrl)
  .then(response => response.json())
  .then(data => displayProducts(data))
  .catch(error => console.error('Error fetching products:', error));

// Function to display products as cards
function displayProducts(products) {
  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.classList.add("product");

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;

    const title = document.createElement("h2");
    title.textContent = product.title;

    const shortDescription = document.createElement("p");
    shortDescription.textContent = product.shortDescription;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = product.price;

    const detailsButton = document.createElement("button");
    detailsButton.textContent = "Show More";
    detailsButton.setAttribute("data-index", index);

    // Add click event to show modal with full product description
    detailsButton.addEventListener("click", () => {
      modalTitle.textContent = product.title;
      modalDescription.textContent = product.fullDescription;
      modal.style.display = 'block';
    });

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(shortDescription);
    card.appendChild(price);
    card.appendChild(detailsButton);

    productsContainer.appendChild(card);
  });
}
