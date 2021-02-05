<p align="center"><img src="assets/images/logo.png" width="60%"/></p>

# <p align="center">**MS2: Match The Pairs**</p>

### View the live project [here.](https://loftusn13.github.io/ms2-matchthepairs/index.html)
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
    - [Known Bugs](#known-bugs)
    - [Testing User Stories](#testing-user-stories)

---
## <p align="center">**Testing**</p>


### **Code Validation**
- All HTML code for both site pages was checked and validated with [W3C Markup Checker](https://validator.w3.org/). No errors or warnings reported.
<p align="center"><img src="documentation/testing/html-validation.png" alt="HTML Validation Screenshot, shows no errors" width="70%"/></p>

- All CSS code was checked and validated with [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/). No errors or warnings reported.
<p align="center"><img src="documentation/testing/css-validation.png" alt="CSS Validation Screenshot, shows no errors" width="70%"/></p>

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
    - I made note of the success message that appears upon submitting the form successfully (as seen in the image below) and of a small bug, details of which can be found [here.](#known-bugs)
     <p align="center"><img src="documentation/testing/form-success.png" alt="Contact Form Successful Submission Message" width="70%"/></p>

    - I checked the email inbox of the site owner to ensure the submitted contact form details were received correctly (as seen in the image below).
    - I checked the email inbox of the email address provided in the form (my own) to ensure the automated response was received (as seen in the image below).
    <p align="center"><img src="documentation/testing/form-emails.jpg" alt="Contact Form Emails" width="70%"/></p>

### **Memory Game**
The functionality of the game was manually tested to ensure there are no problems with any aspect of game play.
- When a game tile is clicked, the tile correctly flips to reveal the image beneath.
- If the two selected game tiles match, the game correctly keeps them flipped and prevents the user from being able to click them again.
- If the two selected game tiles do **not** match, the game correctly flips them back and allows the user to click them again.
- The game correctly prevents the same game tile from being matched with itself.
- The game tiles are successfully shuffled around when the page is reloaded.

- Upon clicking the first game tile, the **Timer** successfully begins to run from zero.
- Upon clicking a second game tile, the **Total Pairs Flipped Counter** successfully begins to count.
    - With each pair of tiles that are flipped, the count increases by 1.
- Upon matching two game tiles, the **Total Matches Counter** successfully begins to count.
    - With each match that is found, the count increases by 1.
<p align="center"><img src="documentation/testing/panel-test.png" alt="Game Panel Testing" width="70%"/></p>

- Upon clicking the **Reset Game!** button, the page successfully reloads; resetting the game.
- When the **Total Matches Counter** reaches a count of **6**, meaning all the tiles have been matched, the game ends.
    - This successfully causes the **Congratulations Modal** to appear on screen.
    - This modal correctly displays the user's total matches, total pairs flipped and the time it took to find all 6 matches.
    - Upon clicking the **Play Again!** button, the page successfully reloads, allowing the user to play the game again.
<p align="center"><img src="documentation/testing/congrats.png" alt="Game over congratulations modal" width="70%"/></p>

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
- I manually tested the site on a number of devices to ensure functionality and responsivity.
- I also used [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools), as mentioned previously, in order to view the site on a range of different screen dimensions.
- I tested on my own devices and also reached out to friends and family in order to test a wider range.
- The following devices were used for manual testing:
    - **Android Mobile**
        - Huawei: P10, P30 Lite, P30.
        - Samsung: Galaxy A40 and Galaxy A5.
        - No errors or issues noted on the above devices.
    - **Apple Mobile**
        - iPhone: 6, 8, 11.
        - Bug noted on the above devices, details of which can be found [here.](#known-bugs)
- I also ran the site through [Google's Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) and received the below result:
<p align="center"><img src="documentation/testing/mobile.png" alt="Mobile Friendly Results" width="60%"/></p>

- From this testing, my own and feedback from friends and family:
    - The site is easy to navigate.
    - The site is fully responsive across devices.
    - The game works and is simple and straightforward to play (with the exception noted [here](#known-bugs)).

### **Browser Testing**
- I manually tested the site on several different browsers to ensure functionality and responsivity.
- The following browsers were used for manual testing on an Apple Macbook Pro:
    - **Google Chrome:** Site works well with no issues noted.
    - **Safari:** Bug noted, details of which can be found [here.](#known-bugs)
    - **Opera:** Site works well with no issues noted.
    - **Microsoft Edge:** Site works well with no issues noted.
- The following browsers were used for manual testing on various mobile devices:
    - **Google Chrome:** Site works well with no issues noted.
    - **Safari:** Bug noted, details of which can be found [here.](#known-bugs)

### **Known Bugs**
- Upon submitting the **Contact Form** successfully, there is a slight delay in the *Success message* appearing.
    - This bug was not yet resolved upon submission of this project. Further testing will be required to fix this bug.
- The **Safari** browser does not allow the user to play the game. 
    - The timer and counters begin as normal once a user clicks the first tile.
    - When a user clicks on a game tile, the tile flips but the image underneath is not shown meaning the user cannot match images.
    <p align="center"><img src="documentation/testing/bug1.png" alt="Game tiles showing game tile glitch" width="60%"/></p>
    
    - As seen in the above image, the top left tile is the one that was clicked but the image is not showing, instead the top tile image has just reversed.
    - I created an alert that would appear to any user who opens the website in **Safari** to inform them that there is a bug so that they know why the game is not working.
    This was done as a temporary solution until the bug is fixed.
    <p align="center"><img src="documentation/testing/safari.png" alt="Safari glitch alert" width="60%"/></p>

    - This bug was not yet resolved upon submission of this project. Further testing will be required to fix this bug.

### **Testing User Stories**
- **"As a first-time visitor, I want the purpose of the website to be clear."**
    - Upon arriving on the landing page the user can immediately see the game.
    - The user can also see game instructions which further reinforce the purpose of the site; game play.
    - The above points are true across all devices; mobile, tablet, desktop.

- **"As a first-time visitor, I want the site and the game to be visually appealing."** 
    - The user will find the site and game responsive across devices as seen in the image below.
    <p align="center"><img src="documentation/testing/responsive.jpg" alt="Site Displayed on Multiple Devices" width="80%"/></p>
    
    - The user can see all content clearly.
    - The user will find bright and colourful images on all game tiles.
    - The user will find the site visually consistent.
    - The above points are true across all devices; mobile, tablet, desktop.

- **"As a first-time visitor, I want to easily find game instructions if I require them."**
    - On larger screens, the user can find game instructions clearly displayed to the right of the game on the *Play* Page.
    - On tablet and mobile devices, the user can find a prompt above the game which tells the user how to access game instructions;
        - The user can click on the question mark icon, as prompted, to open a modal with game instructions as seen in the image below.
    <p align="center"><img src="documentation/testing/instruction.png" alt="Game Instruction Modal" width="80%"/></p>    

- **"As a first-time visitor, I want to easily be able to contact the site owners."**
    - The user can click on *Contact Us* in the navigation menu to go directly there.
    - The user can also click on a link located in the footer to bring them to the *Contact Us* Page. 
    The link is within a message stating "Contact Us **here**.", which tells the user that this link will bring them to a place to make contact.
    - The user can also click on a link located within the game instructions on the landing page to bring them to the *Contact Us* Page.
    The link is within the *6th* point stating "please **contact us**", which tells the user that this link will bring them to a place to make contact.
    - On the *Contact Us* Page the user will then immediately find a contact form to fill out;
        - This form allows the user to enter their feedback or question as well as providing their name and an email address for the site owner to respond to.
        - The user will be alerted if they try to submit the form with a blank field or if a field is filled incorrectly.
        - The user will be alerted if the form has been submitted successfully.
        - The user will receive an email confirming the site owner has received their message.
        - Full details of the testing involved for this contact form can be found [here](#contact-form).
    <p align="center"><img src="documentation/testing/contact.png" alt="Contact Us Page link locations" width="80%"/></p>

    - The above points are true across all devices; mobile, tablet, desktop.

- **"As a first-time visitor, I want to be able to restart the game. "**
    - On the landing page the user can find the game clearly.
    - Once the user clicks on the first game tile the game begins; the timer starts and tile pairs start being counted.
    - If the user wants to start over they can find a button directly below the game clearly called **Reset Game!**.
    - If hovered over, this button changes colour from blue to red to show the user it is clickable, as shown in the image below.
    - The user can click this button to restart the game.
    <p align="center"><img src="documentation/testing/story6.png" alt="Reset button " width="80%"/></p>

    - The above points are true across all devices; mobile, tablet, desktop.

- **"As a first-time visitor, I want to see my score as I'm playing the game."**
    - On the landing page the user can find the game clearly.
    - Once the user clicks on the first game tile the game begins and the timer starts.
    - As the user is clicking tiles, they can see their score actively updating in the game panel above the tiles.
    - The user's "Total Pairs Flipped" and "Total Matches" are displayed in the game panel as seen in the image below.
    <p align="center"><img src="documentation/testing/story7.png" alt="Game panel " width="80%"/></p>

    - The above points are true across all devices; mobile, tablet, desktop.