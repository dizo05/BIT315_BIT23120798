function validateLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorDiv = document.getElementById("error-message");

  let errors = [];

  if (username.length < 4) {
    errors.push("Username must be at least 4 characters long.");
  }

  if (password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join("<br>");
    return false;
  } else {
    errorDiv.innerHTML = ""; 
    window.location.href = "home.html"; 
    return true;
  }
}
