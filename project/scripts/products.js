// Product
const url = "https://adiquatech.github.io/wdd231/project/data/products.json"
const cards = document.getElementById("cards");

async function products() {
    try{
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        displayProducts(data.products);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
    
}
products();

// Function to display the fetch products in to webpage
const displayProducts = (products) => {
    products.forEach(product =>{
        const card = document.createElement("section");
        const name = document.createElement("h3");
        name.textContent = `${products.name}`;
    })
}