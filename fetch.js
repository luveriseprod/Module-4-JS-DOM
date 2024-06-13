// console.log(fetch("http://dummyjson.com/users"));

// fetch("http://dummyjson.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch("https://dummyjson.com/users/add", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     firstName: "Muhammad",
//     lastName: "Ovi",
//     age: 250,
//     /* other user data */
//   }),
// })
//   .then((res) => res.json())
//   .then(console.log)

// console.log('/////////////////////////////');

// let skipUsers = 0;

// function addUsers(users) {
//   const divDynamic = document.getElementById("dynamic");
//   let userElements = users.map((user) => {
//     let { firstName, age } = user;
//     let userCard = document.createElement("div");
//     userCard.className = "card";
//     userCard.innerText = `${firstName}, ${age}`;
//     return userCard;
//   });
// divDynamic.innerHTML = ""
//   divDynamic.append(...userElements);
// }

// async function nextUsers() {
//   let data = await fetch(
//     `http://dummyjson.com/users?limit=10&skip=${skipUsers}`
//   ).then((res) => res.json());
//   console.log(data);
//   skipUsers += 5;

//   addUsers(data.users);
// }
// nextUsers();

function mouse () {
  console.log("hi");
}


let salaries = {
  Alex: {
    name: 1,
    age: 2,
  },
  // Bob: 200,
  // Artur: 100,
  // Martin: 10,
  // Ivan: 20,
  // Vladimir: 500,
  // Artem: 250,
  // Stanly: 500,
  // Charly: 0
}


function sumSalaries (object) {
//  let arr = Object.keys(object)
//  let arr = Object.values(object) // преобразование значений объекта
 let arr = Object.entries(object)
 console.log();
}

sumSalaries (salaries)

const abjArr = Object.entries(salaries);

abjArr.forEach(([key, value]) => {
    console.log();
});