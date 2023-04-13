function formValidation() {
    // Get form elements
    var userId = document.registration.userid;
    var passId = document.registration.passid;
    var userName = document.registration.username;
    var country = document.registration.country;
    var email = document.registration.email;
    var sex = document.getElementsByName("msex");
    var language = document.getElementsByName("en");
  
    // Check user id
    if (userId.value == "") {
      alert("User id is required.");
      userId.focus();
      return false;
    }
    if (userId.value.length < 5 || userId.value.length > 12) {
      alert("User id must be between 5 and 12 characters.");
      userId.focus();
      return false;
    }
  
    // Check password
    if (passId.value == "") {
      alert("Password is required.");
      passId.focus();
      return false;
    }
    if (passId.value.length < 7 || passId.value.length > 12) {
      alert("Password must be between 7 and 12 characters.");
      passId.focus();
      return false;
    }
  
    // Check name
    if (userName.value == "") {
      alert("Name is required.");
      userName.focus();
      return false;
    }
    if (!/^[a-zA-Z ]+$/.test(userName.value)) {
      alert("Name must contain alphabets only.");
      userName.focus();
      return false;
    }
  
    // Check country
    if (country.value == "Default") {
      alert("Please select a country.");
      country.focus();
      return false;
    }
  
    // Check email
    if (email.value == "") {
      alert("Email is required.");
      email.focus();
      return false;
    }
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    ) {
      alert("Please enter a valid email address.");
      email.focus();
      return false;
    }
  
    // Check sex
    var sexChecked = false;
    for (var i = 0; i < sex.length; i++) {
      if (sex[i].checked) {
        sexChecked = true;
        break;
      }
    }
    if (!sexChecked) {
      alert("Sex is required.");
      return false;
    }
  
    // Check language
    var langChecked = false;
    for (var i = 0; i < language.length; i++) {
      if (language[i].checked) {
        langChecked = true;
        break;
      }
    }
    if (!langChecked) {
      alert("Language is required.");
      return false;
    }
  
    // If all checks pass, form is valid
    alert("Form validation successful!");
    return true;
  }
  