// Example of dynamically loading featured content
const featuredItems = [
    { title: "Content 1", description: "Description 1", image: "featured1.jpg" },
    { title: "Content 2", description: "Description 2", image: "featured2.jpg" }
  ];
  
  function loadFeaturedItems() {
    const container = document.querySelector('.featured-items');
    featuredItems.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('featured-item');
      div.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
      container.appendChild(div);
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadFeaturedItems);
  