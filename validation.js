function validateForm() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var nameRegex = /^[A-Za-z\s]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }
  if (!nameRegex.test(name.trim())) {
    alert("Please enter a valid name");
    return false;
  }
  if (email === "" || name === "") {
    alert("Please fill in all fields.");
    return false;
  }

  if (!name) {
    alert("Please enter your name");
    return false;
  }

  return true;
}
function handleButtonClick(buttonId) {
  const buttons = document.querySelectorAll(".icon");
  buttons.forEach((button) => button.classList.remove("selected"));
  const clickedButton = document.getElementById(buttonId);
  clickedButton.classList.add("selected");
}
