const usuarioCliente = {
  nome: "Carol Cliente",
  login: "cliente123",
  senha: "123"
};

const usuarioFuncionario = {
  nome: "Carol Funcionária",
  login: "func123",
  senha: "456"
};

const btnEntrar = document.getElementById("btnEntrar");
const btnCliente = document.getElementById("btnCliente");
const btnFuncionario = document.getElementById("btnFuncionario");

const secaoEscolha = document.getElementById("escolha");
const secaoLogin = document.getElementById("login");
const tipoLogin = document.getElementById("tipoLogin");

const form = document.getElementById("loginForm");
const msg = document.getElementById("mensagem");
const painel = document.getElementById("painel");
const sair = document.getElementById("sair");

let tipo = "";

btnEntrar.addEventListener("click", () => {
  secaoEscolha.classList.remove("hidden");
  secaoEscolha.scrollIntoView({ behavior: "smooth" });
});

btnCliente.addEventListener("click", () => {
  tipo = "cliente";
  tipoLogin.textContent = "Login - Cliente";
  secaoLogin.classList.remove("hidden");
  secaoLogin.scrollIntoView({ behavior: "smooth" });
});

btnFuncionario.addEventListener("click", () => {
  tipo = "funcionario";
  tipoLogin.textContent = "Login - Funcionário";
  secaoLogin.classList.remove("hidden");
  secaoLogin.scrollIntoView({ behavior: "smooth" });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let usuario = tipo === "cliente" ? usuarioCliente : usuarioFuncionario;

  if (username === usuario.login && password === usuario.senha) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    secaoLogin.classList.add("hidden");
    secaoEscolha.classList.add("hidden");
    painel.classList.remove("hidden");
  } else {
    msg.textContent = "Usuário ou senha inválidos.";
    msg.style.color = "#cc0000";
  }
});

sair.addEventListener("click", () => {
  painel.classList.add("hidden");
  document.querySelector(".hero").scrollIntoView({ behavior: "smooth" });
});

const btnClienteInteressado = document.querySelector(".btn-cliente");
const secaoFormulario = document.getElementById("formulario");
const formCliente = document.getElementById("formCliente");
const msgForm = document.getElementById("msgForm");

btnClienteInteressado.addEventListener("click", (e) => {
  e.preventDefault();
  secaoFormulario.classList.remove("hidden");
  secaoFormulario.scrollIntoView({ behavior: "smooth" });
});

formCliente.addEventListener("submit", function (e) {
  e.preventDefault();
  msgForm.textContent = "Mensagem enviada com sucesso! Entraremos em contato.";
  formCliente.reset();
});
