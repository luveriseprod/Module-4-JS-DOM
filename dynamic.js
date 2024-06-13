import { userCardClicker } from "./module.js"
let dynamicDiv = document.getElementById("dynamic");

let users = [
    {
        name: "Alex",
        age: 29,
    },
    {
        name: "John",
        age: 30,
    },
    {
        name: "Artur",
        age: 41,
    },
    {
        name: "Bob",
        age: 12
    }
];

// let result = []
// for (const user of users) {
    
// }

let userElements = users.map(user => {
    // let name = user.name;
    let {name, age} = user
    
    let userCard = document.createElement("div")
    userCard.className = "card";
    userCard.innerHTML = `${name}  ${age}`

    userCard.onclick = userCardClicker;
    dynamicDiv.append(userCard)
    return userCard;
})



dynamicDiv.append()