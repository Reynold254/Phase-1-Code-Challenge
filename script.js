// Sample data for ramen dishes
const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Renold",
    image: "images/shoyu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Nirvana Ramen",
    restaurant: "Avani",
    image: "images/nirvana.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Kojiro Ramen",
    restaurant: "Unjani",
    image: "images/kojiro.jpg",
    rating: 5,
    comment: "Rich and creamy!",
  },
];

// Function to display ramen dishes
function displayRamens() {
  const ramenMenu = document.getElementById("ramen-menu");
  ramenMenu.innerHTML = "";

  ramens.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
  });
}

// Function to handle click on a ramen image and display its details
function handleClick(ramen) {
  document.getElementById("ramen-name").textContent = ramen.name;
  document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
  document.getElementById("ramen-rating").textContent = ramen.rating;
  document.getElementById("ramen-comment").textContent = ramen.comment;
}

// Function to handle form submission and add new ramen
function addSubmitListener() {
  const form = document.getElementById("ramen-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("ramen-name-input").value;
    const restaurant = document.getElementById("ramen-restaurant-input").value;
    const rating = document.getElementById("ramen-rating-input").value;
    const comment = document.getElementById("ramen-comment-input").value;
    const image = "images/shoyu.jpg";

    const newRamen = {
      id: ramens.length + 1,
      name,
      restaurant,
      image,
      rating,
      comment,
    };
    ramens.push(newRamen);

    displayRamens();
    form.reset();
  });
}

// Main function to initialize the app
function main() {
  displayRamens();
  addSubmitListener();
}

// Ensure DOM is fully loaded before running the main function
document.addEventListener("DOMContentLoaded", main);
