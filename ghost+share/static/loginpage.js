console.log("gtjh")
async function checkUsername(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const response = await fetch('/signup', {
        method: 'POST',
        body: formData
    });
    const result = await response.json();
    if (result.exists) {
        alert("Username already exists!");
    }else{
        signupButton.onclick = function() {
            signupModal.style.display = "block";
        };
    
        closeButton.onclick = function() {
            signupModal.style.display = "none";
        };
    }
    
}

async function Login(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const response = await fetch('/login', {
        method: 'POST',
        body: formData
    });
    const result = await response.json();
    if (!result.exists) {
        // Redirect to the new page with some data about IIT Patna
        Swal.fire({
            icon: 'success',
            title: 'Login successful!',
            showConfirmButton: false,
            timer: 1500,
            willClose: () => {
                // Redirect to another page upon successful verification after the success message is displayed
                window.location.href = "/home";
            }
            
        });

        
       
    } else {
        document.getElementById('alert').style.opacity=1;
    }
    
}

document.addEventListener("DOMContentLoaded", function() {
    //For SIGNUP CRED..
    var signupButton = document.getElementById("Signup");
    var signupModal = document.getElementById("signupModal");
    var closeButton = document.getElementById("closeButton");

     signupButton.onclick = function() {
        signupModal.style.display = "block";
    };

    closeButton.onclick = function() {
        signupModal.style.display = "none";
    }
    var loginButton = document.getElementById("Login");
    var loginModal = document.getElementById("loginModal");
    var closeButton2 = document.getElementById("closeButton-2");

    loginButton.onclick = function() {
        loginModal.style.display = "block";
    };

    closeButton2.onclick = function() {
        loginModal.style.display = "none";
    };
});

