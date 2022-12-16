# Edd Tattoo Portfolio

### Live Site: [www.edtattoo.no](https://www.edtattoo.no/)
## Description
This is a portfolio of Ed-Tattoo work. Ed is a tattoo artist in the Oslo area of Norway.

He Wants to show his work to the world and be able to update the content easily.
To do this he wants to use a static site generator to generate the site and host it on github pages.
For This I have chosen to use Preact and Netlify-Cms to allow him to update the content easily.

This application allows users to view all of Ed's work. 
It also allows users to view the details of each piece of work.
Ed is able to add new pieces of work his portfolio easily.

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
- Home Page
- About Page
- Gallery Page
    - Gallery Detail Page
- Contact Page
- Admin Page
    - Admin Login
    - Admin Dashboard
        - Admin Home
        - Admin Gallery
        - Admin About
        - Admin Contact

## Features and Functionality
* Navbar
    - The navbar is present on all pages. with different links depending on the page.
    - Created User friendly links to navigate the site easily and quickly.
    - Navbar component is reusable and can be used on any page.
* Home Page
    - Section 1 - Hero
        - This section contains a hero image and a short description.
        - Contains a button that links to the Contact page.
        - This section is responsive and scales to fit the screen.
        - The Hero Component is reusable and can be used on any page.
    - Section 2 About
        - This section contains a short description of Ed and his work.
        - The text is responsive and scales to fit the screen.
        - Images are responsive and scale to fit the screen.
        - The image component is reusable and can be used on any page.
    - Section 3 Gallery
        - This section contains Some pictures of Ed's work.
        - Masonry style Grid layout is responsive and scales to fit the screen.
        - The Gallery Image generating component is reusable.
    - Section 4
        - This section contains a Contact form to contact Ed.
        - The form is responsive and scales to fit the screen.
        - The form component is reusable and can be used on any page.
    
* About Page
    - The about page contains a brief description of Ed's work and Studio.
    - The text is responsive and scales to fit the screen.
    - The image feature component is reusable and can be used on any page.
* Gallery Page
    - The gallery page contains a list of all of Ed's work..
    - The gallery page contains a link to the details page for each piece of work.
    - The galley generating component is reusable and can be used on any page.
* Gallery Detail Page
    - The gallery detail page contains a larger image of the piece of work.
    - Each gallery detail page contains a link to the next and previous piece of work.
* Contact Page
    - The contact page contains a form that allows users to contact Ed.
    - The form is responsive and scales to fit the screen.
    - The form component is reusable and can be used on any page.
* Admin Page
    - The admin page contains a form that allows Ed to login.
    - Ed can add/edit/delete the content in the home section.
    - Ed can add/edit/delete the content in the about section.
    - Ed can add/edit/delete the content in the gallery section.
    - Ed can add/edit/delete the content in the contact section.
    * Admin Dashboard Page
        - Ed can add/edit/delete the content in the hero section.
            -Home Page
                Fields:
                    - Image
                    - Date
                    - Title
                    - Description
                    - Seo Title
                    - Seo Description
                - About Section
                    Fields:
                        - Image
                        - Date
                        - Title
                        - Description
                - Special Offer Section
                    Fields:
                        - Image
                        - Date
                        - Title
                        - Description
            - About Page
                Fields:
                    - Image
                    - Date
                    - Title
                    - Description
                    - Seo Title
                    - Seo Description
                - About Ed Section
                    Fields:
                        - Images
                        - Date
                        - Title
                        - Description
                - About Studio Section
                    Fields:
                        - Images
                        - Date
                        - Title
                        - Description
                - Fields:
                    - Image
                    - Date
                    - Title
                    - Description
                    - Seo Title
                    - Seo Description
        - Gallery Items
            Fields:
                - Image
                - Date
                - Title
                - Description
                - Seo Title
                - Seo Description
        - Contact Page
            - Fields:
                - Image
                - Date
                - Title
                - Description
                - Seo Title
                - Seo Description
        

### Automation Functionality
* Image Processing
    - The images are processed using the sharp library. This allows us to resize the images to a suitable size for the site. Images are resized based on orientation. If the image is landscape the image is resized to 1920px wide. If the image is portrait the image is resized to 1080px high. Thumbnails are also generated. These are resized to 600px wide 900px high. Image output is in webp and jpg/png formats. The images are also compressed to reduce the size of the images. This allows the site to load faster.
* Text auto resize 
    - The text is resized Based on the input max container width and max font size. This allows us to have a text automatically resize to fit the container.
* Seo Auto Generation
    - The Seo title and description are automatically generated if they are not provided. This allows us to have a Seo title and description automatically generated based on the content of the page title and array of texts stored in the context.

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
