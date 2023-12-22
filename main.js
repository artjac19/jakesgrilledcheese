document.addEventListener('DOMContentLoaded', function () {
    // Function to create and style a heading
    function createAndStyleHeading() {
        const headingContainer = document.createElement('div');
        headingContainer.classList.add('heading-container'); // Add a custom class for styling

        const myHeading = document.createElement('h1');
        myHeading.textContent = 'Welcome';
        myHeading.classList.add('fancy-text', 'larger-text', 'centered-text'); // Add custom classes for styling

        headingContainer.appendChild(myHeading);
        document.body.appendChild(headingContainer);
    }

    // Function to create and style a subtitle
    function createAndStyleSubtitle() {
        const subtitleContainer = document.createElement('div');
        subtitleContainer.classList.add('subtitle-container'); // Add a custom class for styling

        const mySubText = document.createElement('h2');
        mySubText.textContent = 'Jake\'s Grilled Cheese';
        mySubText.classList.add('fancy-text', 'larger-text', 'centered-text'); // Add custom classes for styling

        subtitleContainer.appendChild(mySubText);
        document.body.appendChild(subtitleContainer);
    }

    // Call the functions to create and style the heading and subtitle
    createAndStyleHeading();
    createAndStyleSubtitle();
});

