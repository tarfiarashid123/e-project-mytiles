// Commercial Wall Tiles Data
const commercialTileData = [
    {
      imgSrc: "./images/commercial_img2.jpg",
      alt: "Classic Oak Wood",
      title: "Classic Oak",
      description: "Warm oak wood texture tiles with natural grain patterns",
      price: "$12.99"
    },
    {
      imgSrc: "./images/commercial_img3.jpg",
      alt: "Walnut Plank",
      title: "Walnut Plank",
      description: "Rich dark walnut finish tiles with smooth texture",
      price: "$14.99"
    },
    {
      imgSrc: "./images/commercial_img4.jpg",
      alt: "Weathered Pine",
      title: "Weathered Pine",
      description: "Distressed pine wood look tiles with rustic charm",
      price: "$11.49"
    },
    {
      imgSrc: "./images/commercial_img5.jpg",
      alt: "Cherry Wood",
      title: "Cherry Wood",
      description: "Luxurious cherry wood effect tiles with reddish tones",
      price: "$15.99"
    },
    {
      imgSrc: "./images/commercial_img6.jpg",
      alt: "Maple Wood",
      title: "Maple Wood",
      description: "Light-colored maple wood grain ceramic tiles",
      price: "$13.49"
    },
    {
      imgSrc: "./images/commercial_img1.jpg",
      alt: "Teak Wood",
      title: "Teak Wood",
      description: "Durable teak wood look tiles with water-resistant finish",
      price: "$16.99"
    },
    {
      imgSrc: "./images/commercial_img7.jpg",
      alt: "Ash Wood",
      title: "Ash Wood",
      description: "Pale ash wood effect tiles with subtle grain patterns",
      price: "$12.99"
    },
    {
      imgSrc: "./images/commercial_img8.jpg",
      alt: "Mahogany",
      title: "Mahogany",
      description: "Deep red mahogany wood texture porcelain tiles",
      price: "$17.49"
    },
    {
      imgSrc: "./images/commercial_img9.jpg",
      alt: "Driftwood Gray",
      title: "Driftwood Gray",
      description: "Cool gray wood-look tiles with weathered appearance",
      price: "$13.99"
    },
    {
      imgSrc: "./images/commercial_img10.jpg",
      alt: "Hickory",
      title: "Hickory",
      description: "Textured hickory wood grain tiles with natural variations",
      price: "$14.49"
    },
    {
      imgSrc: "./images/commercial_img11.jpg",
      alt: "Whitewashed Oak",
      title: "Whitewashed Oak",
      description: "Light, airy wood-look tiles with whitewashed finish",
      price: "$12.49"
    },
    {
      imgSrc: "./images/commercial_img12.jpg",
      alt: "Espresso",
      title: "Espresso",
      description: "Dark espresso wood effect tiles with rich coloration",
      price: "$15.49"
    }
  ];
  
  // Function to create card HTML
  function createCard(card) {
    return `
      <div class="card-overlay">
        <img src="${card.imgSrc}" alt="${card.alt}">
        <div class="overlay-content">
          <h3>${card.title}</h3>
          <p>${card.description}</p>
          <div class="price">${card.price}<span>/sq.ft</span></div>
          <button class="btn btn-view-more">View More</button>
        </div>
      </div>
    `;
  }
  
  // Function to render all cards
  function renderCards() {
    const cardsGrid = document.querySelector('.cards-grid');
    
    if (cardsGrid) {
      // Clear existing content
      cardsGrid.innerHTML = '';
      
      // Add all cards
      commercialTileData.forEach(card => {
        cardsGrid.innerHTML += createCard(card);
      });
    }
  }
  
  // Call the function when the page loads
  document.addEventListener('DOMContentLoaded', renderCards);