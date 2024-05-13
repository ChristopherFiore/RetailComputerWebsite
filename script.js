// ---COUNT WHEN ADDING TO CART--
var itemCount = 0;
document.getElementById("counter").textContent=itemCount;

function IncrementCartCount() {
    itemCount = itemCount + 1;
    UpdateCountDisplay(); 
}

function UpdateCountDisplay() {
    document.getElementById("counter").innerHTML=itemCount;
}