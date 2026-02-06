// ===== Detail Page Script =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get visualization ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const vizId = urlParams.get('id');
    
    if (!vizId) {
        showError('No visualization ID provided');
        return;
    }
    
    // Check if data exists
    if (typeof visualizationData === 'undefined') {
        showError('Data not loaded');
        return;
    }
    
    // Find the visualization data
    const vizData = findVisualization(vizId);
    
    if (!vizData) {
        showError('Visualization not found');
        return;
    }
    
    // Display the visualization details
    displayVisualizationDetails(vizData);
    
    // Update page title
    document.title = `${vizData.title} - Praharagraph`;
});

// ===== Find Visualization by ID =====
function findVisualization(id) {
    // Search through all years
    for (const year in visualizationData) {
        const found = visualizationData[year].find(item => item.id === id);
        if (found) return found;
    }
    return null;
}

// ===== Display Visualization Details =====
function displayVisualizationDetails(data) {
    const container = document.getElementById('detailContent');
    
    // Set image height class if specified
    const imageHeight = data.imageHeight || 600;
    const imageStyle = `max-height: ${imageHeight}px; width: auto; margin: 0 auto;`;
    
    // Build HTML structure
    container.innerHTML = `
        <header class="detail-header">
            <h1 class="detail-title">${data.title}</h1>
            <div class="detail-meta">
                <span class="detail-date">${data.date}</span>
                <span class="detail-divider">•</span>
                <span class="detail-week">${data.week}</span>
            </div>
        </header>

        <section class="detail-image-section">
            <img src="${data.imageUrl}" 
                 alt="${data.title}" 
                 class="detail-image"
                 style="${imageStyle}">
        </section>

        <section class="detail-info">
            <div class="info-block">
                <h2 class="info-title">Overview</h2>
                <p class="info-text">${data.overview}</p>
            </div>

            <div class="info-block">
                <h2 class="info-title">Key Findings</h2>
                <ul class="findings-list">
                    ${data.keyFindings.map(finding => `<li>${finding}</li>`).join('')}
                </ul>
            </div>

            <div class="info-block">
                <h2 class="info-title">Data Source</h2>
                <p class="info-text">${data.dataSource}</p>
            </div>

            <div class="info-block">
                <h2 class="info-title">Tools Used</h2>
                <div class="tools-tags">
                    ${data.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                </div>
            </div>

            <div class="info-block">
                <a href="${data.codeLink}" target="_blank" class="code-button">
                    View Code on GitHub →
                </a>
            </div>
        </section>
    `;
}

// ===== Show Error Message =====
function showError(message) {
    const container = document.getElementById('detailContent');
    container.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
            <h2 style="color: #666; margin-bottom: 20px;">Oops!</h2>
            <p style="color: #999; font-size: 1.125rem;">${message}</p>
            <a href="index.html" style="display: inline-block; margin-top: 24px; padding: 12px 24px; background: #8B7355; color: white; text-decoration: none; border-radius: 8px;">
                ← Back to Gallery
            </a>
        </div>
    `;
}
