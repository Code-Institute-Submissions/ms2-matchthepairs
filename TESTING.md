<p align="center"><img src="assets/images/logo.png" width="60%"/></p>

# <p align="center">**MS2: Match The Pairs**</p>

### View the live project [here.]()
### View the main README file [here.](./README.md)

---
## Contents
- [**Testing**](#testing)
    - [Code Validation](#code-validation)
    - [Links Testing](#links-testing)
    - [Navigation Testing](#navigation-testing)
    - [Contact Form](#contact-form)
    - [Memory Game](#memory-game)
    - [Accessibility](#accessibility)
    - [Device Testing](#device-testing)
    - [Browser Testing](#browser-testing)
    - [Testing User Stories](#testing-user-stories)

---
## <p align="center">**Testing**</p>


### **Code Validation**
- All HTML code for both site pages was checked and validated with [W3C Markup Checker](https://validator.w3.org/). No errors or warnings reported.
<p align="center"><img src="documentation/testing/" alt="HTML Validation Screenshot, shows no errors" width="70%"/></p>

- All CSS code was checked and validated with [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/). No errors or warnings reported.
<p align="center"><img src="documentation/testing/css-validation.png" alt="CSS Validation Screenshot, shows no errors" width="70%"/></p>

- 

### **Links Testing**
- I manually tested each link on both pages of the site to ensure that none were broken and to ensure that each link would bring the user to the right location.
- Each link correctly changes colour when hovered over to emphasis to a user that it is clickable.
- All external links to social media platforms open correctly in new tabs and bring the user to the expected platform.
- All internal site links work correctly and bring the user to the right and expected site page.

### **Navigation Testing**
- I manually tested the site's navigation bar to ensure navigation ease on both full and hamburger-style menus on different devices. 
    - This was done by using [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) and also manually testing on physical devices.
- The collapsed hamburger-style menu correctly appears on mobile and smaller tablet devices; this makes the site appear cleaner but is also still obvious to the user that it is a means of navigating.
- On both the full and collapsed menu, the active site page is in a bolder font and different colour so that the user always knows where they are on the site. 

### **Contact Form**
- I manually tested the contact form on the *Contact Us* Page to ensure it worked correctly.
- My testing of the form consisted of the following steps;
    - Navigating to the *Contact Us* Page via the link in the navbar, footer or *Play* Page.
    - I attempted to submit the form leaving one of the three fields empty each time.
    - I made note of the error alert that appears upon clicking the **Submit button** (as seen in the image below).
    <p align="center"><img src="documentation/testing/form-field-errors.jpeg" alt="Contact Form Field Error Messages" width="80%"/></p>
    
    - I attempted to submit the form with an incorrect *Email Address* format, missing the "@" and with the "." in the wrong place.
    - I made note of the error alert that appears upon clicking the **Submit button** (as seen in the image below).
    <p align="center"><img src="documentation/testing/form-email-errors.jpg" alt="Contact Form Email Field Error Messages" width="60%"/></p>
    
    - I filled in all form fields correctly (with my own email address) and submit it.
    - I made note of the success message that appears upon submitting the form successfully (as seen in the image below).
     <p align="center"><img src="documentation/testing/form-success.png" alt="Contact Form Successful Submission Message" width="70%"/></p>

    - I checked the email inbox of the site owner to ensure the submitted contact form details were received correctly (as seen in the image below).
    - I checked the email inbox of the email address provided in the form (my own) to ensure the automated response was received (as seen in the image below).
    <p align="center"><img src="documentation/testing/form-emails.jpg" alt="Contact Form Emails" width="70%"/></p>

### **Memory Game**

### **Accessibility**
- I manually checked;
    - all images throughout the site (game tiles and navbar logo) to ensure that they contained an *alt* attribute.
    - all social media icons to ensure that they contained a description for screen-reader users.
- I also tested the site's accessibility using [Lighthouse](https://developers.google.com/web/tools/lighthouse) in [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools);
    - the first initial test (as seen in the image below) alerted me to the lack of labels on some button elements. 
    <p align="center"><img src="documentation/testing/access1.png" alt="Accessibility results screenshot, shows 88%" width="60%"/></p>
   
    - I corrected this by ensuring all buttons had an appropriate label which improved the overall accessibility of the site (as seen in the below image).
    <p align="center"><img src="documentation/testing/access.png" alt="Accessibility results screenshot, shows 98%" width="60%"/></p>

    - I noted the suggestion that keyboard navigation could be improved, this is something that will be looked at at a later date. 

### **Device Testing**

### **Browser Testing**

### **Testing User Stories**
- **"As a first-time visitor, I want the purpose of the website to be clear."**

- **"As a first-time visitor, I want the site and the game to be visually appealing."**

- **"As a first-time visitor, I want the game to be fun and easy to play."**

- **"As a first-time visitor, I want to easily find game instructions if I require them."**

- **"As a first-time visitor, I want to easily be able to contact the site owners."**

- **"As a first-time visitor, I want to be able to restart the game. "**

- **"As a first-time visitor, I want to see my score as I'm playing the game."**