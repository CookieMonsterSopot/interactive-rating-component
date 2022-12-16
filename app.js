let circles = document.querySelectorAll(".circle"); //all divs with numbers//
let btn = document.getElementById("btn"); // button //
let ratingSide = document.querySelector(".evaluation"); // evalutation div //
let thankyouSide = document.querySelector(".thankyou"); // thank you div //
let span = document.getElementById("rating"); // empty span where the user selected rating will be displayed//

// Looping through all the number divs//
for (let i = 0; i < circles.length; i++) {
  // Listening for a click event on each number div //
  circles[i].addEventListener("click", () => {
    // getting the clicked number value property from 1 to 5//
    let rating = ratings[i].innerHTML;

    // looping through the numbers to check for a previously selected rating and removing if such. //
    // Necessary in order to have only one rating selected at a time //
    // for (let i = 0; i < ratings.length; i++) {
    //   ratings[i].classList.contains("selected");
    //   ratings[i].classList.remove("selected");
    // }

    // add the selected class which highlights the selected rating //
    circles[i].classList.add("selected");

    // listening for a click on the btn in order to hide the current div and display the Thank You div with the chosen rating in the span //
    btn.addEventListener("click", () => {
      ratingSide.style.display = "none";
      thankyouSide.style.display = "block";
      span.innerHTML = rating;
    });
  });
}