const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
  // Ici il faudra appeler l'API pour vérifier les credentials en BDD

  if(mailInput.value == "abdoulmali@hotmail.fr" && passwordInput.value == "Shotokan80+"){
    //Il faudra récuperer le vrai token
    const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
    setToken(token);
    //placer ce token en cookie

    setCookie(RoleCookieName, "client", 7);
    window.location.replace("/");
  }
  else{
    mailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
  }
}