/**
 * NoraGames.io - Main JavaScript
 * Description: Handles UI interactions, smooth scrolling, and sets up 
 * hooks for the future HTML5 Canvas / WebGL simulation.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    /**
     * 1. Smooth Scrolling behavior for Navigation Links
     * Enhances user experience by gracefully scrolling to sections
     * and offsetting for the sticky header height.
     */
    const headerOffset = 70; 
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (!targetId) return; // Ignore pure '#' links

            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calculate position relative to page taking the fixed header into account
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /**
     * 2. HTML5 Simulation Container Hook
     * Setup for mounting interactive 'Digital Montessori' canvas.
     */
    const simulationContainer = document.getElementById('simulation-container');
    const simulationText = document.querySelector('.playground__simulation-text');

    if (simulationContainer && simulationText) {
        // Placeholder interaction showing the container is alive
        simulationContainer.addEventListener('click', () => {
            simulationText.textContent = "Simulation Started! (Placeholder)";
            simulationContainer.style.borderColor = "var(--color-accent-green)";
            simulationContainer.style.backgroundColor = "#FFFFFF";
        });
    }

});