const header = document.createElement("div");
header.className = "header";
header.textContent = "Etch - a - Sketch";
document.getElementById("body").appendChild(header);


const mainContainer = document.createElement("div");
mainContainer.className = "main-container";


let gridContainer = document.createElement("div");
let size=8
gridContainer.className = "grid-container";
gridContainer.style.width ="900px"

addSquares(size);


const optionsContainer = document.createElement("div");
optionsContainer.className = "options-container";
optionsContainer.style.width =27*size+"px"
mainContainer.appendChild(optionsContainer);
mainContainer.appendChild(gridContainer);


const allSquares = document.getElementsByClassName("square");

function addSquares(nr) {
    let i = 1;
while (i <= nr*nr) {
  let square = document.createElement("div");
  square.className = "square";
  square.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "black";
  });
  gridContainer.appendChild(square);
  i++;
}}

function resetGrid() {
  let i = 0;
  while (i < allSquares.length) {
    allSquares[i].style.backgroundColor = "white";
    i++;
  }
}
function setSizeGrid(){
   let newSize = Number(prompt("Set nr of rows/columns","8"));
   console.log(" new size: "+newSize);

 
  
    
    while(gridContainer.children.length != 0)
    {gridContainer.removeChild(document.querySelector(".square"));}

    gridContainer.style.width =27*newSize+"px";

    console.log(" new width: "+gridContainer.style.width);
    addSquares(newSize);

   }
 
   function setSizeGrid2(){
       
    while(gridContainer.children.length != 0)
    {gridContainer.removeChild(document.querySelector(".square"));}
    addSquares(newSize);
    let newSize = Number(prompt("Set nr of rows/columns","8"));
    console.log(" new size: "+newSize);
 
    let i = 0;
    while (i < allSquares.length) {
      allSquares[i].style.width = gridContainer.style.width/newSize;
      allSquares[i].style.height = gridContainer.style.width/newSize;
      i++;
    }
   }


const resetButton = document.createElement("button");
resetButton.className = "reset-button";

resetButton.textContent = "ResetGrid";
resetButton.addEventListener("click", resetGrid);

optionsContainer.appendChild(resetButton);


const setSizeButton = document.createElement("button");
setSizeButton.className = "size-button";

setSizeButton.textContent = "SetSize";

setSizeButton.addEventListener("click", setSizeGrid2);
optionsContainer.appendChild(setSizeButton);

document.getElementById("body").appendChild(mainContainer);
