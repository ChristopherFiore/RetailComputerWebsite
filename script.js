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
window.addEventListener('resize',Resize);
    //  Variables
function Resize() {
    var screenWidth = window.innerWidth;
    var leftColumn = document.getElementById("pcLeft");
    var rightColumn = document.getElementById("pcRight");
    var leftBorder = document.getElementById("leftBorder");
    var rightBorder = document.getElementById("rightBorder");

    // Functionality
    if (screenWidth < parseInt("800px", 10)) {
        document.getElementById("pc").style.flexDirection = "column";
        leftColumn.style.width = "70vw";
        rightColumn.style.width = "70vw";
        // Left Border
        leftBorder.style.width = "15vw";
        leftBorder.style.height = "300vh";
        leftBorder.style.minHeight = "2100px";
        // Right Border
        rightBorder.style.width = "15vw";
        rightBorder.style.height = "300vh";
        rightBorder.style.minHeight = "2100px"
    } else {
        document.getElementById("pc").style.flexDirection = "row";
        leftColumn.style.width = "30vw";
        rightColumn.style.width = "30vw";
        // Left Border
        leftBorder.style.width = "15vw";
        leftBorder.style.height = "150vh";
        leftBorder.style.minHeight = "1000px";
        // Right Border
        rightBorder.style.width = "15vw";
        rightBorder.style.height = "150vh";
        rightBorder.style.minHeight = "1000px"
    }
};