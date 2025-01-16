// Get all elements with the class .navButton
const navButtons = document.querySelectorAll('.navButton');

// Get all elements with the class .showDropDown
const showDropDowns = document.querySelectorAll('.showDropDown');

// Function to toggle .showDropDown class
const toggleDropDown = (dropDown) => {
    // Toggle the class .showDropDown
    dropDown.classList.toggle('showDropDown');
};

// Add event listeners for mouseenter and mouseleave events on .navButton elements
navButtons.forEach(navButton => {
    navButton.addEventListener('mouseenter', () => {
        const dropDown = navButton.nextElementSibling;
        toggleDropDown(dropDown);
    });

    navButton.addEventListener('mouseleave', () => {
        const dropDown = navButton.nextElementSibling;
        toggleDropDown(dropDown);
    });
});

// Add event listeners for mouseenter and mouseleave events on .showDropDown elements
showDropDowns.forEach(dropDown => {
    dropDown.addEventListener('mouseenter', () => {
        toggleDropDown(dropDown);
    });

    dropDown.addEventListener('mouseleave', () => {
        toggleDropDown(dropDown);
    });
});
