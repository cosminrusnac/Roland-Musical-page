// go to top function

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// check CAPS Lock key if pressed

let warningText = document.getElementById("warning");
let userName = document.getElementById("username");
let passwordInput = document.getElementById("password");

const capsOn = (e) =>
  e.getModifierState("CapsLock")
    ? (warningText.innerHTML = "! Caps Lock Key is ON !")
    : (warningText.innerHTML = "");

passwordInput.addEventListener("keyup", capsOn);
userName.addEventListener("keyup", capsOn);

// Login Feature


class Login {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validateonSubmit();
  }

  validateonSubmit() {
    let self = this;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      var error = 0;
      self.fields.forEach((field) => {
        const input = document.querySelector(`#${field}`);
        if (self.validateFields(input) == false) {
          error++;
        }
      });
      if (error == 0) {
        var data = {
          username: document.querySelector("#username").value,
          password: document.querySelector("#password").value,
        };
        fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .then((json) => {
            localStorage.setItem("token", json.token);
            window.location.replace("/");
          })
          .catch(error => {
            document.getElementById('login-error')
            .innerHTML = `Invalid username or password, please try again. Error: ${error}`
          });
        //this.form.submit();
      }
    });
  }

  validateFields(field) {
    if (field.value.trim() === "") {
      this.setStatus(
        field,
        `${field.previousElementSibling.innerText} cannot be blank`,
        "error"
      );
      return false;
    } else {
      if (field.type == "password") {
        if (field.value.length < 4) {
          this.setStatus(
            field,
            `${field.previousElementSibling.innerText} must be at least 4 characters`,
            "error"
          );
          return false;
        } else {
          this.setStatus(field, null, "success");
          return true;
        }
      } else {
        this.setStatus(field, null, "success");
        return true;
      }
    }
  }

  setStatus(field, message, status) {
    const errorMessage = field.parentElement.querySelector(".error-message");

    if (status == "success") {
      if (errorMessage) {
        errorMessage.innerText = "";
      }
      field.classList.remove("input-error");
    }

    if (status == "error") {
      errorMessage.innerText = message;
      field.classList.add("input-error");
    }
  }
}

const form = document.querySelector(".loginForm");

if (form) {
  const fields = ["username", "password"];
  const validator = new Login(form, fields);
}
