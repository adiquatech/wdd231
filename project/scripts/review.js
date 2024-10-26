document.addEventListener("DOMContentLoaded", countReviewedProduct);

function countReviewedProduct() {
  // Check if the form was submitted by checking if the URL contains the query parameters 'product' and 'rating'
  const urlParams = new URLSearchParams(window.location.search);
  const wasFormSubmitted = urlParams.get("product") && urlParams.get("rating");

  if (!wasFormSubmitted) {
    document.getElementById("numberOfReviews").textContent =
      localStorage.getItem("reviewedProduct")
        ? localStorage.getItem("reviewedProduct")
        : "0";
    return;
  } else {
    // Retrieve the current count from localStorage and parse it as an integer
    const reviews = parseInt(localStorage.getItem("reviewedProduct"));

    if (!isNaN(reviews)) {
      // If 'reviews' is a number, increment it and save back to localStorage
      localStorage.setItem("reviewedProduct", reviews + 1);
    } else {
      // If 'reviews' is not a number (e.g., null or undefined), initialize it as 1
      localStorage.setItem("reviewedProduct", 1);
    }

    document.getElementById("numberOfReviews").textContent =
      localStorage.getItem("reviewedProduct");
  }
}


// Review Details section
// Get the url of the form
const currentUrl = window.location.href;
const everything = currentUrl.split("?")
const formData = everything[1].split("&")
console.log(formData);

// function to get only form value from the array
function value(value){
    formData.forEach(element => {
        if(element.startsWith(value)){
            result = element
            .replaceAll("+", " ")
            .replaceAll("%40", "@")
            .replace("%2B", " ")
            .split("=")[1]
            console.log(result)
        }
    });
    return(result);
}

const timestamp = decodeURIComponent(value("timestamp"));
console.log(timestamp);

// display result on html
const showInfo = document.querySelector(".review-details")
showInfo.innerHTML = `
<p>Here are your Informations:</p>
<P>Product: <strong>${value("product")}</strong></P>
<P>Rating: <strong>${value("rating")} Stars</strong></P>
<P>Date of Usage: <strong>${value("dateOfInstallation")}</strong></P>
<p>Product features: <strong>${value("features")}</strong></p>
<p>Reviewer Statement: <strong>${value("review")}</strong></p>
<p>Reviewer Name: <strong>${value("userName")}</strong></p>
<p>Submission: <strong>${timestamp}</strong></p>
`;