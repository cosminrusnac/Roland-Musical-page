// class for authentication and save jwt token in localstorage

class Auth {
  constructor() {
    const jwtToken = localStorage.getItem("token");
    this.validateAuth(jwtToken);
  }

  validateAuth(auth) {
    // cal api to validate jwt token *not present in fakeapistore
    if (
      (auth == undefined || auth.length < 20) &&
      window.location.href.indexOf("/LoginPage") < 0
    ) {
      window.location.replace("/LoginPage/");
    } else {
      //what to do if logged in && refresh token or else
    }
  }

  logOut() {
    localStorage.removeItem("token");
    window.location.replace("/LoginPage/");
  }
}

// instantiate class for auth

const auth = new Auth();

document.querySelector(".logout").addEventListener("click", (e) => {
  auth.logOut();
});
