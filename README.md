Golden Years Together - README
Golden Years Together is a campaign to support elderly people living alone. This project includes two main pages: a profile page and a signup page for volunteers.

The project has these main files and folders:
├── index.html       // Signup page
├── profilepage.html      // Signup form page
├── style.css        // Styles for the pages
├── scripts.js       // JavaScript for functionality
└── media/           // Folder for images
    ├── logo.png
    ├── profcardcircle.png
    ├── profpic.png
    ├── ig.png
    ├── twt.png
    └── whatsapp.png

How to Use
Open signup.html in your web browser to fill out the volunteer signup form.
Fill in the form with your information and submit it.
After submitting, your information will be saved, and you will be redirected to the profile page (index.html), which displays your details.

Pages Description
Signup Page (signup.html)
This page has a form where you enter your first name, last name, sex, email, password, contact number, and why you support the campaign.
Required fields are marked with a red asterisk (*).
When you submit the form, it checks if all required fields are filled. If not, it shows "required" messages next to the empty fields.
If everything is filled correctly, it saves your data and redirects you to the profile page.
Profile Page (index.html)
This page displays the information you entered on the signup page.
It shows your name, sex, email, contact number, and why you support the campaign.
There is a button to volunteer, which shows an alert when clicked.
JavaScript Functions (scripts.js)
submitInput(): Checks the form inputs, saves them to local storage, and redirects to the profile page.
output(): Displays the stored information on the profile page.
sexPick(): Gets the selected sex from the radio buttons.
Functions like checkfname(), checklname(), checksex(), checkemail(), checkpword(), checksupport(): Clear the "required" text when you start typing in the fields.
Styling (style.css)
Styles for the body, header, navigation, and main content.
Special styles for the signup form and profile page.
Makes the pages look nice and organized.
Images (media folder)
Contains images used in the project like the logo, profile picture placeholder, and social media icons.

