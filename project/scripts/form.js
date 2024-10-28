const productArray = [
  { id: 'fc-1888', name: "Sunphosate", averagerating: 4.5 },
  { id: 'fc-1889', name: "Super Stem Nitrogen Amendment | Organic Black Earth | 1litre Spray", averagerating: 4.5 },
  { id: 'fc-2050', name: "Precision Seed and Fertilizer Planter", averagerating: 4.7 },
  { id: 'fc-2051', name: "CP15 Evolution Knapsack Sprayer (Standard Model | Cooper Pegler Brand) 15L", averagerating: 4.7 },
  { id: 'fs-1987', name: "High Quality Knapsack Sprayer", averagerating: 3.5 },
  { id: 'fs-1988', name: "Guard Force Powder Herbicide | Post-emergence |100g", averagerating: 3.5 },
  { id: 'ac-2000', name: "ButaForce", averagerating: 3.9 },
  { id: 'ac-2001', name: "Force Up Herbicide | 1liter |", averagerating: 3.9 },
  { id: 'jj-1964', name: "Rechargeable Knapsack Sprayer (2-in-1 | Hand/Battery Powered)", averagerating: 5.0 },
  { id: 'jj-1965', name: "Vitamin A D E", averagerating: 5.0 },
  { id: 'jj-1966', name: "DD Force Insecticide (1 Liter)", averagerating: 5.0 },
  { id: 'jj-1967', name: "Morigad Germicide - 4L", averagerating: 5.0 },
  { id: 'jj-1969', name: "Five Star| Fungicide | 100ml", averagerating: 5.0 },
  { id: 'jj-1970', name: "Lavaside", averagerating: 5.0 },
  { id: 'jj-1971', name: "Miavit V.T.A liquid", averagerating: 5.0 },
  { id: 'jj-1972', name: "Weedoff Contact Herbicide", averagerating: 5.0 }
];
  
  document.addEventListener('DOMContentLoaded', loadProduct);
  
  function loadProduct() {
    const selectElement = document.getElementById('product');
  
    productArray.forEach(function(product) {
      const option = document.createElement('option');
      option.value = product.name;
      option.textContent = product.name;
      selectElement.appendChild(option);
    });
  }
  
// Get date function
  function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var min = today.getMinutes();
    var ss = today.getSeconds();
  
    // Format the date and time properly
    if (dd < 10) { dd = '0' + dd; }
    if (mm < 10) { mm = '0' + mm; }
    if (hh < 10) { hh = '0' + hh; }
    if (min < 10) {min = '0' + min}
    if (ss < 10) {ss = '0' + ss}
  
    // var formattedDate = "Date:" + yyyy + "/" + mm + "/" + dd + "-" + hh + "-" + min + "-" + ss;
    var formattedDate = `Date: ${yyyy}/${mm}/${dd} Time: ${hh}:${min}:${ss}`;
    var timestamp = formattedDate;
  
    document.getElementById("timestamp").value = timestamp;
    console.log(timestamp);
  }
  getDate();
  
  
  