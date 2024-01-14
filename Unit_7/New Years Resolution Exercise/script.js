const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  // Get the input value from the input field with id 'resolutionName'
  const inputValue = document.getElementById('resolutionName').value;

  // Create a new list item
  const newResolution = document.createElement('li');

  // Set the text content of the list item
  newResolution.textContent = inputValue;

  // Append the new list item to the ordered list
  document.getElementById('resolutionList').appendChild(newResolution);

  // Clear the input field
  document.getElementById('resolutionName').value = '';
});