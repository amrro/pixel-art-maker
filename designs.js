// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


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

function makeGrid() {

    const table = document.getElementById("pixelCanvas")
    
    // clear any previous added rows.
    table.innerHTML = ""

    // looping to add rows to the table.
    for (let row = 0; row < numOfRows; row++) { 
        // create the <tr>
        const tr = document.createElement("tr")
        
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
    // add click event listener to each table data.
    for (let index = 0; index < tableCells.length; index++) {        
        tableCells[index].addEventListener("click", (event) => { 
            event.preventDefault();
            event.target.style.background = colorPicker.value
        })
    }

}
