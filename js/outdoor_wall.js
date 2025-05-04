// Outdoor Wall Tiles Data
const outdoorTiles = [
    {
        img: "./images/outdoor_wall_img1.jpg",
        alt: "Natural Slate Texture Tile",
        title: "SlateStone",
        desc: "Natural slate texture porcelain tiles with anti-slip surface",
        price: "$14.99"
    },
    {
        img: "./images/outdoor_img2.jpg",
        alt: "Wooden Deck Outdoor Tile",
        title: "TimberDeck",
        desc: "Wood-look porcelain tiles with enhanced durability for patios",
        price: "$16.50"
    },
    {
        img: "./images/outdoor_img3.jpg",
        alt: "Cobblestone Pattern Tile",
        title: "UrbanCobble",
        desc: "Modern cobblestone pattern tiles for rustic outdoor appeal",
        price: "$13.75"
    },
    {
        img: "./images/outdoor_img4.jpg",
        alt: "Large Format Stone Tile",
        title: "MegaStone",
        desc: "Extra-large format stone tiles for seamless outdoor Walling",
        price: "$18.25"
    },
    {
        img: "./images/outdoor_img5.jpg",
        alt: "Travertine Look Tile",
        title: "Travella",
        desc: "Travertine-look porcelain with natural color variations",
        price: "$15.99"
    },
    {
        img: "./images/outdoor_img6.jpg",
        alt: "Geometric Pattern Tile",
        title: "GeoForm",
        desc: "Contemporary geometric patterned outdoor tiles",
        price: "$17.50"
    },
    {
        img: "./images/outdoor_img7.jpg",
        alt: "Weathered Wood Tile",
        title: "Driftwood",
        desc: "Weathered wood-look tiles with authentic texture",
        price: "$16.25"
    },
    {
        img: "./images/outdoor_img8.jpg",
        alt: "Slate Gray Tile",
        title: "SlateGray",
        desc: "Premium gray slate tiles with natural cleft surface",
        price: "$19.99"
    },
    {
        img: "./images/outdoor_img9.jpg",
        alt: "Sandstone Tile",
        title: "SunsetSand",
        desc: "Warm sandstone-effect tiles with natural color blend",
        price: "$14.50"
    },
    {
        img: "./images/outdoor_img10.jpg",
        alt: "Modern Concrete Tile",
        title: "UrbanConcrete",
        desc: "Sleek concrete-look tiles for contemporary outdoor spaces",
        price: "$15.75"
    },
    {
        img: "./images/outdoor_img11.jpg",
        alt: "Terracotta Tile",
        title: "TerraClassic",
        desc: "Traditional terracotta tiles with modern durability",
        price: "$12.99"
    },
    {
        img: "./images/outdoor_img12.jpg",
        alt: "Mosaic Pattern Tile",
        title: "MosaicArt",
        desc: "Decorative mosaic tiles for artistic outdoor accents",
        price: "$21.99"
    }
];

// Function to create tile cards
function createOutdoorTileCards() {
    const container = document.getElementById('tiles-container');
    
    outdoorTiles.forEach(tile => {
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
    createOutdoorTileCards();
  });