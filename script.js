const body = document.querySelector("body");
const container = document.querySelector("div.container");

createGrid(1); // init

const COLORS = ['#ff0000', '#00ff00', '#0000ff'];
const PROMPT_MSG = "What do you want the dimension of the grid to be?";
const WARNING_MSG = "Please enter a positive value less than or equal to 100";

const btn = document.querySelector("button");

function renderRandomColor(gridItem) {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    gridItem.style.backgroundColor = randomColor;
}

btn.addEventListener("click", (e) => {
  let x = prompt(PROMPT_MSG);

  while (Number(x) && Number(x) > 100) {
    alert(WARNING_MSG);
    x = prompt(PROMPT_MSG);
  }

  createGrid(x);
});

function createGrid(dimension) {
  container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;

  const total = dimension * dimension;

  container.innerHTML = "";

  for (let i = 0; i < total; i++) {
    const newItem = document.createElement("div");
    newItem.setAttribute("id", `item-${i}`);
    newItem.classList.add("grid-item");

    newItem.addEventListener("mouseover", (e) => {
        renderRandomColor(newItem);
    });

    container.appendChild(newItem);
  }
}
