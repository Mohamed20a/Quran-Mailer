
document.addEventListener("DOMContentLoaded", function () {
    var successMessage = document.querySelector(".success-message");

    successMessage.classList.add("hide-message");

    setTimeout(function() {
        successMessage.classList.remove("hide-message");
    }, 100);

    setTimeout(function() {
        errorMessage.classList.add("hide-message");
        setTimeout(function() {
            errorMessage.style.display = "none";
        }, 1000);
    }, 3000);

});
            
        
document.addEventListener("DOMContentLoaded", function() {
    var errorMessage = document.querySelector(".error-message");

    errorMessage.classList.add("hide-message");=

    setTimeout(function() {
        errorMessage.classList.remove("hide-message");
    }, 100);

    setTimeout(function() {
        errorMessage.classList.add("hide-message");
        setTimeout(function() {
            errorMessage.style.display = "none";
        }, 1000); 
    }, 3000);
});

    

document.getElementById("myButton").addEventListener("click", function() {
    var Check = document.getElementById("check");
    var dCheck = document.getElementById("d-check");
    Check.style.display = "none";
    dCheck.style.display = "block";
});



const emailField = document.querySelector(".js-email-input")
const subscribeBtn = document.querySelector(".subscribe-btn")

const submitSubscriptionForm = () => {
    const isValid = isEmailFieldValid()
    if(!isValid){
        return
    }

    subscribeBtn.classList.add("is-loading")
    fetch("https://quran-mailer-api.onrender.com/subscribe/", {
        method: "POST",
        body: JSON.stringify({
            email: emailField.value,
            active: true
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => {
        window.location.href = "../../success/"
    })
    .finally(() => {
        subscribeBtn.classList.remove("is-loading")
    })
}
subscribeBtn.addEventListener("click", submitSubscriptionForm)


function validateForm() {
    var warn = document.querySelector(".warn");
    var messageInput = document.getElementById("message");
    if (messageInput.value.length >= 350) {
      messageInput.value = messageInput.value.substring(0, 350);
      warn.style.display = "block";
      return false;
    } else {
      warn.style.display = "none";
      return true; 
    }
  }
  
  var messageInput = document.getElementById("message");
  messageInput.addEventListener("keydown", validateForm);