
//   email section start
function subscribeEmail(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    alert("Thank you for subscribing with: " + email);
    // Here you can integrate backend logic (e.g., fetch/AJAX to save the email)
    document.getElementById('emailInput').value = ""; // Clear input
  }
// email section end



