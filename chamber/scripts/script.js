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
  
    if (gridButton &&listButton) {
      listButton.addEventListener("click", () => {
      cards.parentElement.classList.add("list");
      cards.parentElement.classList.remove("grid");
      });
  
      gridButton.addEventListener("click", () => {
      cards.parentElement.classList.add("grid");
      cards.parentElement.classList.remove("list");
      });
    }
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



  // Company Members
const url = "https://adiquatech.github.io/wdd231/chamber/data/company.json";
const cards = document.getElementById("cards");

async function getMemberData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

getMemberData();
const displayMembers = (members) => {
    members.forEach(member => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const info = document.createElement("div");
        const line = document.createElement("hr");

        info.textContent = `${member.phone} || ${member.email} || ${member.address}`;
        name.textContent = `${member.name}  `;

        image = new Image();
        image.src = member.img;
        image.alt = `The brand icon of ${member.name}`;

        image.onload = function () {
            const width = this.naturalWidth;
            const height = this.naturalHeight;
            image.setAttribute("width", width);
            image.setAttribute("height", height);
        };

        card.appendChild(name);
        card.appendChild(line);
        card.appendChild(image);
        card.appendChild(info);
        cards?.appendChild(card);

        

    });
};

