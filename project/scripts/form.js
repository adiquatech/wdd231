const productArray = [
  { id: 'fc-1888', name: "Sunphosate", averagerating: 4.5 },
  { id: 'fc-2050', name: "Precision Seed and Fertilizer Planter", averagerating: 4.7 },
  { id: 'fs-1987', name: "High Quality Knapsack Sprayer", averagerating: 3.5 },
  { id: 'ac-2000', name: "ButaForce", averagerating: 3.9 },
  { id: 'jj-1969', name: "Vitamin A D E", averagerating: 5.0 },
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
  
  
  