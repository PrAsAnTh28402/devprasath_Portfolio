document.addEventListener('DOMContentLoaded', function () {
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Get all the skill cards
    const skillCards = document.querySelectorAll('.card');

    // Function to toggle visibility of skill cards based on scroll
    function toggleSkillVisibility() {
        // Loop through each skill card
        skillCards.forEach((card, index) => {
            // Calculate the distance from the top of the document to the top of the card
            const cardTop = card.getBoundingClientRect().top;

            // Set a threshold for visibility (adjust as needed)
            const visibilityThreshold = window.innerHeight / 2;

            // Check if the card is in the viewport
            if (cardTop < visibilityThreshold) {
                // Show the current card
                card.style.display = 'block';
            } else {
                // Hide the card if it's not in the viewport
                card.style.display = 'none';
            }
        });
    }

    // Call the function on page load and scroll
    toggleSkillVisibility();

    // Listen for scroll events
    window.addEventListener('scroll', toggleSkillVisibility);

    // Function to dynamically add icons for Full-Stack Development
    function addIcons() {
        // Get the Full-Stack Development container
        const fullStackContainer = document.querySelector('.card[data-category="full-stack"] .pra');

        // Create HTML for the icons
        const iconsHTML = `
            <i class="fab fa-html5" title="HTML5"></i>
            <i class="fab fa-css3-alt" title="CSS3"></i>
            <i class="fab fa-js" title="JavaScript"></i>
        `;

        // Add the icons to the container
        fullStackContainer.insertAdjacentHTML('beforeend', iconsHTML);
    }

    // Call the function to add icons
    addIcons();
});