document.addEventListener("DOMContentLoaded", function() {
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
});

