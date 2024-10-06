

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
          displayRandomMemberships(data.members);
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
          name.textContent = `${member.name}`;
          const line = document.createElement("hr");

          const info = document.createElement("div");
          info.classList.add("info");
  
          image = new Image();
          image.src = member.img;
          image.alt = `The brand icon of ${member.name}`;
          image.onload = function () {
              const width = this.naturalWidth;
              const height = this.naturalHeight;
              image.setAttribute("width", width);
              image.setAttribute("height", height);
          };

        const information = document.createElement("div");
        information.classList.add("information");
        
        const memberPhone = document.createElement("div");
        const memberPhoneLabel = document.createElement("span");
        memberPhoneLabel.textContent = "Phone: ";
        memberPhoneLabel.style.fontWeight = "bold";
        memberPhone.appendChild(memberPhoneLabel);
        memberPhone.appendChild(document.createTextNode(member.phone));

        const memberEmail = document.createElement("div");
        const memberEmailLabel = document.createElement("span");
        memberEmailLabel.textContent = "Email: ";
        memberEmailLabel.style.fontWeight = "bold";
        memberEmail.appendChild(memberEmailLabel);
        memberEmail.appendChild(document.createTextNode(member.email));

        const memberAddress = document.createElement("div");
        const memberAddressLabel = document.createElement("span");
        memberAddressLabel.textContent = "Address: ";
        memberAddressLabel.style.fontWeight = "bold";
        memberAddress.appendChild(memberAddressLabel);
        memberAddress.appendChild(document.createTextNode(member.address));

        information.appendChild(memberPhone);
        information.appendChild(memberEmail);
        information.appendChild(memberAddress);

        info.appendChild(image);
        info.appendChild(information);


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
    // cards.innerHTML = "";

    randomMemberships.forEach(member => {
        const card = document.createElement("section");
        
        // Create name heading element
        const name = document.createElement("h3");
        name.textContent = `${member.name}`;
        const line = document.createElement("hr");

        // Create a container for image and details
        const detailsContainer = document.createElement("div");
        detailsContainer.classList.add("details-container");

        // Create image element
        const image = new Image();
        image.src = member.img;
        image.alt = `The brand icon of ${member.name}`;
        image.onload = function () {
            const width = this.naturalWidth;
            const height = this.naturalHeight;
            image.setAttribute("width", width);
            image.setAttribute("height", height);
        };

        // Create a div for the member details
        const details = document.createElement("div");
        details.classList.add("details");

        // const phone = document.createElement("div");
        // phone.textContent = `Phone: ${member.phone}`;
        // const email = document.createElement("div");
        // email.textContent = `Email: ${member.email}`;
        // const address = document.createElement("div");
        // address.textContent = `Address: ${member.address}`;

        const phone = document.createElement("div");
        const phoneLabel = document.createElement("span");
        phoneLabel.textContent = "Phone: ";
        phoneLabel.style.fontWeight = "bold"; // Make the label bold
        phone.appendChild(phoneLabel);
        phone.appendChild(document.createTextNode(member.phone));

        const email = document.createElement("div");
        const emailLabel = document.createElement("span");
        emailLabel.textContent = "Email: ";
        emailLabel.style.fontWeight = "bold"; // Make the label bold
        email.appendChild(emailLabel);
        email.appendChild(document.createTextNode(member.email));

        const address = document.createElement("div");
        const addressLabel = document.createElement("span");
        addressLabel.textContent = "Address: ";
        addressLabel.style.fontWeight = "bold"; // Make the label bold
        address.appendChild(addressLabel);
        address.appendChild(document.createTextNode(member.address));


        details.appendChild(phone);
        details.appendChild(email);
        details.appendChild(address);

        // Append image and details to the detailsContainer
        detailsContainer.appendChild(image);
        detailsContainer.appendChild(details);

        // Append the name, line, and detailsContainer to the card
        card.appendChild(name);
        card.appendChild(line);
        card.appendChild(detailsContainer);

        // Append the card to the container
        cards.appendChild(card);
    });
}

