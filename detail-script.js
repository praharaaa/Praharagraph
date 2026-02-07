// Detail Page Script

document.addEventListener('DOMContentLoaded', function() {
    // Get ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const visualizationId = urlParams.get('id');
    
    // Redirect if no ID
    if (!visualizationId) {
        window.location.href = 'index.html';
        return;
    }
    
    // Check if data exists
    if (typeof visualizationData === 'undefined') {
        document.querySelector('.detail-container').innerHTML = '<div class="loading">Loading data...</div>';
        return;
    }
    
    // Find the visualization
    let currentItem = null;
    
    for (const year in visualizationData) {
        const found = visualizationData[year].find(item => item.id === visualizationId);
        if (found) {
            currentItem = found;
            break;
        }
    }
    
    // If not found
    if (!currentItem) {
        document.querySelector('.detail-container').innerHTML = `
            <div class="empty-state">
                <h2>Visualization not found</h2>
                <p>The requested visualization could not be found.</p>
                <a href="index.html" class="back-button" style="margin-top: 20px;">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.67">
                        <path d="M15.8333 10H4.16667"/>
                        <path d="M10 15.8333L4.16667 10L10 4.16667"/>
                    </svg>
                    Back to Gallery
                </a>
            </div>
        `;
        return;
    }
    
    // Render the page
    renderDetailPage(currentItem);
});

function renderDetailPage(item) {
    // Update page title
    document.title = `${item.title} - PRAHARAGRAPH`;
    
    // Update image=
    const imageElement = document.getElementById('detail-image');
    imageElement.src = item.imageUrl;
    imageElement.alt = `Data visualization: ${item.title}. ${item.overview ? item.overview.substring(0, 150) + '...' : ''}`;

    // Update date
    document.getElementById('detail-date').textContent = item.date;
    
    // Update title
    document.getElementById('detail-title').textContent = item.title;
    
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
    
    // Update data source
    document.getElementById('detail-source').textContent = item.dataSource;
    
    // Update code link
    const codeLink = document.getElementById('detail-code-link');
    codeLink.href = item.codeLink;
}
