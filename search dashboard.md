## About the Project
This project was made as part of my assignment to learn and implement key concepts of DOM manipulation, especially debouncing and throttling. The main goal was to build a search dashboard that can efficiently handle user input and scroll events without causing unnecessary performance issues.

All the functionalities are implemented using plain HTML, CSS, and JavaScript — no external libraries or frameworks were used.

### Features Implemented
A large array of 250+ names is generated using JavaScript.
A search input is provided at the top of the page.
As the user types, matching names are shown in real-time using debouncing (with a delay of 1 second).
A "Back to Top" button appears when the user scrolls more than 200px. This uses throttling (with a limit of 500ms) to avoid frequent event triggers.

**Typing stats are shown**:
Total number of keystrokes (updates every time a key is pressed).
Debounced search count (increases only when the debounce function actually runs).
A “Searching...” loader is shown while waiting for debounce delay.
If there are no matching results, it displays a "No results found" message.
The matched part of the name is highlighted in yellow for better visibility.

### Technologies Used
HTML for structure
CSS for basic styling and layout
JavaScript (DOM methods, event handling, debouncing, and throttling)

## Purpose
The main purpose of this project was to:
Understand the real-world usage of debouncing and throttling in user interfaces.
Learn how to reduce performance issues caused by frequent DOM operations.
Practice building a responsive and interactive UI using vanilla JavaScript.

## What I Learned
How debouncing can control the number of times a function is called during typing.
How throttling limits the frequency of scroll event triggers.
How to dynamically update the DOM based on input and user actions.
Importance of optimizing frontend behavior for a better user experience.