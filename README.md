
# Voyager Travel Buddy

![Voyager Travel Buddy](assets/images/travelPlanning.jpg)

This project is a single-page frontend web application which relies heavily on the Google Maps API and the Google Places API, to allows users to plan their next adventure, providing inspiration for things to do during their visit.

Users can:
* Select a destination city
* Find tourist attractions
* Find accommodation
* Find bars and restaurants

 
## UX
 
Provide search results in a manner that is visually appealing for your user (by drawing on the skills you have learned in User-Centric Frontend Development)

* Incorporate links or buttons to allow your user to navigate the site and reset/control the site functionality
* Whenever possible, strive to use semantic HTML5 elements to structure your HTML code better.
* Make sure your site is as responsive as possible. You can test this by checking the site on different screen sizes and browsers. Please note that if you are building a data dashboard, only your chart containers are expected to be responsive. Charts using D3.js are not responsive as they are designed for desktop or large-screen viewing.
* The site can also make use of CSS frameworks such as Bootstrap, just make sure you maintain a clear separation between the library code and your code.

* Geolocation added
* But default to centralised on West, language to GB
* Modal
* Dropdown search
* Custom select amenities. 
* Boostrap to simplify styling, keep things consistient and to utilise the responsive features.

### User Stories

- As a mobile user, using the app abroad and on the go, I would like to be able to quickly and simply navigate and search the site for the things I need, so that I can save time and roaming charges.
- As a desktop user, planning my travel needs ahead of time, I want to be able to browse locations around the world in an asthetically pleasing, simple format, so that I can plan my next adventure.
- As a traveller looking for places to eat or drink whilst on holiday, I want to be able to search for bars, cafes and restaurants in the destination I am travelling to - including opening times, websites and reviews/ratings, so that I am inspired.
- As a traveller looking for accommodation, I want to be able to search for hotels in a specific location.
- As a Western business traveler, I want to save time looking for food and accommodation in the area I am working, simply, in my own language, so I can book accomodation and dinner reservations for my trip seamlessly. 
- As a lost traveller, I want to be able to use geolocation to work out what is nearby, so that I can make my way to a cafe or tourist site.
- As a Personal Assistant, I want to be able to search for hotels based on location, in order to book something close to where my Executive needs to be.

### Wireframe

My initial design process can be seen here: https://wireframepro.mockflow.com/view/keelyjones-milestone-project-3-wireframe
I have tried to keep the design as simple as possible, with simple colour schemes, and the main focus of the app is the map itself.
I have created mockups for both desktop and mobile versions of the application.
I wanted to present an initial welcome message, a search feature, then the search results, creating a simple 3-step process for the user.

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Jasmine]()
    - This project makes use of **Jasmine**, a behavior-driven development framework for testing JavaScript code, to ensure that all of my JavaScript is working.
- [CSS]() & [Bootstrap]()
- [HTML]()
    - This application has been built using **HTML5**
- [GoogleMaps API]()
    - The primary functionality of this project has been enabled by utising **GoogleMaps API**
- [GooglePlaces API]()
    - This project also uses **GooglePlaces API** to provide suggestions for restaurants, bars, museums, etc.


## Testing

Use Git & GitHub for version control. Each new piece of functionality should be in a separate commit.

You should conduct and document tests to ensure that all of your website’s functionality works well.

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).
Deploy the final version of your code to a hosting platform such as GitHub Pages.

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.

## Credits

* GoogleMaps API documentation to help with Geolocation scripts
* 
### Content
- All text content is original.

### Media
- The photos used in this site were obtained from Pixabay.

### Acknowledgements
- I received inspiration for this project from the https://roadtrippers.com/ website, which has an "explore" feature. This feature shows a full page map, allowing the users to explore a location.
- Thank you to Agnes, who reminded me that I can achieve my dreams if I only knuckle down and work for them, and to James, my very own travel buddy.
