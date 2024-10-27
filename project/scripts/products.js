// Fetch the JSON data and display products
fetch('data/products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    products.forEach((product, index) => {
      const productCard = `
        <div class="product">
          <img src="${product.image}" alt="${product.title}">
          <h2>${product.title}</h2>
          <p>${product.shortDescription}</p>
          <p class="price">${product.price}</p>
          <button class="show-more" data-index="${index}">Show More</button>
        </div>
      `;
      container.innerHTML += productCard;
    });

    // Add event listeners for the "Show More" buttons
    const showMoreButtons = document.querySelectorAll('.show-more');
    showMoreButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productIndex = this.getAttribute('data-index');
        showModal(products[productIndex]);
      });
    });
  })
  .catch(error => console.error('Error fetching products:', error));

// Show modal function
function showModal(product) {
  const modal = document.getElementById('myModal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  
  modalTitle.textContent = product.title;
  modalDescription.textContent = product.fullDescription;
  
  modal.style.display = 'block';
}

// Close modal functionality
const modal = document.getElementById('myModal');
const closeModal = document.querySelector('.close');

closeModal.onclick = function() {
  modal.style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
