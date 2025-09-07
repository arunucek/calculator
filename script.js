const display = document.getElementById("display");
console.log("this is my calculator");

function appendtodisplay(input) {
    display.value+=input;
}

function cleardisplay() {
    display.value="";
}

function calculate() {
    try{
        display.value=eval(display.value);
    }
    catch(error)
    {
        display.value = "Error";
    }
    
}