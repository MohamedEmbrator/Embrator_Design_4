// Scroll Button
const scrollButton = document.querySelector(".scroll-btn");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 150) {
    scrollButton.classList.add("show");
  } else {
    if (scrollButton.classList.contains("show"))
      scrollButton.classList.remove("show");
  }
});

scrollButton.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

// Skills Section
const skillsSection = document.querySelector(".our-skills");
const spans = document.querySelectorAll(".progress span");

window.addEventListener("scroll", function () {
  if (window.scrollY >= skillsSection.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.text;
    });
  }
});

// Events Section
const countDownDate = new Date("Jun 20, 2028 23:59:59").getTime();

let counter = setInterval(() => {
  const dateNow = new Date().getTime();
  const dateDifference = countDownDate - dateNow;
  const days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(dateDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(dateDifference % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(dateDifference % (1000 * 60) / 1000);
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
}, 1000);

// Stats Section
const nums = document.querySelectorAll(".stats .number");
const statsSection = document.querySelector(".stats");
let started = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) nums.forEach((num) => startCount(num));
    started = true;
  }
});

function startCount(element) {
  let num = element.dataset.number;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == num) clearInterval(count);
  }, 2000 / num);
}
