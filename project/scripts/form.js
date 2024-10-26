const productArray = [
    {
      id: 'fc-1888',
      name: "Sunphosate",
      averagerating: 4.5
    },
    {
      id: 'fc-2050',
      name: "Precision Seed and Fertilizer PLanter",
      averagerating: 4.7
    },
    {
      id: 'fs-1987',
      name: "High Quality Knapsack Sprayer",
      averagerating: 3.5
    },
    {
      id: 'ac-2000',
      name: "ButaForce",
      averagerating: 3.9
    },
    {
      id: 'jj-1969',
      name: "Vitamin A D E",
      averagerating: 5.0
    },
    {
      id: 'jj-1969',
      name: "Lavaside",
      averagerating: 5.0
    },
    {
      id: 'jj-1969',
      name: "Miavit V.T.A liquid",
      averagerating: 5.0
    },
    {
      id: 'jj-1969',
      name: "Weedoff Contact Herbicide",
      averagerating: 5.0
    }
  ];
  
  document.addEventListener('DOMContentLoaded', loadProduct);
  
  function loadProduct() {
    const selectElement = document.getElementById('product');
  
    productArray.forEach(function(product) {
      const option = document.createElement('option');
      option.value = product.averagerating;
      option.textContent = product.name;
      selectElement.appendChild(option);
    });
  }
  
  
  