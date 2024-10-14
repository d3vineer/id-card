// StudApp.js

// Function to validate Name
function validateName() {
    const nameField = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const namePattern = /^[a-zA-Z]+\s+[a-zA-Z]+$/;

    if (!nameField.value.match(namePattern) || nameField.value.trim() === "") {
        nameError.textContent = "Please enter your full name (first and last name, only alphabets and space).";
        nameField.value = ""; // Clear the field
    } else {
        nameError.textContent = "";
    }
}

// Function to validate Date of Birth
function validateDOB() {
    const dobField = document.getElementById('dob');
    const dobError = document.getElementById('dobError');
    const dobPattern = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!dobField.value.match(dobPattern) || dobField.value.trim() === "") {
        dobError.textContent = "Please enter a valid date in dd/mm/yyyy format.";
        dobField.value = ""; // Clear the field
    } else {
        dobError.textContent = "";
        calculateAge(dobField.value); // Calculate age if the DOB is valid
    }
}

// Function to calculate Age
function calculateAge(dob) {
    const dobParts = dob.split('/'); // Split the input by '/'
    const birthDate = new Date(dobParts[2], dobParts[1] - 1, dobParts[0]); // Create a date object (year, month-1, day)
    const today = new Date(); // Get today's date

    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust age if today's date is before the birth date in the current year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Set calculated age in the age field
    document.getElementById('age').value = age;
}

// Function to validate Mobile Number
function validateMobile() {
    const mobileField = document.getElementById('mobile');
    const mobileError = document.getElementById('mobileError');
    const mobilePattern = /^[1-9]\d{9}$/; // Starts with 1-9 and 10 digits

    if (!mobileField.value.match(mobilePattern) || mobileField.value.trim() === "") {
        mobileError.textContent = "Please enter a valid mobile number (10 digits, not starting with 0).";
        mobileField.value = ""; // Clear the field
    } else {
        mobileError.textContent = "";
    }
}

// Function to validate Email ID
function validateEmail() {
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;

    if (!emailField.value.match(emailPattern) || emailField.value.trim() === "" || emailField.value.startsWith('@')) {
        emailError.textContent = "Please enter a valid email ID (should contain '@' and end with .com or .in).";
        emailField.value = ""; // Clear the field
    } else {
        emailError.textContent = "";
    }
}

// Function to submit the form
function submitForm() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const age = document.getElementById('age').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;

    // Validate form completion before submission
    if (name && dob && age && mobile && email) {
        // Create an object to store the details
        const studentDetails = {
            name,
            dob,
            age,
            mobile,
            email
        };

        // Store the object details in a cookie
        document.cookie = "studentDetails=" + JSON.stringify(studentDetails) + "; path=/";

        // Show success message
        document.getElementById('submitMessage').textContent = "Form submitted successfully!";
        
        // Hide the application form and title, and show the retrieval section
        document.getElementById('studentForm').style.display = 'none';
        document.getElementById('formTitle').style.display = 'none'; // Hide the title
        document.getElementById('retrieveSection').style.display = 'block';
    } else {
        alert("Please fill out the form correctly before submitting.");
    }
}

// Function to retrieve and display details from cookie
function retrieveDetails() {
    const mobileInput = document.getElementById('retrieveMobile').value;
    const retrieveError = document.getElementById('retrieveError');
    const cookies = document.cookie.split('; ');
    let found = false;

    // Loop through cookies to find the student details
    for (let cookie of cookies) {
        if (cookie.startsWith('studentDetails=')) {
            const studentDetails = JSON.parse(cookie.split('=')[1]);
            
            if (studentDetails.mobile === mobileInput) {
                alert(`Name: ${studentDetails.name}\nDOB: ${studentDetails.dob}\nAge: ${studentDetails.age}\nMobile: ${studentDetails.mobile}\nEmail: ${studentDetails.email}`);
                found = true;
                break;
            }
        }
    }

    if (!found) {
        retrieveError.textContent = "No details found for the provided mobile number.";
    } else {
        retrieveError.textContent = ""; // Clear any previous error
    }
}
