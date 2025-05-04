// Product data for each image
const products = [
    {
        title: "Premium Ceramic Tiles - Marble Effect",
        code: "Product Code: TM-CER-2023",
        price: "$12.99 / sq. ft.",
        description: "Our premium ceramic tiles with marble effect bring elegance and sophistication to any space. These tiles combine the timeless beauty of natural marble with the durability and easy maintenance of ceramic.",
        features: [
            "High-quality ceramic construction for durability",
            "Realistic marble appearance with natural veining",
            "Stain and scratch resistant surface",
            "Low water absorption rate (≤ 0.5%)",
            "Slip-resistant finish (R10 rating)",
            "Available in multiple sizes (12x12, 12x24, 24x24 inches)",
            "10-year residential warranty"
        ],
        specs: {
            material: "Premium Ceramic",
            finish: "Polished with anti-slip treatment",
            waterAbsorption: "≤ 0.5% (EN ISO 10545-3)",
            slipResistance: "R10 (DIN 51130)",
            peiRating: "Class IV (Heavy Residential/Commercial)",
            frostResistance: "Yes (EN ISO 10545-12)",
            chemicalResistance: "Resistant to acids and alkalis (EN ISO 10545-13)",
            thickness: "9.5mm (±0.5mm)",
            warranty: "10 years residential, 5 years commercial",
            sizes: [
                "12\" x 12\" - Carrara White, Statuario, Nero Marquina",
                "12\" x 24\" - Carrara White, Statuario, Calacatta Gold",
                "24\" x 24\" - All color variants"
            ],
            installation: [
                "Ensure substrate is clean, dry, and level (max. deviation 3mm over 2m)",
                "Use high-quality thin-set mortar suitable for ceramic tiles",
                "Maintain joint width of 3-5mm for proper grouting",
                "Allow adhesive to cure for 24 hours before grouting",
                "Use flexible grout for areas subject to movement"
            ],
            maintenance: [
                "Clean regularly with pH-neutral cleaner",
                "Avoid abrasive cleaners or steel wool",
                "Wipe up spills promptly, especially acidic substances",
                "For polished finish, periodically apply tile sealer"
            ]
        }
    },
    {
        title: "Glazed Vitrified Tiles - Wood Effect",
        code: "Product Code: TM-GLV-2023",
        price: "$15.99 / sq. ft.",
        description: "Our glazed vitrified tiles with realistic wood grain patterns offer the warmth of wood with the durability of vitrified tiles. Perfect for areas where real wood might not be practical.",
        features: [
            "Ultra-durable vitrified tile construction",
            "Authentic wood grain patterns and textures",
            "Scratch and moisture resistant",
            "Low maintenance compared to real wood",
            "Slip-resistant textured finish",
            "Available in multiple wood species patterns",
            "15-year residential warranty"
        ],
        specs: {
            material: "Glazed Vitrified",
            finish: "Textured wood grain",
            waterAbsorption: "≤ 0.1% (EN ISO 10545-3)",
            slipResistance: "R11 (DIN 51130)",
            peiRating: "Class V (Heavy Commercial)",
            frostResistance: "Yes (EN ISO 10545-12)",
            chemicalResistance: "Highly resistant to acids and alkalis",
            thickness: "10mm (±0.5mm)",
            warranty: "15 years residential, 8 years commercial",
            sizes: [
                "6\" x 24\" - Oak, Walnut, Teak patterns",
                "6\" x 36\" - Oak, Walnut, Teak patterns",
                "8\" x 48\" - Limited wood patterns"
            ],
            installation: [
                "Requires perfectly leveled substrate (max. deviation 2mm over 2m)",
                "Use premium flexible adhesive for large format tiles",
                "Butt joints recommended for realistic wood plank appearance",
                "Allow 48 hours before light foot traffic",
                "Use epoxy grout for wet areas"
            ],
            maintenance: [
                "Regular sweeping or vacuuming",
                "Damp mop with mild detergent",
                "Avoid wax-based cleaners",
                "Periodic resealing of grout lines recommended"
            ]
        }
    },
    {
        title: "Polished Porcelain Tiles - Stone Effect",
        code: "Product Code: TM-POR-2023",
        price: "$18.99 / sq. ft.",
        description: "Luxury polished porcelain tiles that replicate the look of natural stone with superior technical performance. Ideal for high-end residential and commercial applications.",
        features: [
            "Full-body porcelain tile with through-body color",
            "High-gloss polished finish with depth of texture",
            "Extremely low porosity (<0.1% water absorption)",
            "Exceptional stain and chemical resistance",
            "Available in large format sizes for seamless look",
            "Suitable for indoor and outdoor use",
            "Lifetime residential warranty"
        ],
        specs: {
            material: "Polished Porcelain",
            finish: "High-gloss polished",
            waterAbsorption: "≤ 0.1% (EN ISO 10545-3)",
            slipResistance: "R9 (DIN 51130) - textured versions available",
            peiRating: "Class V (Heavy Commercial)",
            frostResistance: "Excellent (EN ISO 10545-12)",
            chemicalResistance: "Highly resistant to acids and alkalis",
            thickness: "10.5mm (±0.5mm)",
            warranty: "Lifetime residential, 15 years commercial",
            sizes: [
                "24\" x 24\" - All color variants",
                "24\" x 48\" - Limited colors",
                "36\" x 36\" - Special order"
            ],
            installation: [
                "Requires professional installation for large formats",
                "Use premium large-format tile mortar",
                "Minimum 95% mortar coverage required",
                "Use leveling system for large tiles",
                "Allow 72 hours before heavy use"
            ],
            maintenance: [
                "Regular dust mopping",
                "Occasional damp mopping with neutral cleaner",
                "Avoid acidic cleaners",
                "No sealing required for polished finish"
            ]
        }
    },
    {
        title: "Outdoor Anti-Slip Tiles",
        code: "Product Code: TM-OUT-2023",
        price: "$14.50 / sq. ft.",
        description: "Specialized outdoor tiles designed to withstand weather extremes while providing excellent anti-slip properties. Perfect for patios, pool decks, and outdoor living areas.",
        features: [
            "High-strength porcelain construction",
            "Textured anti-slip surface (R12 rating)",
            "Frost and UV resistant",
            "Low thermal expansion for outdoor stability",
            "Drainage channels for wet areas",
            "Resistant to algae and moss growth",
            "20-year outdoor warranty"
        ],
        specs: {
            material: "Outdoor Porcelain",
            finish: "Textured anti-slip",
            waterAbsorption: "≤ 0.3% (EN ISO 10545-3)",
            slipResistance: "R12 (DIN 51130)",
            peiRating: "Class IV (Heavy Residential/Commercial)",
            frostResistance: "Excellent (EN ISO 10545-12)",
            chemicalResistance: "Resistant to pool chemicals and salts",
            thickness: "12mm (±0.5mm)",
            warranty: "20 years outdoor use",
            sizes: [
                "12\" x 12\" - All colors",
                "12\" x 24\" - All colors",
                "24\" x 24\" - Limited colors"
            ],
            installation: [
                "Requires proper slope for drainage (1/4\" per foot minimum)",
                "Use outdoor-rated thin-set mortar",
                "Wide joints (6-8mm) recommended for drainage",
                "Use polymeric sand for joint filling",
                "Allow 48 hours before use"
            ],
            maintenance: [
                "Regular pressure washing recommended",
                "Use mild detergent for stubborn stains",
                "Reapply joint sand as needed",
                "No sealing required"
            ]
        }
    }
];

