function login() {
  const url = "https://api-login-cdv6.onrender.com/api/v1/auth/login";

  let email = document.getElementById("email");
  let senha = document.getElementById("senha");
  let messageError = document.getElementById("messageError");

  if (email.value === "" || senha.value === "") {
    messageError.innerHTML = "Campos email e/ou senha estão vazios!";
  } else {
    
    let dados = {
      email: email.value,
      password: senha.value,
    };

    let dadosJSON = JSON.stringify(dados);

    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: dadosJSON,
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === 401) {
          messageError.innerHTML = data.message;
        } else {
          window.alert(`token:{${data.token}}`);
          setTimeout(function () {
            window.location.href = `dashboard.html`;
          }, 3000);
        }
      });
  }
}
