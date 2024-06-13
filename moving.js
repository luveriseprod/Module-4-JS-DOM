let golastbtn = document.getElementById("goToLast");
let goTopBtn = document.getElementById("goTop");
let lastCard = document.querySelectorAll(".card") [document.querySelectorAll(".card").length - 1 ]
console.log(golastbtn);
console.log(lastCard);

golastbtn.addEventListener("click", () => {
  lastCard.scrollIntoView({behavior: "smooth"})
}) // scroll low down

goTopBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"})
}) // scroll low up
