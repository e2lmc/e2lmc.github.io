document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing math loader');
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -window.innerHeight &&
            rect.left >= -window.innerWidth &&
            rect.bottom <= window.innerHeight * 2 &&
            rect.right <= window.innerWidth * 2
        );
    }

    // Function to render math in visible elements
    function renderVisibleMath() {
        console.log('Checking for math content to render');
        const mathElements = document.querySelectorAll('.math-content');
        console.log(`Found ${mathElements.length} math elements`);
        
        mathElements.forEach(element => {
            if (isInViewport(element) && !element.dataset.rendered) {
                console.log('Rendering math element:', element);
                try {
                    renderMathInElement(element, {
                        delimiters: [
                            {left: '$$', right: '$$', display: true},
                            {left: '$', right: '$', display: false}
                        ],
                        throwOnError: false,
                        strict: false
                    });
                    element.dataset.rendered = 'true';
                } catch (error) {
                    console.error('Error rendering math:', error);
                }
            }
        });
    }

    // Wait for KaTeX to be fully loaded
    if (typeof renderMathInElement === 'undefined') {
        console.log('KaTeX not loaded yet, waiting...');
        const checkKaTeX = setInterval(() => {
            if (typeof renderMathInElement !== 'undefined') {
                console.log('KaTeX loaded, initializing renderer');
                clearInterval(checkKaTeX);
                renderVisibleMath();
            }
        }, 100);
    } else {
        console.log('KaTeX already loaded, initializing renderer');
        renderVisibleMath();
    }

    // Add scroll event listener for lazy loading
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(renderVisibleMath, 100);
    });
}); 