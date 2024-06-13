let newCard = document.createElement("div");
newCard.className = "card";
newCard.innerText = "6";
let container = document.querySelector(".container");
container.append(newCard);

// container.prepend(newCard);

// container.before(newCard);
// container.after(newCard);
// container.replaceWith(newCard); // Замена всего контейнера newCard

container.insertAdjacentHTML(
  "beforeend",
    `<div class="card">6</div>
    <div class="card">7</div>
    <div class="card" data-myCla="dd">8
    <script  class="sdfs">dsf</script>
    </div>
    <div id="card4" class="card">9</div>
    <div class="card">10</div>`
); // Добавление новых элементов в конец

let lastCard = container.lastElementChild
console.log(lastCard);
lastCard.remove(); // удаление последнего элемента

newCard.classList.add("warning");
newCard.classList.remove("card")
document.getElementsByTagName("input")[0].value = "Good Bye";