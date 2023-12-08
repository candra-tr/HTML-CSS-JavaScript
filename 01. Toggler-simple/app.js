let toggler = document.getElementById("switch");

toggler.addEventListener("click", function () {
  //   if (toggler.checked === true) {
  //     document.body.style.backgroundColor = "black";
  //   } else {
  //     document.body.style.backgroundColor = "white";
  //   }

  document.body.style.background = toggler.checked ? "black" : "white";
});
