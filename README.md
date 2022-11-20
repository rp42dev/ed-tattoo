# Edd Tattoo Portfolio

### Live Site: [https://ed-tattoo.netlify.app/](https://ed-tattoo.netlify.app/)
## Description
This is a portfolio of Ed-Tattoo work. Ed is a tattoo artist in the Oslo area of Norway. 

He Wants to show his work to the world and be able to update the content easily.
to do this he wants to use a static site generator to generate the site and host it on github pages. We implemented this using preact and preact-cli.

This application allows users to view all of Ed's work. It also allows users to view the details of each piece of work, and Ed is able to add new pieces of work his portfolio easily.

## Planning
### User Stories
* As a user, I want to Know who Ed is and what style of tattooing he does.
* As a user, I want to be able to view all of Ed's work.
* As a user, I want to be able to view the details of each piece of work.
* As a user, I want to be able to contact Ed to make an appointment.
* As a user, I want to be able to view Ed's social media accounts.

* As Ed, I want to be able to add new pieces of work.
* As Ed, I want to be able to edit existing pieces of work.
* As Ed, I want to be able to delete existing pieces of work.


### Pages and Routes
* Home
* About
* Gallery
    * Gallery Detail
* Contact
* Admin
    * Admin Login
    * Admin Dashboard
        * Admin Gallery
            * Admin Gallery Detail
            * Admin Gallery Add
            * Admin Gallery Edit
            * Admin Gallery Delete

## Features and Functionality
* Navbar
    - The navbar is present on all pages. It allows users to navigate to the different pages of the site.
    - The navbar is responsive and collapses into a hamburger menu on smaller screens.
    - The navbar is fixed to the top of the page so that it is always visible to the user.
* Home Page
    - Section 1
        - This section contains a hero image and a short description of Ed and his work.
        - The hero image is responsive and scales to fit the screen. It is also fixed to the top of the page so that it is always visible to the user.
    - Section 2
        - This section contains a short description of Ed and his work.
    - Section 3
        - This section contains Some pictures of Ed's work.
    - Section 4
        - This section contains a Contact form. This form allows users to contact Ed to make an appointment.
    
* About Page
    - The about page contains a brief description of Ed's work.
    - The about page contains a Description of Ed's workshop and the equipment he uses.
    - The about page contains a link to Ed's social media accounts and a link to his instagram account.
* Gallery Page
    - The gallery page contains a list of all of Ed's work. Each piece of work is displayed as a card.
    - The gallery page contains a link to the details page for each piece of work.
* Gallery Detail Page
    - The gallery detail page contains a larger image of the piece of work.
    - The gallery detail page contains a description of the piece of work.
    - The gallery detail page contains a link to the contact page.
* Contact Page
    - The contact page contains a form that allows users to contact Ed.
    - The contact page contains a link to Ed's social media accounts.
    - The contact page contains address and phone number for Ed.
* Admin Page
    - The admin page contains a form that allows Ed to login.
    * Admin Dashboard Page
        - The admin dashboard page contains a list of all of Ed's work.
        - The admin dashboard page contains a link to the details page for each piece of work.
        - The admin dashboard page contains a link to the add page.
        * Admin Gallery Add Page
            - The admin gallery add page contains a form that allows Ed to add a new piece of work.
        * Admin Gallery Edit Page
            - The admin gallery edit page contains a form that allows Ed to edit an existing piece of work.
        * Admin Gallery Delete Page
            - The admin gallery delete page contains a form that allows Ed to delete an existing piece of work.

### Automation Functionality implemented
* Image Processing
    - The images are processed using the sharp library. This allows us to resize the images to a suitable size for the site. on the gallery page the images are resized to 900 X 1200px wide. on the gallery detail page the images are resized to max width 1920px wide. and is saved as both a webp and jpg file for browser compatibility. Original images are deleted after processing.
* Text auto resize 
    - The text is resized Based on the input max container width and max font size. This allows us to have a text automatically resize to fit the container.

## Built With

This project is built of the [Preact-cli](https://github.com/preactjs/preact-cli) starter template.
For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md). This project is deployed on [Netlify](https://www.netlify.com/).
Use of Netlify CMS allows for easy editing of the site content.

Styling is done with Precec material components [material-components-web](https://material.preactjs.com/)

## Stack used:
* [Preact](https://preactjs.com/)
* [Netlify CMS](https://www.netlifycms.org/)
* [material-components-web](https://material.preactjs.com/)
* [Netlify](https://www.netlify.com/)
* [Html](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/)
* [Javascript](https://www.w3schools.com/js/)
* [Markdown](https://www.markdownguide.org/)
* [Github](https://github.com/)
* [Git](https://git-scm.com/)

## Getting Started
To get started, clone the repo and install the dependencies:

```bash
git clone
cd ed-tattoo
npm install
```

Then, run the development server:
 
```bash
npm run dev
```

Open up [localhost:8080](http://localhost:8080) and start clicking around.
