// Tab switching functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding content
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// Validation functionality (simulated)
document.getElementById('validate-url').addEventListener('click', simulateValidation);
document.getElementById('validate-file').addEventListener('click', simulateValidation);
document.getElementById('validate-direct').addEventListener('click', simulateValidation);

function simulateValidation() {
    const results = document.getElementById('results');
    const status = document.getElementById('result-status');
    const details = document.getElementById('result-details');
    
    // Show loading state
    status.textContent = 'Validating...';
    status.className = 'info';
    details.textContent = 'Checking your document for standards compliance...';
    results.classList.add('visible');
    
    // Simulate validation process
    setTimeout(() => {
        // Randomly show success or errors for demonstration
        if (Math.random() > 0.5) {
            status.textContent = 'No errors found';
            status.className = 'success';
            details.innerHTML = '<span class="success">✓ Congratulations! No errors found.</span>\n\nYour document is valid and complies with web standards.';
        } else {
            status.textContent = 'Errors found';
            status.className = 'error';
            details.innerHTML = '<span class="error">✗ Validation found 3 errors and 2 warnings</span>\n\n' +
                                '<span class="error">Error:</span> Line 15: End tag "div" seen, but there were open elements.\n' +
                                '<span class="warning">Warning:</span> Line 22: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.\n' +
                                '<span class="error">Error:</span> Line 32: Duplicate ID "menu".\n' +
                                '<span class="warning">Warning:</span> Line 45: Article lacks heading. Consider using h2-h6 elements to add identifying headings to all articles.\n' +
                                '<span class="error">Error:</span> Line 58: Bad value "border" for attribute "type" on element "input".';
        }
    }, 1500);
}