"use-strict";

// the constants

const container = document.querySelector(".container");
const textEl = document.getElementById("text");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const increaseEl = document.getElementById("increase");
const decreaseEl = document.getElementById("decrease");
const resizeEl = document.getElementById("resize");

// the variables

let sizeEl = document.querySelector(".size");
let indexStart = 1;
let text = `Etch a Sketch`;
let speed = 200;

let color = colorEl.value;

let gridRows = 16;
let gridCols = 16;

// Creating the grid

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");

    container.appendChild(cell).className = "grid_item";

    let grids = container.childNodes;

    // the clearing function

    clearEl.addEventListener("click", () => {
      grids.forEach((element) => {
        if (element.className === "grid_item") {
          element.style.background = "";
        }
        // color = "black";
      });
    });
  }

  // border grid function

  container.addEventListener("mousemove", (e) => {
    container.style.cursor = "crosshair";

    e.target.style.backgroundColor = color;
  });
}

//create the rows

makeRows(gridRows, gridCols);
sizeEl.innerHTML = `${gridCols}:${gridRows}`;

// window.addEventListener("DOMContentLoaded", makeRows(16, 16));
textWrting();

// the sentence playing

function textWrting() {
  textEl.innerHTML = text.slice(0, indexStart);
  indexStart++;
  if (indexStart > text.length) {
    indexStart = 1;
  }
  setTimeout(textWrting, speed);
}

// pick up the color from color picker

colorEl.addEventListener("change", (e) => (color = e.target.value));

// Increase the number of the cells

increaseEl.addEventListener("click", () => {
  gridCols += 1;
  gridRows += 1;
  container.innerHTML = "";
  makeRows(gridRows, gridCols);
  if (gridCols && gridRows >= 23) {
    gridCols = 23;
    gridRows = 23;
  }
  sizeEl.innerHTML = `${gridCols}:${gridRows}`;
});

// Decrease the number of the cells
decreaseEl.addEventListener("click", () => {
  gridCols -= 1;
  gridRows -= 1;
  container.innerHTML = "";
  makeRows(gridRows, gridCols);
  if (gridCols && gridRows <= 8) {
    gridCols = 8;
    gridRows = 8;
  }
  sizeEl.innerHTML = `${gridCols}:${gridRows}`;
});

// Resize the grid
resizeEl.addEventListener("click", () => {
  container.innerHTML = "";
  gridRows = 16;
  gridCols = 16;
  makeRows(gridRows, gridCols);
  sizeEl.innerHTML = `${gridCols}:${gridRows}`;
});
