const body = document.querySelector('body');
const container = document.querySelector('div.container');

createGrid(1); // init

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    const x = prompt('What do you want the dimension of the grid to be?'); 
    createGrid(x);
});

function createGrid(dimension) {
    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    // container.style.gridTemplateRows = `repeat(${x}, 1fr)`;

    const total = dimension * dimension;

    container.innerHTML = "";

    for (let i = 0; i < total; i++) {
    const newItem = document.createElement('div');
    newItem.setAttribute('id', `item-${i}`);
    newItem.classList.add('grid-item');
    newItem.innerText = `grid-item-${i}`;
    
    newItem.addEventListener('mouseover', (e) => {
        newItem.style.backgroundColor = "yellow";
    });

    container.appendChild(newItem);
    }
}
