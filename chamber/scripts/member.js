// // Function to fetch the JSON data and create cards
// async function fetchAndCreateMemberCards() {
//     try {
//         // Fetch the JSON file
//         const response = await fetch('members.json');
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         // Parse the JSON data
//         const members = await response.json();

//         // Call the function to create cards
//         createMemberCards(members);
//     } catch (error) {
//         console.error('Error fetching members.json:', error);
//     }
// }

// // Function to create the cards dynamically
// function createMemberCards(members) {
//     const cardsContainer = document.getElementById('cards');

//     // Loop through each member and create a card
//     members.forEach(member => {
//         // Create card elements
//         const card = document.createElement('div');
//         card.classList.add('card');

//         const logo = document.createElement('img');
//         logo.src = `images/${member.image}`;  // Assuming images are in 'images/' directory
//         logo.alt = `${member.name} logo`;

//         const name = document.createElement('h3');
//         name.textContent = member.name;

//         const address = document.createElement('p');
//         address.innerHTML = `<strong>Address:</strong> ${member.address}`;

//         const phone = document.createElement('p');
//         phone.innerHTML = `<strong>Phone:</strong> ${member.phone}`;

//         const website = document.createElement('a');
//         website.href = member.website;
//         website.target = '_blank';  // Opens in a new tab
//         website.textContent = 'Visit Website';

//         const membershipLevel = document.createElement('p');
//         membershipLevel.innerHTML = `<strong>Membership Level:</strong> ${member.membershipLevel}`;

//         const industry = document.createElement('p');
//         industry.innerHTML = `<strong>Industry:</strong> ${member.industry}`;

//         const established = document.createElement('p');
//         established.innerHTML = `<strong>Established:</strong> ${member.established}`;

//         const services = document.createElement('p');
//         services.innerHTML = `<strong>Services:</strong> ${member.services.join(', ')}`;

//         // Append elements to the card
//         card.appendChild(logo);
//         card.appendChild(name);
//         card.appendChild(address);
//         card.appendChild(phone);
//         card.appendChild(website);
//         card.appendChild(membershipLevel);
//         card.appendChild(industry);
//         card.appendChild(established);
//         card.appendChild(services);

//         // Append card to the container
//         cardsContainer.appendChild(card);
//     });
// }

// // Call the function to fetch data and create cards when DOM content is loaded
// document.addEventListener('DOMContentLoaded', fetchAndCreateMemberCards);

























const url = "https://santichapa.github.io/wdd231/chamber/data/members.json";
const cards = document.getElementById("cards");
const contributorsCard = document.querySelector("#contributors");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
    displayGoldMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach(member => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const image = document.createElement("img");
        const info = document.createElement("div");

        info.textContent = `📞 ${member.phone} ✉️ ${member.email} | 📍 ${member.address}`;
        name.textContent = member.name;

        image.setAttribute("src", member.img);
        image.setAttribute("alt", `The brand icon of ${member.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "200");
        image.setAttribute("height", "auto");

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(info);
        cards?.appendChild(card);
    });
};

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

listButton?.addEventListener("click", () => {
    cards.classList.add("list");
});

gridButton?.addEventListener("click", () => {
    cards.classList.remove("list");
});
