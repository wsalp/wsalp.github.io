document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      if (username === "wsalp" && password === "10z") {
        window.location.href = "3t89uut8tu34tu3tuttu.html";
      } else {
        alert("Invalid Username or Password");
      }
    });
  });
  