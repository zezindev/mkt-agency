const slides = document.querySelectorAll(".slide")
const pagination = document.querySelector(".pagination")
const prevButton = document.querySelector(".prev")
const nextButton = document.querySelector(".next")

let currentIndex = 0

function updatePagination() {
  pagination.innerHTML = ""
  slides.forEach((_, index) => {
    const button = document.createElement("button")
    button.classList.add("pagination-button")
    if (index === currentIndex) {
      button.classList.add("active")
    }
    button.addEventListener("click", () => {
      goToSlide(index)
    })
    pagination.appendChild(button)
  })
}

function goToSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 *(0 - index)}%)`
  })
  currentIndex = index
  updatePagination()
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    goToSlide(currentIndex - 1)
  }
})

nextButton.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    goToSlide(currentIndex + 1)
  }
})

updatePagination()