// Function for change product when thumbnail is clicked
function changeProduct(thumbnail, productIndex) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = thumbnail.src;

    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbnail.classList.add('active');

    // Update product information
    const product = products[productIndex];
    document.getElementById('productTitle').textContent = product.title;
    document.getElementById('productCode').textContent = product.code;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('productDescription').textContent = product.description;

    // Update features list
    const featuresList = document.getElementById('productFeatures');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Update modal content
    document.getElementById('modalTitle').textContent = product.title + " - Detailed Specifications";
    document.getElementById('specMaterial').textContent = product.specs.material;
    document.getElementById('specFinish').textContent = product.specs.finish;
    document.getElementById('specWaterAbsorption').textContent = product.specs.waterAbsorption;
    document.getElementById('specSlipResistance').textContent = product.specs.slipResistance;
    document.getElementById('specPeiRating').textContent = product.specs.peiRating;
    document.getElementById('specFrostResistance').textContent = product.specs.frostResistance;
    document.getElementById('specChemicalResistance').textContent = product.specs.chemicalResistance;
    document.getElementById('specThickness').textContent = product.specs.thickness;
    document.getElementById('specWarranty').textContent = product.specs.warranty;

    // Update sizes
    const sizesList = document.getElementById('specSizes');
    sizesList.innerHTML = '';
    product.specs.sizes.forEach(size => {
        const li = document.createElement('li');
        li.textContent = size;
        sizesList.appendChild(li);
    });

    // Update installation
    const installationList = document.getElementById('specInstallation');
    installationList.innerHTML = '';
    product.specs.installation.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        installationList.appendChild(li);
    });

    // Update maintenance
    const maintenanceList = document.getElementById('specMaintenance');
    maintenanceList.innerHTML = '';
    product.specs.maintenance.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        maintenanceList.appendChild(li);
    });
}

// Specification Modal functionality
const specModal = document.getElementById('specModal');
const viewBtn = document.getElementById('viewSpecsBtn');
const closeSpecBtn = document.getElementById('closeModal');

viewBtn.onclick = function () {
    specModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

closeSpecBtn.onclick = function () {
    specModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Catalogue Modal functionality
const catalogueModal = document.getElementById('catalogueModal');
const previewCatalogueBtn = document.getElementById('previewCatalogueBtn');
const closeCatalogueBtn = document.getElementById('closeCatalogueModal');

previewCatalogueBtn.onclick = function () {
    catalogueModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

closeCatalogueBtn.onclick = function () {
    catalogueModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function (event) {
    if (event.target == specModal) {
        specModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (event.target == catalogueModal) {
        catalogueModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Simulate file download if files don't exist
document.querySelectorAll('.download-btn[download]').forEach(btn => {
    btn.addEventListener('click', function (e) {
        if (!this.getAttribute('href').startsWith('http')) {
            e.preventDefault();
            const fileType = this.querySelector('i').className.includes('book') ? 'E-Catalogue' : 'Specifications';
            alert(`For demonstration purposes: This would normally download the ${fileType} Word document.\n\nIn a real implementation, ensure the DOCX files are available in the appropriate directory.`);
        }
    });
});