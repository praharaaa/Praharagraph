// ===== Gallery Page Script =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize the gallery
    initGallery();
    
    // Set up year navigation buttons
    setupYearNavigation();
});

// ===== Initialize Gallery =====
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    // Check if data exists (from data.js)
    if (typeof visualizationData === 'undefined') {
        galleryGrid.innerHTML = '<p style="text-align: center; color: #666; padding: 40px;">Loading visualizations...</p>';
        return;
    }
    
    // Get the active year (default to 2018)
    const activeYear = document.querySelector('.year-btn.active')?.dataset.year || '2018';
    
    // Load visualizations for the active year
    loadVisualizations(activeYear);
}

// ===== Load Visualizations into Grid =====
function loadVisualizations(year) {
    const galleryGrid = document.getElementById('galleryGrid');
    const data = visualizationData[year];
    
    // Clear existing content
    galleryGrid.innerHTML = '';
    
    // Check if data exists for this year
    if (!data || data.length === 0) {
        galleryGrid.innerHTML = '<p style="text-align: center; color: #666; padding: 40px;">No visualizations found for this year.</p>';
        return;
    }
    
    // Create card for each visualization
    data.forEach(item => {
        const card = createGalleryCard(item);
        galleryGrid.appendChild(card);
    });
}

// ===== Create Gallery Card Element =====
function createGalleryCard(item) {
    // Create article element
    const article = document.createElement('article');
    article.className = 'gallery-card';
    
    // Create card HTML structure with week badge on image
    article.innerHTML = `
        <a href="detail.html?id=${item.id}" class="card-link">
            <div class="card-image-wrapper">
                <img src="${item.imageUrl}" 
                     alt="${item.title}" 
                     class="card-image"
                     loading="lazy">
                <div class="card-week-badge">${item.week}</div>
            </div>
            <div class="card-content">
                <p class="card-date">${item.date}</p>
                <h3 class="card-title">${item.title}</h3>
            </div>
        </a>
    `;
    
    return article;
}

// ===== Setup Year Navigation =====
function setupYearNavigation() {
    const yearButtons = document.querySelectorAll('.year-btn');
    
    yearButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            yearButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected year
            const selectedYear = this.dataset.year;
            
            // Load visualizations for selected year
            loadVisualizations(selectedYear);
            
            // Smooth scroll to gallery
            document.querySelector('.gallery-section').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// ===== Handle Image Loading Errors =====
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        // Replace broken image with placeholder
        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not available%3C/text%3E%3C/svg%3E';
    }
}, true);
