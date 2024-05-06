console.log("it works")

const container = document.querySelector("#container");


let width = 400;
let height = 400;
let num = prompt('size of grid?')
let grid = num * num

for (let i = 0; i < grid; i++) {
    newDiv = document.createElement('div');
    newDiv.classList.add('box');
    newDiv.style.width = width/num + 'px';
    newDiv.style.height = height/num + 'px';
    container.appendChild(newDiv);
    // newDiv.addEventListener("mouseenter", change);
    
}

// get node list of all boxes
let boxes = document.querySelectorAll(".box"); 

// add event listener to all boxes
boxes.forEach(function(box) {
    box.addEventListener("mouseenter", function() {
        box.style.backgroundColor = 'yellow';
    });
    console.log("it now works");
})
