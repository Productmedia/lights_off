const cells = document.getElementsByClassName("cell");
const levelInfo = document.getElementById("level");
let lightsOff;
let level = 1;

const turnOnRandomLights = level => {
    let randLight;
    levelInfo.innerHTML = level;
    
    for(let i = 0; i < level; i++) {
        randLight = Math.floor(Math.random() * cells.length);
        
        
        cells[randLight].classList.toggle("light");
        turnOnSurroundingLights(randLight);
    }

}


// input from the user.
for(let cell = 0; cell < cells.length; cell++) {
    cells[cell].addEventListener("click", () => {
        cells[cell].classList.toggle("light");
        turnOnSurroundingLights(cell);
        lightsOff = true;
        
        for(let cell = 0; cell < cells.length; cell++) {
            if((cells[cell].classList.contains("light"))) {
                lightsOff = false;
            }
        }

        
        if(lightsOff) {
            level++;
            setTimeout(turnOnRandomLights, 700, level);
        }

    })
}


const turnOnSurroundingLights = (cell) => {

    cell - 5 >= 0 ? cells[cell - 5].classList.toggle("light") : null; // top cell 

    (cell - 1 >= 0) && !(cell % 5 == 0) ? cells[cell - 1].classList.toggle("light") : null; // left cell

    cell + 5 < cells.length ? cells[cell + 5].classList.toggle("light") : null; // bottom cell

    (cell + 1 < cells.length) && !((cell + 1) % 5 == 0) ? cells[cell + 1].classList.toggle("light") : null; // right cell
}

turnOnRandomLights(level);




