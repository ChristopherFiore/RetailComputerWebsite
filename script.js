// ---COUNT WHEN ADDING TO CART--
var itemCount = 0;

function IncrementCartCount() {
    itemCount = itemCount + 1;
    UpdateCountDisplay();
}

function UpdateCountDisplay() {
    document.getElementById("counter").innerHTML = itemCount;
}

// ---CODE FOR FLEX DIRECTION WHEN RESIZING
window.addEventListener('resize', function(event){
    // THIS WORKS
    var screenWidth = window.innerWidth;
    if (screenWidth < parseInt("800px", 10)) {
        document.getElementById("pc").style.flexDirection = "column";
        //document.body.style.background = 'red';
    } else {
        document.getElementById("pc").style.flexDirection = "row";
    }
});