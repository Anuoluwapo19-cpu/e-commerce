// ========================================
// LOGIN CODE
// ========================================

const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    const users = JSON.parse(localStorage.getItem("chicBoutiqueUsers")) || [];

    const savedUser = users.find(function (user) {
      return user.email === email;
    });

    if (!savedUser) {
      loginError.textContent =
        "No account found with this email.";
      return;
    }

    
    if (password !== savedUser.password) {
      loginError.textContent =
        "Incorrect password. Please try again.";
      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    localStorage.setItem(
      "currentUser",
      savedUser.email
    );

    localStorage.setItem(
      "currentUserName",
      savedUser.name
    );

    
    window.location.href = "index.html";
  });
}


// ========================================
// SIGNUP CODE
// ========================================

const signupForm = document.getElementById("signup-form");
const signupError = document.getElementById("signup-error");

if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    
    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-confirm-password").value;

    
    signupError.textContent = "";

    if (!name || !email || !password || !confirmPassword) {
      signupError.textContent =
        "Please fill in all fields.";
      return;
    }

    if (password !== confirmPassword) {
      signupError.textContent ="Passwords do not match.";
      return;
    }


    if (password.length < 6) {
      signupError.textContent ="Password must be at least 6 characters.";
      return;
    }

    const users = JSON.parse(localStorage.getItem("chicBoutiqueUsers")) || [];

    const existingUser = users.find(function (user) {
      return user.email.toLowerCase() === email.toLowerCase();
    });

    if (existingUser) {
      signupError.textContent ="An account with this email already exists.";
      return;
    };


    const newUser = {
      name: name,
      email: email,
      password: password
    };

    
    users.push(newUser);

    localStorage.setItem(
      "chicBoutiqueUsers",
      JSON.stringify(users)
    );

    alert(
      "Account created successfully! Please login."
    );


    window.location.href = "login.html";
  });
}