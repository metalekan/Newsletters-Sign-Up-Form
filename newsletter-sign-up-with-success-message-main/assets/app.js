const email = document.querySelector("#email");
const errorText = document.querySelector(".error-text");
const home = document.querySelector(".box-content-a");
const success = document.querySelector(".box-content-b");
const subscribe = document.querySelector(".subscribe");
const dismiss = document.querySelector(".dismiss");

subscribe.addEventListener("click", function submit() {

  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  

  const successFunc = () => {
    home.classList.add("d-none");
    success.classList.remove("d-none");
    dismiss.addEventListener("click", () => {
        setTimeout(function() {
            location.reload()
        }, 2000)
    }); 
  };

  const errorFunc = () => {
    // textRed = errorText.innerText;
    email.classList.add("error-input");
    errorText.style.display = "flex";
  };

  if (email.value === "") {
    errorFunc();
    errorText.innerText = "email cannot be empty!"
  } else if (!email.value.match(pattern)) {
    errorFunc();
    errorText.innerText = "Valid email required";

  } else {
    setTimeout(successFunc, 1500)
  }

 

})

