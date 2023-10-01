// src/modal.js

// Assuming that the modal has an id of 'modal' and the close button has an id of 'close-btn'

// Get the modal and the close button
var modal = document.getElementById('modal');
var closeButton = document.getElementById('close-btn');

// Define the function that handles the close button click event
function handleCloseButtonClick() {
  // Change the modal's display property to 'none'
  modal.style.display = 'none';
}

// Attach the event listener to the close button
closeButton.addEventListener('click', handleCloseButtonClick);
