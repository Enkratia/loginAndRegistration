const container = document.querySelector(".container"),
      showHidePw = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signup = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

      showHidePw.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", () =>{
          pwFields.forEach(pwField => {
            if(pwField.type === "password"){
              pwField.type = "text";
      
              // eyeIcon.classList.replace("uil-eye-slash", "uil-eye");

              showHidePw.forEach(icon =>{
                icon.classList.replace("uil-eye-slash", "uil-eye");
              })
            }else{
              pwField.type = "password";
              // eyeIcon.classList.replace("uil-eye", "uil-eye-slash");
              showHidePw.forEach(icon =>{
                icon.classList.replace("uil-eye", "uil-eye-slash");
            })
          }
          })
        });
      });

      signup.addEventListener("click", () =>{
        container.classList.add("active");
      });

      login.addEventListener("click", () =>{
        container.classList.remove("active");
      });

