
// variable to store the width and height.
let numOfCols = 1;
let numOfRows = 1;


// adding listener to the submit button to trigger calling makeGrid().
const submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
    event.preventDefault();
    // Retreiving the number of cols and rows in the table.
    numOfRows = document.getElementById("inputHeight").value
    numOfCols = document.getElementById("inputWidth").value
    makeGrid()
})

/* 
 * When size is submitted by the user, call makeGrid()
 * this method uses the width and heigt from user inputs, 
 * then draw all of these cells, attaching click event lisetner to them, 
 * so that when user click one them the color changes based
 * on the color selected by the user. 
 */
function makeGrid() {

    const table = document.getElementById("pixelCanvas")
    
    // clear any previous added rows.
    table.innerHTML = ""

    // looping to add rows to the table.
    for (let row = 0; row < numOfRows; row++) { 
        // create the <tr>
        const tr = document.createElement("tr")
        
        // adding td to each table row based on the widht or the number of 
        // columns provided by the user.
        for (let col = 0; col < numOfCols; col++) {
            const td = document.createElement("td")
            td.className = "pixel"
            tr.appendChild(td)
        }
        table.insertBefore(tr, table.firstChild)
    }


    const colorPicker = document.getElementById("colorPicker")

    // getting all cells from the table.
    const tableCells = document.getElementsByClassName("pixel")
    // Adding click event listeners to each table data/cell.
    // so that it changes the background of it to the color selected by the user.
    for (let index = 0; index < tableCells.length; index++) {        
        tableCells[index].addEventListener("click", (event) => { 
            event.preventDefault();
            event.target.style.background = colorPicker.value
        })
    }

}
