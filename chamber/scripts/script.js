// Last Modified date 
document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.querySelector(".currentyear").textContent = currentYear;
  
    const lastModified = document.lastModified;
    document.querySelector(".lastModified").textContent = `Last Modified: ${lastModified}`;
  });

  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector("#hamburger");
    const navLink = document.querySelector(".navLinks");

    hamburger.addEventListener("click", () => {
        navLink.classList.toggle("open");
    });
});
