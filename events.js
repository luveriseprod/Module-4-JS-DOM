//click,mousedown, mouseup Клик нажатие иподнятие
//mouseover, mouseout наводим и уводим мышь 
//keydown, keyup наводим и уводим клаву
//submit



// document.querySelector(".card").onclick = function () => alert("Wow")

// document.querySelector(".card").onclick = (e) => {
//     console.log(e.target);
// }

console.log(document.querySelectorAll(".card"));
document.querySelectorAll(".card").forEach((card) => {
    // card.onclick = () => console.log("123"); перезапись
    card.addEventListener("click", (e) => {
        console.log("123"); // новое
        let text = e.target.innerHTML;
        console.log(`This is card with ${text}.`);
    })
})

const logHey = () => {
    console.log(`Hey!`);    
}
let x = 0;
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseover", logHey)
    x++;
})
document.querySelectorAll(".card").forEach((card) => {
    x!==10 ? card.removeEventListener("mouseover", logHey) : "NO bad"
})

let input = document.getElementsByTagName("input")[0];

input.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log("Input!")
})
