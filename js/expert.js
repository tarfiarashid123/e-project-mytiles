document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.expert-nav-button');
    const sections = document.querySelectorAll('.expert-section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            this.classList.add('active');

            const sectionId = 'expert-' + this.dataset.section;
            document.getElementById(sectionId).classList.add('active');
        });
    });
    
    // Tile Guide category switching
    const guideCategories = document.querySelectorAll('.expert-guide-category');
    const guideContents = document.querySelectorAll('.expert-guide-content');
    
    guideCategories.forEach(category => {
        category.addEventListener('click', function() {
        
            guideCategories.forEach(cat => cat.classList.remove('active'));
            guideContents.forEach(content => content.classList.remove('active'));
            
            this.classList.add('active');
            
            const contentId = 'expert-guide-' + this.dataset.category;
            document.getElementById(contentId).classList.add('active');
        });
    });
    
    // Tile Calculator Functionality
    const tileSizeSelect = document.getElementById('tile-size');
    const customSizeInputs = document.querySelectorAll('.custom-size');
    
    tileSizeSelect.addEventListener('change', function() {
        if (this.value === 'custom') {
            customSizeInputs.forEach(input => input.classList.remove('hidden'));
        } else {
            customSizeInputs.forEach(input => input.classList.add('hidden'));
        }
    });
    
    const calculateBtn = document.getElementById('calculate-btn');
    
    calculateBtn.addEventListener('click', function() {

        const roomLength = parseFloat(document.getElementById('room-length').value) || 0;
        const roomWidth = parseFloat(document.getElementById('room-width').value) || 0;
        const wastage = parseFloat(document.getElementById('wastage').value) || 0;
        const tileSize = document.getElementById('tile-size').value;
        
        let tileLength, tileWidth;
        
        if (tileSize === 'custom') {
            tileLength = parseFloat(document.getElementById('tile-length').value) || 0;
            tileWidth = parseFloat(document.getElementById('tile-width').value) || 0;
        } else {
            const sizes = tileSize.split('x');
            tileLength = parseFloat(sizes[0]);
            tileWidth = parseFloat(sizes[1]);
        }
        
        if (roomLength <= 0 || roomWidth <= 0 || tileLength <= 0 || tileWidth <= 0) {
            alert('Please enter valid dimensions for room and tiles');
            return;
        }
        
        // Calculate total area in square feet
        const totalArea = roomLength * roomWidth;
        
        // Convert tile size from inches to feet
        const tileLengthFt = tileLength / 12;
        const tileWidthFt = tileWidth / 12;
        const tileArea = tileLengthFt * tileWidthFt;
        
        // Calculate number of tiles needed
        const tilesNeeded = Math.ceil(totalArea / tileArea);
        const tilesWithWastage = Math.ceil(tilesNeeded * (1 + wastage / 100));
        const boxesNeeded = Math.ceil(tilesWithWastage / 10); // Assuming 10 tiles per box
        
        // Display results
        document.getElementById('total-area').textContent = totalArea.toFixed(2) + ' sq ft';
        document.getElementById('tiles-needed').textContent = tilesNeeded;
        document.getElementById('tiles-with-wastage').textContent = tilesWithWastage;
        document.getElementById('boxes-needed').textContent = boxesNeeded;
    });
    
    // Initialize first section as active if none is active
    if (document.querySelectorAll('.active-section').length === 0) {
        sections[0].classList.add('active-section');
        navButtons[0].classList.add('active');
    }
    
});

document.querySelectorAll('.expert-nav-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.expert-nav-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        this.classList.add('active');
        
        document.querySelectorAll('.expert-section').forEach(section => {
            section.classList.remove('active-section');
        });

        const sectionId = this.dataset.section;
        document.getElementById(sectionId).classList.add('active-section');
        
        document.querySelector('.expert-corner').scrollIntoView({
            behavior: 'smooth'
        });
    });
});