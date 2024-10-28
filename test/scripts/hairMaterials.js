// Function to fetch hair materials from JSON file
async function fetchHairMaterials() {
    try {
        const url = "https://sylvanhub.github.io/wdd231/project/data/activities.json";
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        displayHairMaterials(data.hairMaterials); // Access the array with `data.hairMaterials`
    } catch (error) {
        console.error('Error fetching hair materials:', error);
    }
}


// Function to display hair materials
function displayHairMaterials(hairMaterials) {
    const container = document.getElementById("hair-materials-container");
    
    // Clear any existing content in the container
    container.innerHTML = "";

    hairMaterials.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("hair-item");

        const image = document.createElement("img")
        image.src = item.image_url
        image.alt = item.name

        itemDiv.appendChild(image)
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Description: ${item.description}</p>
        `;
        // container.appendChild(image);
        container.appendChild(itemDiv);
    });
}

// Call the function to fetch and display hair materials
fetchHairMaterials();
