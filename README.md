<p align="center"><img src="assets/images/logo.png" width="60%"/></p>

# <p align="center">**MS2: Match The Pairs**</p>

 ### View the live project [here.]()

This website has been created as my submission for Milestone Project 2 
for the Code Institute. It is a card-matching memory game designed to be 
fun and interactive for users of all ages. The game is simple for the user 
to play and is responsive across a range of devices.   

---
## Contents
- [**User Experience (UX)**](#ux)
    - [Strategy](#strategy)
        - [User Stories](#user-stories)
        - [Site Owner Goals](#site-owner-goals)
    - [Scope](#scope)
    - [Structure](#structure)
    - [Skeleton](#skeleton)
    - [Surface](#surface)
 - [**Features**](#features)
 - [**Technologies Used**](#technologies-used)
    - [Languages](#languages)
    - [Technologies](#technologies)
 - [**Testing**](#testing)
 - [**Deployment**](#deployment)
    - [GitHub Pages](#github-pages)
    - [Run Locally](#run-locally)
 - [**Credits**](#credits)
    - [Content](#content)
    - [Acknowledgements](#acknowledgements)

---
## <p align="center">**UX**</p>

### **Strategy**
#### User Stories
- As a first-time visitor, I want the purpose of the website to be clear.
- As a first-time visitor, I want the site and the game to be visually appealing.
- As a first-time visitor, I want the game to be fun and easy to play.
- As a first-time visitor, I want to easily find game instructions if I require them.
- As a first-time visitor, I want to easily be able to contact the site owners.
- As a first-time visitor, I want to be able to restart the game. 
- As a first-time visitor, I want to see my score as I'm playing the game.

#### Site Owner Goals
- Create a website with a memory game that users will enjoy playing.

### **Scope**
- A navigation bar must be provided to allow the user to easily navigate through the site.
- The landing page must immediately show the game so the user understands what kind of site they are visiting.
- Game instructions must be provided if the user requires them.
    - A modal containing game instructions is needed on mobile and tablet devices to keep the screen uncluttered.
- A clear way of contacting the site owners must be provided through the use of a contact form on the *Contact Us* page.
- A *Reset* button must be provided to allow the user to start the game over.
- A *Timer* and *Score* count must be provided to improve game experience.
- The website must be visually consistent throughout to keep the user comfortable.
- The website must be responsive across different devices.
- A *Leader Board* containing the highscores of the game will be left as a feature to be implemented and so will **not** be included in this release.
- A *Difficulty Level* function, which changes the game depending on the chosen level, will be left as a feature to be implemented and so will **not** be included in this release.

### **Structure**
The site has a simple and clear structure consisting of just two pages, *Home* and *Contact Us*. Both pages contain the same navigation bar and footer to allow for user navigation ease.
The two pages are also consistent in colour and design to ensure the user is comfortable. 

#### Home Page
- Will contain the actual game and clear instructions for how to play.
- On larger devices, the instructions will be clearly shown beside the game.
- On smaller devices, the instructions will be available through a modal. The user will see a clear prompt on how to access this modal.
- Instructions on all devices contain a link to the *Contact Us* page.

#### Game
- Will contain twelve game tiles.
- Will contain a timer that will begin once the user clicks on the first tile and that will stop once the game is over.
- Will flip the tile that the user has clicked to reveal an image. This image will remain until the user clicks on another tile;
    - if the two tiles match, then the images will remain.
    - if the two tiles do not match, then the images will flip back.
- Will count how many moves the user has made and will display this count.
- Will count and display how many pairs have been matched.
- Will end when the user has matched all of the pairs.
- Will contain a *Reset* button that will restart the game and shuffle the tiles.
- Will shuffle the tiles for each new game played.

#### Navigation Bar
- Will contain the site logo which acts as a link to the *Home* page.
- Will contain clear names of the site pages for navigation ease.
- Will remain consistent throughout the site.
- Will turn into a hamburger menu style on smaller devices.

#### Contact Page
- Will contain links to different social media platforms.
    - As the site owners do not have social media accounts, these links will brings the user to the main social media platfrom rather than to a particular account.
- Will contain a contact form for the user to fill out with a field for *Name*, *Email Address*, *Your Feedback/Query* and a *Submit* button. 
- Once the form is submitted, the user will receive an automated reply to the email address that they entered to confirm their message/query has been received.

#### Footer
- Will contain links to different social media platforms.
    - As the site owners do not have social media accounts, these links will brings the user to the main social media platfrom rather than to a particular account.
- Will remain consistent throughout the site.
- Will contain a link to the *Contact Us* page.

#### Links 
- Will change colour when the user hovers over them to reinforce they are clickable links.
- External links to the social media platforms will open in new tabs.
- Internal site links will bring the user to the correct and expected place.

### **Skeleton**
All wireframes were created using [Balsamiq](https://balsamiq.com/).
#### Mobile - Home Page
![Mobile Home Page Wireframe](documentation/wireframes/Mobile-home.png)

#### Tablet - Home Page
![Tablet Home Page Wireframe](documentation/wireframes/Tablet-home.png)

#### Desktop - Home Page
![Desktop Home Page Wireframe](documentation/wireframes/desktop-home.png)

Full PDF versions of all wireframes can be found below;
- [Mobile Wireframes](documentation/wireframes/mobile)
- [Tablet Wireframes](documentation/wireframes/tablet)
- [Desktop Wireframes](documentation/wireframes/desktop)

### **Surface**
#### Design
The design for the website is clean and uncluttered so the user is not distracted from the game they
have come to play. On mobile and tablet devices the game takes up the whole screen with game instructions
appearing in the form of a modal if the user requires them. This helps to maintain a clean design. On larger
screens both the game and game instructions sit side by side. The overall design and appearance needs to be
fun and appealing so that a user immediately understands what kind of site they are visiting. The Nunito font
was also chosen as it creates a more casual and less serious look.

#### Colour
As the site is primarily for game play I wanted to ensure that the colours used were not dull or
boring while also ensuring they didn't distract from the game itself. I used [Coolors.co](https://coolors.co/) to 
create the colour scheme found below. The *Contrast Checker* tool was also used to check that all content would be
easily seen. The placement of each colour was chosen to keep the site as clean and legible as possible.
- #330C2F Dark Purple
- #F7F3F5 Snow
- #7ADBE6 Sky Blue Crayola
- #1F1F1F Eerie Black
- #90143D Claret

![Site Colour Scheme](documentation/colour-scheme.png)

#### Imagery
The images used for the game tiles were chosen as they're all bright and colourful but not so much so that they 
are a distraction from the game or site itself. They are also different enough so that the user does not find it 
difficult to tell the images apart while looking for the matches.

![Game Tile Images](documentation/tiles.jpg)

---
## <p align="center">**Features**</p>

---
## <p align="center">**Technologies Used**</p>
### **Languages**
- HTML5
- CSS3 
- JavaScript

### **Technologies**
- [Adobe Illustrator](https://www.adobe.com/ie/products/illustrator.html) - used to create the site logo.
- [Adobe Photoshop](https://www.adobe.com/ie/products/photoshop.html) - used to resize and optimise all images for web.
- [Balsamiq](https://balsamiq.com/) - used to create wireframes.
- [Bootstrap](https://getbootstrap.com/)  - used throughout the website for responsive layouts across devices and various styling. 
- [Coolors](https://coolors.co/) - used to choose colour scheme and for contrast-checking of chosen colours.
- [EmailJS](https://www.emailjs.com/) - used to set up email template for contact form submission.
- [Font Awesome](https://fontawesome.com/) - used icons to create social media links.
- [Git](https://git-scm.com/) - version control software used to commit and push code to GitHub.
- [GitHub](https://github.com/) - hosting site used to store the source code of the site with [GitHub Pages](https://pages.github.com/)
used to deploy the live site.
- [Google Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - used for inspecting various page elements and identifying any layout issues/bugs. 
- [Google Fonts](https://fonts.google.com/specimen/Nunito?query=nunito) - selected Nunito font.

---
## <p align="center">**Testing**</p>

---
## <p align="center">**Deployment**</p>
This project used the Code Institute's student [template](https://github.com/Code-Institute-Org/gitpod-full-template). A new repository named **ms2-matchthepairs**
was created which included all branches from the template. The project was developed using the IDE [GitPod](https://www.gitpod.io/). Version control software [Git](https://git-scm.com/) was used to commit and push the code to 
[GitHub](https://github.com/) where it was stored. The following commands were used for this:
- **git add** ***filename/directory*** - This command adds files/directories to the staging area to be committed.
- **git commit -m** *"message here"* - This command commits files/directories to the repository. Commit messages should clearly explain the update being committed.
- **git push** - This command pushes all committed updates/changes into the GitHub repository.

### **GitHub Pages**
To deploy to [GitHub Pages](https://pages.github.com/) these steps were followed:

- Log into GitHub.
- Navigate to the **Repositories** tab. 
- Choose the desired repository.
- Navigate to the **Settings** tab underneath the repository name.
- Scroll down until you reach the **GitHub Pages** section.
- Under **Source** click on the **None** drop-down menu and choose **master branch**.
- Click **Save** and the page will refresh automatically.
- Scroll back down to the **GitHub Pages** section.
- You'll see *"Your site is published at"* followed by the site link.
- The website has been deployed.

### **Run Locally**
In order to make a clone, follow these steps:

- Log into GitHub.
- Navigate to the **Repositories** tab. 
- Choose the desired repository.
- Above the list of files, click on the **Code** drop-down menu.
- Copy the clone URL under the **HTTPS** tab.
- Open a terminal window in your IDE of choice.
- Change the working directory to whichever location you want the cloned directory to be in.
- Type *git clone* and then paste the URL that you copied earlier.
- Press enter.
- Your local clone has now been created.

---
## <p align="center">**Credits**</p>
### **Content**
- All content on the site was written by me.
- All images and graphics are my own.

### **Acknowledgements**
- Code for site **modal** on *Home Page* taken and adapted from [w3schools.com](https://www.w3schools.com/bootstrap/bootstrap_modal.asp).