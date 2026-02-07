// Detail Page Script

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get visualization ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const visualizationId = urlParams.get('id');
    
    // If no ID, redirect to home
    if (!visualizationId) {
        window.location.href = 'index.html';
        return;
    }
    
    // Check if visualizationData exists
    if (typeof visualizationData === 'undefined') {
        document.querySelector('.detail-container').innerHTML = '<div class="loading">Loading data...</div>';
        return;
    }
    
    // Find the visualization data
    let currentItem = null;
    
    // Search through all years
    for (const year in visualizationData) {
        const found = visualizationData[year].find(item => item.id === visualizationId);
        if (found) {
            currentItem = found;
            break;
        }
    }
    
    // If not found, show error
    if (!currentItem) {
        document.querySelector('.detail-container').innerHTML = `
            <div class="empty-state">
                <h2>Visualization not found</h2>
                <p>The requested visualization could not be found.</p>
                <a href="index.html" class="back-button" style="display: inline-flex; margin-top: 20px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Back to Gallery
                </a>
            </div>
        `;
        return;
    }
    
    // Populate the page with data
    renderDetailPage(currentItem);
});

function renderDetailPage(item) {
    // Update page title
    document.title = `${item.title} - PRAHARAGRAPH`;
    
    // Update meta elements
    document.getElementById('detail-date').textContent = item.date;
    document.getElementById('detail-week').textContent = item.week || '';
    document.getElementById('detail-title').textContent = item.title;
    
    // Update image
    const imageElement = document.getElementById('detail-image');
    imageElement.src = item.imageUrl;
    imageElement.alt = item.title;
    
    // Update overview
    document.getElementById('detail-overview').textContent = item.overview;
    
    // Update key findings
    const findingsList = document.getElementById('detail-findings');
    findingsList.innerHTML = '';
    
    if (item.keyFindings && item.keyFindings.length > 0) {
        item.keyFindings.forEach(finding => {
            const li = document.createElement('li');
            li.textContent = finding;
            findingsList.appendChild(li);
        });
    }
    
    // Update data source
    document.getElementById('detail-source').textContent = item.dataSource;
    
    // Update tools
    const toolsGrid = document.getElementById('detail-tools');
    toolsGrid.innerHTML = '';
    
    if (item.tools && item.tools.length > 0) {
        item.tools.forEach(tool => {
            const badge = document.createElement('span');
            badge.className = 'tool-badge';
            badge.textContent = tool;
            toolsGrid.appendChild(badge);
        });
    }
    
    // Update code link
    const codeLink = document.getElementById('detail-code-link');
    codeLink.href = item.codeLink;
}
