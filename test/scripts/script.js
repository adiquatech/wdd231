// Last Modified date 
document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.querySelector(".currentyear").textContent = currentYear;
  
    const lastModified = document.lastModified;
    document.querySelector(".lastModified").textContent = `Last Modified: ${lastModified}`;
    });
  
    // Hamburger button
    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navLinks");
  
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("open");
    });
  
    // Grid and List buttons
    document.addEventListener("DOMContentLoaded", () => {
      const gridButton = document.querySelector("#gridView");
      const listButton = document.querySelector("#listView");
      const cards = document.getElementById("cards");
  
      console.log(gridButton); // Should log the grid button
      console.log(listButton); // Should log the list button
      console.log(cards);      // Should log the cards container
    
      listButton?.addEventListener("click", () => {
        cards.classList.add("list");
        cards.classList.remove("grid");
      });
    
      gridButton?.addEventListener("click", () => {
        cards.classList.remove("list");
        cards.classList.add("grid");
      });
    });
    
  
  // Active page
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.navLinks a');
    const currentLocation = window.location.href;
  
    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.parentElement.classList.add('current-menu-item');
        }
    });
  });
  