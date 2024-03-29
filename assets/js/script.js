// I used https://henriqueperoni.github.io/CI-MS2-Magic-Island/ Things To Do Section to assist me in creating the code below -*/

const navSlide = () => {
  const thingstodo = document.querySelector("section#thingstodo");
  const nav = document.querySelector(".nav-links");
  const navClose = document.querySelectorAll(".nav-anchor");

// I used https://www.codecademy.com/forum_questions/5093e0a0cdbd510200000548 to assist me in creating the code below -*/

  // Close the option by clicking any of the navigation bar links
  for (i = 0; i < navClose.length; i++) {
    navClose[i].addEventListener("click", () => {
      nav.classList.toggle("nav-active");
    });
  }
};

navSlide();

// Selecting between beaches, nightclubs and activities in Things To Do

function chooseCategory(chosen) {
  const choices = document.getElementsByClassName("choices");

  for (i = 0; i < choices.length; i++) {
    choices[i].style.display = "none";
  }

  document.getElementById(chosen).style.display = "flex";
}

function choosePlace(chosen) {
  const choices = document.getElementsByClassName("info");
  for (i = 0; i < choices.length; i++) {
    choices[i].style.display = "none";
  }

  document.getElementById(chosen).style.display = "block";
}