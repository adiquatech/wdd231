const url = "https://adiquatech.github.io/wdd231/chamber/data/members.json";
const cards = document.getElementById("cards");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
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
    cards.classList.remove("grid"); // Remove grid class if added
});

gridButton?.addEventListener("click", () => {
    cards.classList.remove("list"); // Remove list class if added
    cards.classList.add("grid");
});
