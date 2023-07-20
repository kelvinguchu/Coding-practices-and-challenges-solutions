'use strict';

/*
  The Button class represents a clickable button. It has a constructor to initialize
  the button's text and onClick callback. The render method creates and configures a button element.

  An instance of the Button class is created with the text "Click Me" and an anonymous arrow function
  as the onClick callback. When the button is clicked, an alert displaying "Button clicked!" will be shown.

  The rendered button element is appended to the element with the ID "button-container" in the document.
*/
class Button {
  constructor(text, onClick) {
    this.text = text; // Text to be displayed on the button
    this.onClick = onClick; // Callback function to be executed on button click
  }

  render() {
    const button = document.createElement('button'); // Create a button element
    button.textContent = this.text; // Set the button text
    button.addEventListener('click', this.onClick); // Add a click event listener with the provided callback
    return button; // Return the created button element
  }
}

const myButton = new Button('Click Me', () => {
  alert('Button clicked!'); // Show an alert when the button is clicked
});

const buttonContainer = document.getElementById('button-container'); // Get the button container element
buttonContainer.appendChild(myButton.render()); // Append the rendered button to the button container
