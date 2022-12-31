const body = document.querySelector("body");
const container = document.querySelector("div.container");

createGrid(1); // init

const colors = ['#ff0000', '#00ff00', '#0000ff'];

const btn = document.querySelector("button");

function renderRandomColor(gridItem) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    gridItem.style.backgroundColor = randomColor;
}

btn.addEventListener("click", (e) => {
  const x = prompt("What do you want the dimension of the grid to be?");
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
