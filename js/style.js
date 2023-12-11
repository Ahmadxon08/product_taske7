window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}

let modeBtn = document.getElementById("dark-light");
let main2 = document.querySelector(".main2");
let main3 = document.querySelector(".main3");
let main4 = document.querySelector(".main4");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  main2.classList.toggle("dark");
  main3.classList.toggle("dark");
  main4.classList.toggle("dark");
});
