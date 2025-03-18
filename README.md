# Phase-1-Code-Challenge

The Ramen Rating App is a simple web application that allows users to view, add, and rate different ramen dishes.

<!-- setting up the project -->

I created a new project folder: ramen-rating-app
Inside, I set up three main files:
index.html (for the webpage structure)
style.css (for styling)
index.js (for JavaScript functionality)
I initialized a Git repository and made regular commits while coding.

<!-- Displaying Ramen Images -->

Fuction:displayRamens()
used an array of ramen objects (ramens[]) as my dataset.
I looped through the ramens array using forEach() and created <img> elements.
These images were appended to the #ramen-menu div.
Clicking on an image triggers an event that updates the ramen details

<!-- Displaying Ramen Ramen Details on Click -->

Fuction:displayRamenDetails(ramen)
When a user clicks an image, this function updates the #ramen-detail section to show:
Ramen name
Restaurant name
Rating
Comment

<!-- Handling New Ramen Form Submission -->

Fuction:addSubmitListener()
I added an event listener to the form that allows users to add a new ramen.
It retrieves user input values and dynamically updates the DOM by appending a new image.

<!-- Initializing The App -->

Fuction:main()
To ensure everything loads properly, I created a main() function that:
Calls displayRamens() to show ramen images on page load.
Calls addSubmitListener() to enable user input handling.

<!-- Additional Features -->

Auto-load first ramen’s details on page load
Allow users to update ratings and comments
Enable deleting a ramen from the list

<!-- Summary -->

i stuctured this code in different fuctions i kept it more orgernised
Each function has a specific purpose, making it easier to read or debug
