Student ID Card Application Form
This project is a simple web-based application to create a Student ID Card with input validation and storage features. The application collects basic student details such as Name, Date of Birth, Mobile Number, and Email ID, and stores them using cookies. The data can later be retrieved by entering the mobile number.

Project Overview
This application includes two main functionalities:

Student ID Card Application Form:
A form that collects and validates user input.
Once submitted, the form stores the student's information as a cookie.
Retrieve Student Information:
A secondary page where users can retrieve stored student data by entering their mobile number.
Features
Form Validation:
Name: Only allows alphabets and spaces. Cannot be blank.
Date of Birth: Must be in dd/mm/yyyy format. Automatically calculates the age based on the DOB.
Mobile Number: Must be 10 digits, cannot start with a '0'.
Email ID: Should contain an '@' and end with '.com' or '.in'. It cannot start with '@'.
Data Persistence with Cookies: On form submission, the student's details are saved as a JSON object in a cookie.
Retrieve Data by Mobile Number: The user can retrieve the stored student data by entering their mobile number on a separate page.
Getting Started
Prerequisites
To run this project, you need a browser that supports HTML5, CSS, and JavaScript.

Instructions
Clone or download this repository to your local machine.
Open the StudentApp.html file in your browser.
Fill out the form with the following fields:
Name
Date of Birth (in dd/mm/yyyy format)
Age (will be auto-calculated)
Mobile Number
Email ID
Click the Submit button to save the details in a cookie.
After submission, you will be redirected to the Retrieve Page (retrieveStudent.html).
Enter the mobile number on the Retrieve Page to retrieve the stored details.
File Structure
StudentApp.html: The main form where student details are entered.
StudentApp_styles.css: The CSS file used for styling the form and making it responsive.
StudentApp.js: The JavaScript file that handles form validation and cookie storage.
retrieveStudent.html: The page where users can retrieve the saved student details using their mobile number.
Validation Rules
Name: Should only contain alphabets and spaces.
Date of Birth: Must be in dd/mm/yyyy format. The age will be auto-calculated based on the entered date.
Mobile Number: Must be exactly 10 digits and should not start with '0'.
Email ID: Must contain an '@', should not start with '@', and must end with '.com' or '.in'.

Technologies Used
HTML5: For structure and content.
CSS3: For layout, design, and responsiveness.
JavaScript: For form validation, cookie handling, and data retrieval.
How Cookies are Used
The student's details are stored as a cookie in the browser upon form submission. The cookie is a JSON string that stores the following fields:

Name
Date of Birth
Age
Mobile Number
Email ID
On the Retrieve Page, the mobile number is used to search for and retrieve the corresponding student details.

Author
D3vineer

License
This project is open-source and available under the MIT License.
