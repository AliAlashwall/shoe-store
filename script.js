const Products = [
  {
    id: 0,
    title: "Adidas Ultraboost",
    description: "Responsive running shoes for high-performance comfort.",
    price: 180,
    brand: "Adidas",
    category: "running",
    thumbnail: "./images/img1.jpeg",
  },
  {
    id: 4,
    title: "Reebok Nano X",
    description: "Versatile training shoes with stability and flexibility.",
    price: 110,
    brand: "Reebok",
    category: "training",
    thumbnail: "./images/img7.jpeg",
  },
  {
    id: 5,
    title: "Under Armour HOVR Sonic",
    description: "Connected running shoes with personalized coaching.",
    price: 160,
    brand: "Under Armour",
    category: "running",
    thumbnail: "./images/img6.jpeg",
  },
  {
    id: 6,
    title: "Salomon Speedcross",
    description: "Trail running shoes for rugged terrains.",
    price: 140,
    brand: "Salomon",
    category: "trail-running",
    thumbnail: "./images/img7.jpeg",
  },
  {
    id: 7,
    title: "Brooks Adrenaline GTS",
    description: "Stability running shoes for support and comfort.",
    price: 130,
    brand: "Brooks",
    category: "running",
    thumbnail: "./images/img8.jpeg",
  },
  {
    id: 8,
    title: "Mizuno Wave Rider",
    description: "Smooth and responsive shoes for neutral runners.",
    price: 125,
    brand: "Mizuno",
    category: "running",
    thumbnail: "./images/img9.jpeg",
  },
  {
    id: 1,
    title: "Nike Air Max 270",
    description: "Airy cushioning with a futuristic aesthetic.",
    price: 150,
    brand: "Nike",
    category: "running",
    thumbnail: "./images/img2.jpeg",
  },
  {
    id: 2,
    title: "New Balance Fresh Foam",
    description: "Lightweight and supportive for everyday running.",
    price: 120,
    brand: "New Balance",
    category: "running",
    thumbnail: "./images/img3.jpeg",
  },
  {
    id: 3,
    title: "Puma Calibrate Runner",
    description: "Tech-infused design for a comfortable ride.",
    price: 130,
    brand: "Puma",
    category: "running",
    thumbnail: "./images/img4.jpeg",
  },
];

const slideContainer = document.querySelector(".slide-container");
const searchInput = document.querySelector("#search-input");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Function to display all products
function displayAllProducts() {
  // Clear existing products
  while (slideContainer.firstChild) {
    slideContainer.removeChild(slideContainer.firstChild);
  }

  // Display all products
  Products.forEach((product) => {
    const cardSlide = createCardSlide(product);
    slideContainer.appendChild(cardSlide);
  });

  // Reset currentIndex
  currentIndex = 0;
  slideContainer.style.transform = `translateX(0)`;
}

// Function to create a card slide
function createCardSlide(product) {
  const cardSlide = document.createElement("div");
  cardSlide.classList.add("slide");
  const card = document.createElement("div");
  card.classList.add("card");
  const img = document.createElement("img");
  img.src = product.thumbnail;
  img.alt = product.title;
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  const h2 = document.createElement("h2");
  h2.textContent = product.title;
  const p = document.createElement("p");
  p.textContent = product.description;

  const span = document.createElement("span");
  span.classList.add("material-symbols-outlined");
  span.textContent = "arrow_right_alt";

  cardContent.appendChild(h2);
  cardContent.appendChild(p);

  card.appendChild(img);
  card.appendChild(cardContent);

  cardSlide.appendChild(card);

  return cardSlide;
}

// Event listener for search input
searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.trim().toLowerCase();
  
  if (searchTerm.length === 0) {
    displayAllProducts();
    return;
  }

  const filteredProducts = Products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  // Clear existing products
  while (slideContainer.firstChild) {
    slideContainer.removeChild(slideContainer.firstChild);
  }

  // Display filtered products
  filteredProducts.forEach((product) => {
    const cardSlide = createCardSlide(product);
    slideContainer.appendChild(cardSlide);
  });

  // Reset currentIndex
  currentIndex = 0;
  slideContainer.style.transform = `translateX(0)`;
});
let currentIndex = 0;
let totalSlides = 0;
let slidesToShow = 6; // Adjust based on the width of each slide
const slideWidth = 20; // Adjust based on the width of each slide
let intervalId;

// Function to move to the next slide
// Function to move to the next slide
function moveToNextSlide() {
  totalSlides = slideContainer.children.length;
  if (currentIndex <= totalSlides - slidesToShow) {
    currentIndex++;
    slideContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }%)`;

    // Calculate the number of cards shown on the screen
    const cardsShown = Math.min(slidesToShow, totalSlides - currentIndex);
    console.log(`Number of cards shown: ${cardsShown}`);
  } else {
    currentIndex = 0;
    slideContainer.style.transform = `translateX(0)`;
  }
}

// Event listener for next button
nextBtn.addEventListener("click", () => {
  moveToNextSlide();
});

// Function to update slidesToShow based on screen size
function updateSlidesToShow() {
  // Update slidesToShow based on screen width
  slidesToShow = window.innerWidth >= 768 ? 6 : 1;
}
// Function to move to the previous slide
function moveToPrevSlide() {
  totalSlides = slideContainer.children.length;
  if (currentIndex > 0) {
    currentIndex--;
    slideContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }%)`;

    // Calculate the number of cards shown on the screen
    const cardsShown = Math.min(slidesToShow, totalSlides - currentIndex);
    console.log(`Number of cards shown: ${cardsShown}`);
  } else {
    currentIndex = totalSlides - slidesToShow;
    slideContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }%)`;
  }
}

// Event listener for previous button
prevBtn.addEventListener("click", () => {
  moveToPrevSlide();
});


// Update slidesToShow initially
updateSlidesToShow();

// Listen for window resize event to update slidesToShow
window.addEventListener("resize", updateSlidesToShow);

// Initially display all products
displayAllProducts();
