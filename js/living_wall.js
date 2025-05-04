// Living Room Tiles Data
const livingRoomTiles = [
    {
      img: "./images/living_room_img1.avif",
      alt: "Carrara Elegance",
      title: "Carrara Elegance",
      desc: "Ceramic tiles with realistic wood grain texture",
      price: "$13.99"
    },
    {
      img: "./images/living_room_img2.avif",
      alt: "Oak Haven",
      title: "Oak Haven",
      desc: "Contemporary hexagonal tiles with modern geometric design",
      price: "$20.99"
    },
    {
      img: "./images/living_room_img3.jpg",
      alt: "GeoChic",
      title: "GeoChice",
      desc: "Premium white marble with subtle gray veining for timeless luxury",
      price: "$11.99"
    },
    {
      img: "./images/living_room_img4.avif",
      alt: "Slate Horizon",
      title: "Slate Horizon",
      desc: "Natural slate texture tiles with rich color variations",
      price: "$16.99"
    },
    {
      img: "./images/living_room_img5.jpg",
      alt: "Modern Terrazzo",
      title: "Modern Terrazzo",
      desc: "Chic composite tiles with decorative stone chips",
      price: "$27.80"
    },
    {
      img: "./images/living_room_img6.avif",
      alt: "Herringbone Classic",
      title: "Herringbone Classic",
      desc: "Traditional herringbone pattern in warm wood tones",
      price: "$24.99"
    },
    {
      img: "./images/living_room_img7.jpg",
      alt: "Urban Concrete",
      title: "Urban Concrete",
      desc: "Industrial-chic concrete effect tiles with smooth finish",
      price: "$18.99"
    },
    {
      img: "./images/living_room_img8.jpg",
      alt: "Chevron Luxe",
      title: "Chevron Luxe",
      desc: "Elegant chevron pattern in premium walnut finish",
      price: "$17.90"
    },
    {
      img: "./images/living_room_img9.jpg",
      alt: "Tuscan Travertine",
      title: "Tuscan Travertine",
      desc: "Natural stone-look tiles with warm beige tones",
      price: "$1.80"
    },
    {
      img: "./images/living_room_img10.avif",
      alt: "French Parquet",
      title: "French Parquet",
      desc: "Traditional parquet design with rich mahogany tones",
      price: "$$27.99"
    },
    {
      img: "./images/living_room_img11.jpg",
      alt: "Artisan Mosaic",
      title: "Artisan Mosaic",
      desc: "Handcrafted mosaic tiles with intricate patterns",
      price: "$29.50"
    },
    {
      img: "./images/living_room_img12.jpg",
      alt: "Limestone Harmony",
      title: "Limestone Harmony",
      desc: "Natural limestone-look tiles with soft texture",
      price: "$20.99"
    }
  ];
  
  // Function to create tile cards
  function createLivingRoomTileCards() {
    const container = document.querySelector('.cards-grid');
    container.innerHTML = ''; // Clear existing content
    
    livingRoomTiles.forEach(tile => {
      const card = document.createElement('div');
      card.className = 'card-overlay';
      card.innerHTML = `
        <img src="${tile.img}" alt="${tile.alt}">
        <div class="overlay-content">
          <h3>${tile.title}</h3>
          <p>${tile.desc}</p>
          <div class="price">${tile.price}<span>/sq.ft</span></div>
          <button onclick="window.location.href='tilesdetail.html'" class="btn btn-view-more">View More</button>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  // Initialize all sections when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    createLivingRoomTileCards();
  });