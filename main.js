document.addEventListener('DOMContentLoaded', function () { });
    // Wait for the window to fully load
    window.addEventListener('load', function () {
        // Set the height of the body to match the height of the window
        document.body.style.height = window.innerHeight + 'px';
    });

    // JavaScript to toggle the visibility of boxes
    document.addEventListener('DOMContentLoaded', function () {

    });
function selectOption(option, event) {
    event.preventDefault();
    var dropdownButton;
    if (option == "Select Month" || option == "  March ") { dropdownButton = document.getElementById("dropdownButton1"); }
    if (option == " Select Day " || option == "   27th   ") { dropdownButton = document.getElementById("dropdownButton2"); }
    if (option == "Select Time " || option == "   6:30 pm  ") { dropdownButton = document.getElementById("dropdownButton3"); }
    dropdownButton.innerHTML = option;
    toggleDropdown(); // Close the dropdown after selecting an option
}
function toggleDropdown1() {
    var dropdown = document.getElementById("myDropdown1");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
function toggleDropdown2() {
    var dropdown = document.getElementById("myDropdown2");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
function toggleDropdown3() {
    var dropdown = document.getElementById("myDropdown3");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function reserveClick() {
    if (document.getElementById("dropdownButton1").innerHTML == "  March " && document.getElementById("dropdownButton2").innerHTML == "   27th   " && document.getElementById("dropdownButton3").innerHTML == "   6:30 pm  ") {
        document.getElementById("btn").innerHTML = "Reserved!";
        document.getElementById("btn").classList.remove('reserveFailed');
        document.getElementById("btn").classList.add('reserved');
        document.getElementById("goofyChef").classList.remove('hidden');
        document.getElementById("goofyChef").classList.add('unhidden');
        document.getElementById("goofyText").classList.remove('hidden');
        document.getElementById("goofyText").classList.add('unhidden');
    } else {
        document.getElementById("btn").innerHTML = "Not Reserved";
        document.getElementById("btn").classList.remove('reserved');
        document.getElementById("btn").classList.add('reserveFailed');
        document.getElementById("goofyChef").classList.add('hidden');
        document.getElementById("goofyChef").classList.remove('unhidden');
        document.getElementById("goofyText").classList.add('hidden');
        document.getElementById("goofyText").classList.remove('unhidden');
    }
}
