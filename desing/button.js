(function () {
  let validador_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let send_email = document.getElementsByClassName("button_notify")[0];
  let form = document.querySelector("form");
  let input = "input[name='email']";

  send_email.addEventListener("click", (e) => {
    e.preventDefault();

    if (validador_email.test(form.querySelector(input).value)) {
      document
        .getElementsByClassName("msj_error")[0]
        .classList.remove("active");
      form.reset();
      document.querySelector(input).classList.remove("active");
    } else {
      document.getElementsByClassName("msj_error")[0].classList.add("active");
      document.querySelector(input).classList.add("active");
      setTimeout(() => {
        document
          .getElementsByClassName("msj_error")[0]
          .classList.remove("active");
        document.querySelector(input).classList.remove("active");
      }, 3000);
    }
  });
})();
