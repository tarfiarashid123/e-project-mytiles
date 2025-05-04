// Bathroom Wall Tiles Data
const bathroomTileData = [
    {
        id: 1,
        title: "Classic White Subway",
        description: "3x6 inch glossy ceramic subway tiles for timeless look",
        price: "$4.99",
        image: "./images/bathroom_wall_tile_img1.avif"
    },
    {
        id: 2,
        title: "Hexagonal Marble",
        description: "1-inch hexagon marble mosaic tiles with mesh backing",
        price: "$14.99",
        image: "./images/bathroom_wall_tile_img2.avif"
    },
    {
        id: 3,
        title: "Modern Gray Chevron",
        description: "Porcelain chevron pattern tiles in matte finish",
        price: "$9.99",
        image: "./images/bathroom_wall_tile_img3.avif"
    },
    {
        id: 4,
        title: "Beige Stone Effect",
        description: "Large format porcelain tiles with natural stone texture",
        price: "$12.99",
        image: "./images/bathroom_wall_tile_img5.avif"
    },
    {
        id: 5,
        title: "Blue Geometric",
        description: "Hand-painted ceramic tiles with intricate patterns",
        price: "$18.99",
        image: "./images/bathroom_wall_tile_img4.avif"
    },
    {
        id: 6,
        title: "Black Matte Brick",
        description: "Long rectangular matte black porcelain tiles",
        price: "$8.99",
        image: "./images/bathroom_wall_tile_img6.webp"
    },
    {
        id: 7,
        title: "Carrara Marble",
        description: "Premium marble herringbone mosaic with gray veins",
        price: "$24.99",
        image: "./images/bathroom_cover_img.avif"
    },
    {
        id: 8,
        title: "Sage Green Subway",
        description: "Soft green 3x6 inch ceramic tiles with beveled edges",
        price: "$6.99",
        image: "./images/bathroom_wall_tile_img7.jpg"
    },
    {
        id: 9,
        title: "Modern Terrazzo",
        description: "Porcelain tiles with contemporary terrazzo design",
        price: "$15.99",
        image: "./images/bathroom_wall_tile_img8.jpg"
    },
    {
        id: 10,
        title: "Fish Scale Mosaic",
        description: "Iridescent glass tiles in scalloped pattern",
        price: "$22.99",
        image: "./images/bathroom_wall_tile_img9.jpg"
    },
    {
        id: 11,
        title: "Concrete Effect",
        description: "12x24 inch porcelain tiles with urban concrete finish",
        price: "$10.99",
        image: "./images/bathroom_wall_tile_img10.jpg"
    },
    {
        id: 12,
        title: "Moroccan Zellige",
        description: "Handcrafted glazed terracotta tiles with slight variations",
        price: "$28.99",
        image: "./images/bathroom_wall_tile_img11.jpg"
    }
];

// Function to create tile cards
function createTileCards() {
    const tilesContainer = document.getElementById('tiles-container');
    
    bathroomTileData.forEach(tile => {
        const card = document.createElement('div');
        card.className = 'card-overlay';
        card.innerHTML = `
            <img src="${tile.image}" alt="${tile.title}">
            <div class="overlay-content">
                <h3>${tile.title}</h3>
                <p>${tile.description}</p>
                <div class="price">${tile.price}<span>/sq.ft</span></div>
                <button onclick="window.location.href='tilesdetail.html'" class="btn btn-view-more">View More</button>
            </div>
        `;
        tilesContainer.appendChild(card);
    });
}
  // Initialize all sections when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    createTileCards();
  });