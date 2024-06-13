// console.log(document);
// console.log(document.documentElement);

// document.body.style.backgroundColor = 'blue'

// // firstChild, lastChild, childNodes, firstElemnetchild, lastElemnetchild

// console.log(document.body.childNodes);
// console.log(document.body.children[0]);
// console.log(document.body.children[0].children);
// console.log(document.body.children[0].lastElementChild);

// console.log(Array.from(document.body.children).forEach)

// for (let el of document.body.children[0].children) {
//     console.log(el);
// }

// Array.from(document.body.children[0].children).forEach((element) => {
//     console.log(element);
// })

//parentElement
// nextSibling previousSibling 

// nextElementSibling previousElementSibling 

// Array.from(document.body.children[0].children).forEach((element) => {
//   console.log(element.nextElementSibling);
// })

// getElementById querySelector
// console.log(document.getElementById("card4"));
// console.log(document.querySelectorAll(".card"));
// querySelectorAll getElementsByName getElementsByTagName getElementsByClassName 
console.log(document.querySelectorAll(".card"));
console.log(document.getElementsByTagName("script"));
document.body.style.backgroundColor = 'blue';
// Array.from(document.body.children[0].children).forEach((element) => {
//     console.log(element);
// })

document.getElementById("card4").style.backgroundColor = 'red';
document.querySelector(".card").style.backgroundColor = 'green';
console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll('.card')[2].getElementsByTagName("script")[0].value)
console.log((document.getElementsByClassName("card")[2].dataset.mycla))
