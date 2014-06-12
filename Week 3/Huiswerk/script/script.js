document.getElementById("submit-button").onclick = function () {
    event.preventDefault();

    var getInput = document.getElementById("addItem").value;

    var item = new todoListItem("item");
    item.addListItem = getInput;

}

document.getElementsByClassName("removeButton").onclick = function () {
    console.log("yay");
}



