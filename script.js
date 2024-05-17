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
    //  Variables
    var screenWidth = window.innerWidth;
    var leftColumn = document.getElementById("pcLeft");
    var rightColumn = document.getElementById("pcRight");
    var leftBorder = document.getElementById("leftBorder");
    var rightBorder = document.getElementById("rightBorder");

    // Functionality
    if (screenWidth < parseInt("800px", 10)) {
        document.getElementById("pc").style.flexDirection = "column";
        leftColumn.style.width = "60vw";
        leftBorder.style.width = "20vw";
        rightBorder.style.width = "20vw";
    } else {
        document.getElementById("pc").style.flexDirection = "row";
    }
});