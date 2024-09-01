// URL for the API endpoint
const apiUrl = 'https://archcloud.azurewebsites.net/api/UpdateVisitorCount?code=GACEHwY3Ppju1MjZP89ss8KRLDxVgecPSxJqO3lEiBJPAzFuIt9-CQ%3D%3D';

// Function to handle key press events
function handleKeyPress(event) {
    // Check if the key pressed is one of the function keys (e.g., F1 to F3)
    if (event.key === 'F1' || event.key === 'F2' || event.key === 'F3') {
        // Update the message in the DOM
        document.getElementById('api-status').innerText = `Function key ${event.key} pressed!`;

        // Call the API
        fetch(apiUrl, {
            method: 'POST' // Adjust the method if needed (GET/POST/PUT/etc.)
        })
        .then(response => response.json())
        .then(data => {
            console.log('API response:', data);
            // Update the status message with API response
            document.getElementById('api-status').innerText = `API call successful: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            console.error('Error calling API:', error);
            document.getElementById('api-status').innerText = 'Error calling API.';
        });
    }
}

// Function to handle visitor count display
function updateVisitorCount() {
    // Retrieve the visitor count from localStorage, or start at 0 if not found
    let visitorCount = localStorage.getItem('visitorCount') || 0;

    // Increment the visitor count
    visitorCount++;

    // Save the new visitor count back to localStorage
    localStorage.setItem('visitorCount', visitorCount);

    // Display the visitor count on the webpage with animation
    const counterElement = document.getElementById('visitor-count');
    counterElement.textContent = visitorCount;

    // Animate counter
    counterElement.style.opacity = 0;
    setTimeout(() => {
        counterElement.style.opacity = 1;
        counterElement.style.transition = "opacity 1s ease-in-out";
    }, 300);
}

// Set up event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Update the visitor count when the page loads
    updateVisitorCount();

    // Add event listener for keydown events
    document.addEventListener('keydown', handleKeyPress);
});
async function updateVisitorCount() {
    const response = await fetch('https://<your-api-endpoint>/api/visitorCount');
    const data = await response.json();
    document.getElementById('visitor-count').textContent = `Visitors: ${data.count}`;
}
updateVisitorCount();



