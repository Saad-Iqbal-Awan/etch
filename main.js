console.log("it works")

const container = document.querySelector("#container");
const getStarted = document.querySelector(".start");

getStarted.addEventListener("click", prom);

function prom() {
    let num = prompt('size of grid? Should be less than 100')
    if (num <= 100) {
        start(num);
    }
    else {
        prom()
    }
}


function start(num) {
    let width = 600;
    let height = 600;
    // let num = prompt('size of grid?');
    
    let grid = num * num;
        
    if (document.querySelectorAll(".box")) {
        let boxes = document.querySelectorAll(".box"); 
        boxes.forEach(function(box) {
            box.remove();
        })
    
    }
    
        
    for (let i = 0; i < grid; i++) {
        newDiv = document.createElement('div');
        newDiv.classList.add('box');
        newDiv.style.width = width/num + 'px';
        newDiv.style.height = height/num + 'px';
        newDiv.style.opacity = '0';
        container.appendChild(newDiv);
        // newDiv.addEventListener("mouseenter", change);
    }
        
    // get node list of all boxes
    let boxes = document.querySelectorAll(".box"); 
        
    // add event listener to all boxes
    boxes.forEach(function(box) {
        box.addEventListener("mouseenter", function() {
            opacity = box.style.opacity;
            newOpacity = Number(opacity);
            if (newOpacity < 1) {
                
                newOpacity += 0.1;
                console.log(newOpacity);
                console.log(typeof(newOpacity));
                box.style.opacity = newOpacity;
            }
            box.style.backgroundColor = 'black';
            // let red = Math.floor(Math.random() * 256);
            // let green = Math.floor(Math.random() * 256); 
            // let blue = Math.floor(Math.random() * 256);
            // box.style.backgroundColor = `rgb(${red},${green},${blue}`;
        });
        console.log("it now works");
    })
        
}

