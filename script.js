// Main Gallery Page Script

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const yearTabs = document.querySelectorAll('.year-tab');
    const galleryGrid = document.getElementById('gallery');
    
    // Get current year from URL or default to 2018
    const urlParams = new URLSearchParams(window.location.search);
    let currentYear = urlParams.get('year') || '2018';
    
    // Initialize the page
    init();
    
    function init() {
        // Set active year tab
        setActiveYear(currentYear);
        
        // Render gallery for current year
        renderGallery(currentYear);
        
        // Add event listeners to year tabs
        yearTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const year = this.getAttribute('data-year');
                currentYear = year;
                setActiveYear(year);
                renderGallery(year);
                
                // Update URL without reloading
                const newUrl = `${window.location.pathname}?year=${year}`;
                window.history.pushState({year: year}, '', newUrl);
            });
        });
        
        // Handle browser back/forward buttons
        window.addEventListener('popstate', function(event) {
            if (event.state && event.state.year) {
                currentYear = event.state.year;
                setActiveYear(currentYear);
                renderGallery(currentYear);
            }
        });
    }
    
    function setActiveYear(year) {
        yearTabs.forEach(tab => {
            if (tab.getAttribute('data-year') === year) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }
    
    function renderGallery(year) {
        // Clear gallery
        galleryGrid.innerHTML = '';
        
        // Check if visualizationData exists
        if (typeof visualizationData === 'undefined') {
            galleryGrid.innerHTML = '<div class="loading">Loading data...</div>';
            return;
        }
        
        // Get data for the selected year
        const yearData = visualizationData[year];
        
        // If no data for this year
        if (!yearData || yearData.length === 0) {
            galleryGrid.innerHTML = `
                <div class="empty-state">
                    <h2>No visualizations yet for ${year}</h2>
                    <p>Check back later for more content!</p>
                </div>
            `;
            return;
        }
        
        // Create cards for each visualization
        yearData.forEach(item => {
            const card = createCard(item);
            galleryGrid.appendChild(card);
        });
    }
    
    function createCard(item) {
        // Create card element
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.onclick = function() {
            window.location.href = `detail.html?id=${item.id}`;
        };
        
        // Create card HTML
        card.innerHTML = `
            <div class="card-image-wrapper">
                <img 
                    src="${item.imageUrl}" 
                    alt="${item.title}"
                    class="card-image"
                    loading="lazy"
                />
            </div>
            <div class="card-content">
                <span class="card-date">${item.date}</span>
                <h3 class="card-title">${item.title}</h3>
            </div>
        `;
        
        return card;
    }
});