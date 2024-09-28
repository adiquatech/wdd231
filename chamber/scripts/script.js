// Last Modified date 
document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.querySelector(".currentyear").textContent = currentYear;
  
    const lastModified = document.lastModified;
    document.querySelector(".lastModified").textContent = `Last Modified: ${lastModified}`;
  });

// Hamburgr
// Toggle navigation visibility and change hamburger icon to 'X'
document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.getElementById('navigation');
    const hamburger = document.getElementById('hamburger');
    nav.classList.toggle('active');
    
    // Change the icon between hamburger and X
    if (hamburger.textContent === '☰') {
        hamburger.textContent = '✖';
    } else {
        hamburger.textContent = '☰';
    }
});