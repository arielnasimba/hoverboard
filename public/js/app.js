let body = document.body;
let main_box = body.firstElementChild;

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (let rows = 0; rows < 36; rows++) {
    // create a new row
    let row = document.createElement("div");
    // flexbox necessary to align boxes
    row.style.display = "flex"; 
    for (let col = 0; col < 30; col++) {
        let box = document.createElement("div");
        box.classList.add("boxes")
        box.style.background = "rgba(67, 63, 62, 0.84)";
        box.style.height = "20px";
        box.style.width = "20px";
        box.style.marginRight = "2px"; 
        box.style.marginTop = "2px"; 
        // put transition of 1.1s for background and 1.2s for opacity
        box.style.transition = "background 1.1s, opacity 1.2s"; 

        row.appendChild(box);
        box.addEventListener("mouseover", function () {
            // change color randomdly
            box.style.background = getRandomColor();

            setTimeout(function () {
                //set original background color 
                box.style.background = "rgba(67, 63, 62, 0.84)"; 
                box.style.opacity = "1";
            }, 700); 
        });

    }
    //put new row in main box div
    main_box.appendChild(row);
}
