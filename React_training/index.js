document.getElementById("bankForm").addEventListener("submit", function(e){

    e.preventDefault();

    document.querySelectorAll(".error").forEach(error=>{
        error.innerHTML="";
    });

    let isValid = true;

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value;
    let phone = document.getElementById("phone").value.trim();
    let pan = document.getElementById("pan").value.trim().toUpperCase();

    let gender = document.querySelector('input[name="gender"]:checked');

    // First Name
    if(firstName.length < 3 || firstName.length > 30){
        document.getElementById("firstNameError").innerHTML =
        "First name must be between 3 and 30 characters";
        isValid = false;
    }

    // Last Name
    if(lastName.length < 3 || lastName.length > 30){
        document.getElementById("lastNameError").innerHTML =
        "Last name must be between 3 and 30 characters";
        isValid = false;
    }

    // Gmail Validation
    if(!email.endsWith("@gmail.com")){
        document.getElementById("emailError").innerHTML =
        "Email must end with @gmail.com";
        isValid = false;
    }

    // Age Validation
    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let monthDiff = today.getMonth() - birthDate.getMonth();

    if(
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ){
        age--;
    }

    if(age < 18){
        document.getElementById("dobError").innerHTML =
        "Age must be 18 years or above";
        isValid = false;
    }

    // Phone Validation
    if(phone.length !== 10){
        document.getElementById("phoneError").innerHTML =
        "Phone number must be 10 digits";
        isValid = false;
    }
    else if(phone.startsWith("12345")){
        document.getElementById("phoneError").innerHTML =
        "Phone number cannot start with 12345";
        isValid = false;
    }

    // Gender Validation
    if(!gender){
        document.getElementById("genderError").innerHTML =
        "Please select a gender";
        isValid = false;
    }

    // PAN Validation
    let panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if(!panRegex.test(pan)){
        document.getElementById("panError").innerHTML =
        "Enter valid PAN (ABCDE1234F)";
        isValid = false;
    }

    if(isValid){
        alert("Form Submitted Successfully!");
    }

});
