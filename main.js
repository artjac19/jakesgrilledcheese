document.addEventListener('DOMContentLoaded', function () {
    // Function to create and style a heading
    function createAndStyleHeading() {
        const headingContainer = document.createElement('div');
        headingContainer.classList.add('heading-container'); // Add a custom class for styling

        const myHeading = document.createElement('h1');
        myHeading.textContent = 'Welcome to';
        myHeading.classList.add('fancy-text', 'larger-text', 'centered-text', 'bold-text'); // Add custom classes for styling

        headingContainer.appendChild(myHeading);
        document.body.appendChild(headingContainer);
    }

    // Function to create and style a subtitle
    function createAndStyleSubtitle() {
        const subtitleContainer = document.createElement('div');
        subtitleContainer.classList.add('subtitle-container'); // Add a custom class for styling

        const mySubText = document.createElement('h2');
        mySubText.textContent = 'Jake\'s Grilled Cheese';
        mySubText.classList.add('fancy-text', 'smaller-text', 'centered-text', 'bold-text'); // Add custom classes for styling

        subtitleContainer.appendChild(mySubText);
        document.body.appendChild(subtitleContainer);
    }
    function createAndStyleReservation() {
        const subtitleContainer = document.createElement('div');
        subtitleContainer.classList.add('reservation-container'); // Add a custom class for styling

        const mySubText = document.createElement('h3');
        mySubText.textContent = 'Make your reservation';
        mySubText.classList.add('fancy-text', 'smaller-text', 'centered-text', 'bold-text'); // Add custom classes for styling

        subtitleContainer.appendChild(mySubText);
        document.body.appendChild(subtitleContainer);
    }
    // Wait for the window to fully load
    window.addEventListener('load', function () {
        // Set the height of the body to match the height of the window
        document.body.style.height = window.innerHeight + 'px';
    });


    // Call the functions to create and style the heading and subtitle
    document.body.style.height = '5000px';
    createAndStyleHeading();
    createAndStyleSubtitle();
    createAndStyleReservation();
});

