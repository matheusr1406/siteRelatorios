document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginError = document.getElementById("login-error");

  if (username === "admin" && password === "admin") {
    window.location.href = "../Formularios/index.html";
  } else {
    loginError.innerText = "Credenciais inválidas. Tente novamente.";
    loginError.style.display = "block";
  }
});