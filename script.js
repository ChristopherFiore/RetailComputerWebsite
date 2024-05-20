// ---COUNT WHEN ADDING TO CART--
var itemCount = 0;

function IncrementCartCount() {
    itemCount = itemCount + 1;
    UpdateCountDisplay();
}

function UpdateCountDisplay() {
    document.getElementById("counter").innerHTML = itemCount;
}

// ---FUNCTIONAILTY WHEN ADDING ITEM TO CART---              (Displaying Count on cart JS feature)
function ChangePcBoxClass(idOfPc) {
    document.getElementById(idOfPc).src = "images/addedToCart.png";
    // Keep here for 2 seconds
    setTimeout(() => { document.getElementById(idOfPc).src = "images/pcImage.png";
 }, 1500)
}
function ChangeLaptopBoxClass(idOfPc) {
    document.getElementById(idOfPc).src = "images/addedToCart.png";
    // Keep here for 2 seconds
    setTimeout(() => { document.getElementById(idOfPc).src = "images/laptopImage.png";
 }, 1500)
}

// ---HOVERING OVER PC FOR STATS---                          (Diplaying Stats JS feature)
function DisplayStats(stat, pcImage) {
    document.getElementById(stat).src = "images/pcSpecs.png";
    document.getElementById(pcImage).style.opacity = "0.0";
}
function RegularDisplay(stat, pcImage) {
    document.getElementById(stat).src = "images/backgroundPic.png";
    document.getElementById(pcImage).style.opacity = "1.0";
}

// ---CHANGING IMAGE TO GIF---                               (Animation JS feature)
function ImgToGif() {
    document.getElementById("pcGif").src = "images/pcGif.gif";
    document.getElementById("pcGif").style.transform = "scale(1.1,1.1)";
    document.getElementById("pcGif").style.cursor = "pointer";
    document.getElementById("pcGif").style.transition = "transform 0.3s ease, color 0.3s ease";
}
function GifToImg() {
    document.getElementById("pcGif").src = "images/pcGif.png";
    document.getElementById("pcGif").style.transform = "scale(1,1)";
    document.getElementById("pcGif").style.transition = "transform 0.3s ease, color 0.3s ease";
}
function LaptopEnhance() {
    document.getElementById("laptopGif").style.transform = "scale(1.1,1.1)";
    document.getElementById("laptopGif").style.cursor = "pointer";
    document.getElementById("laptopGif").style.transition = "transform 0.3s ease, color 0.3s ease";
}
function LaptopDehance() {
    document.getElementById("laptopGif").style.transform = "scale(1,1)";
}

// ---CODE FOR FLEX DIRECTION WHEN RESIZING                 (Resizing JS feature)
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