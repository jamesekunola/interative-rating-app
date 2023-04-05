const rates = document.querySelectorAll(".rating-star");
const category = document.querySelector(".category");
const btn = document.querySelector(".submit-btn");
const ratingContainer = document.querySelectorAll(".rating-container");
let userRating;

// event listeners

window.addEventListener("DOMContentLoaded", () => {
  rates.forEach((rate, index) => {
    rate.addEventListener("click", (event) => {
      userRating = true;

      // check if a  rate has been selected previously and remove the rate
      const previouslySelectedRate = document.querySelector(
        ".rating-star.active"
      );
      if (previouslySelectedRate) {
        previouslySelectedRate.classList.remove("active");
      }
      // add the active class to the new selected rate
      event.currentTarget.classList.add("active");
      category.innerHTML = `You selected ${index + 1} out of ${rates.length}`;
    });
  });
  //   submit rate
  btn.addEventListener("click", submitRatingRevew);
});

// functions

function submitRatingRevew() {
  if (userRating) {
    const ratingParent = this.parentElement;
    const appreciationDiv = ratingParent.nextElementSibling;
    ratingParent.classList.remove("active");
    appreciationDiv.classList.add("active");
  } else {
    showError();
  }
}

function showError() {
  const errorMessage = document.querySelector(".error");
  errorMessage.classList.add("show");
  setTimeout(() => {
    errorMessage.classList.remove("show");
  }, 2000);
}
