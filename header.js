window.addEventListener("scroll", function () {
  var header = document.querySelector("header")
  if (window.scrollY > 100) {
    // Mude para a quantidade de rolagem desejada
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})
