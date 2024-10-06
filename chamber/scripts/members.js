

  // Company Members
  const url = "https://adiquatech.github.io/wdd231/chamber/data/company.json";
  const cards = document.getElementById("cards");
  const membershipContainer = document.getElementById("membership-container"); // New container for memberships

  
  async function getMemberData() {
      try {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Network response was not ok');
          const data = await response.json();
          displayMembers(data.members);
          displayRandomMemberships(data.members); // Display random Gold and Silver memberships
      } catch (error) {
          console.error('There has been a problem with your fetch operation:', error);
      }
  }
  getMemberData();
  
  // Function to display the fetched members on the webpage
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
  

// Function to filter
function filterGoldSilver(members) {
    return members.filter(member => member.membership === "Gold" || member.membership === "Silver");
}

// Function to shuffle
function getRandomMemberships(members) {
    const filteredMembers = filterGoldSilver(members);
    const shuffled = filteredMembers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

// Function to display memberships
function displayRandomMemberships(members) {
    const randomMemberships = getRandomMemberships(members);
    const cards = document.querySelector("#membership-container");
    membershipContainer.innerHTML = "";

    randomMemberships.forEach(member => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const info = document.createElement("div");
        const line = document.createElement("hr");
        const image = new Image();

        name.textContent = `${member.name}`;
        info.textContent = `${member.phone} || ${member.email} || ${member.address}`;
        
        image.src = member.img;
        image.alt = `The brand icon of ${member.name}`;

        image.onload = function () {
            const width = this.naturalWidth;
            const height = this.naturalHeight;
            image.setAttribute("width", width);
            image.setAttribute("height", height);
        };

        // Append the elements to the card
        card.appendChild(name);
        card.appendChild(line);
        card.appendChild(image);
        card.appendChild(info);

        // Append the card to the container
        cards.appendChild(card);
    });
};