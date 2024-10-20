// Example of dynamically loading featured content
const featuredItems = [
    { title: "Content 1", description: "Description 1", image: "featured1.jpg" },
    { title: "Content 2", description: "Description 2", image: "featured2.jpg" }
  ];
  
  function loadFeaturedItems() {
    const container = document.querySelector('.featured-items');
    featuredItems.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('featured-item');
      div.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
      container.appendChild(div);
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadFeaturedItems);

  
 
  function generateCalendar() {
    const calendarContainer = document.getElementById("calendar");
    calendarContainer.innerHTML = ''; // Clear the container first
    
    const currentDate = new Date(); // Get the current date
    const month = currentDate.getMonth(); // Get the current month (0-11)
    const year = currentDate.getFullYear(); // Get the current year
    
    const firstDay = new Date(year, month, 1).getDay(); // Get the day of the week the month starts on
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the total number of days in the month

    // Days of the week
    const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    
    // Create the header for days of the week
    let header = "<div class='calendar-row'>";
    for (let day of daysOfWeek) {
      header += `<div class='calendar-cell'>${day}</div>`;
    }
    header += "</div>";
    calendarContainer.innerHTML = header;
    
    // Create the grid of days
    let calendarHTML = "<div class='calendar-row'>";
    
    // Fill in the blank cells before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendarHTML += "<div class='calendar-cell empty'></div>";
    }

    // Fill in the actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      calendarHTML += `<div class='calendar-cell'>${day}</div>`;
      // Start a new row after Saturday
      if ((day + firstDay) % 7 === 0) {
        calendarHTML += "</div><div class='calendar-row'>";
      }
    }
    
    calendarHTML += "</div>"; // Close the final row
    
    // Insert the HTML into the calendar container
    calendarContainer.innerHTML += calendarHTML;
  }

  // Call the function when the page loads
  window.onload = generateCalendar;
