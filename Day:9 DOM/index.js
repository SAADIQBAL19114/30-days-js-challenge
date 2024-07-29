// Activity 1
// Task 1
document.getElementById('pId').textContent = "this is changed text"

// Task 2
document.querySelector('.btn').style.backgroundColor = "red"

// Activity 2
// Task 3
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";
document.body.appendChild(newDiv);

// Task 4
let newLi = document.createElement("li");
newLi.textContent = "New list item";
document.getElementById("ulList").appendChild(newLi);

// Activity 3
// Task 5
let elementToRemove = document.getElementById("pId");
elementToRemove.parentNode.removeChild(elementToRemove);

// Task 6
let parentElement = document.getElementById("ulList");
if (parentElement.lastChild) {
  parentElement.removeChild(parentElement.lastChild);
}

// Activity 4
// Task 7
document.getElementById("imageId").setAttribute("src", "newImagePath.png");

// Task 8
let elementToModify = document.getElementById("imageId");
elementToModify.classList.add("newClass");
elementToModify.classList.remove("oldClass");

// Activity 5
// Task 9
document.getElementById("btnChangeText").addEventListener("click", function () {
  document.getElementById("paragraphToChange").textContent =
    "Paragraph text changed!";
});

// Task 10
document.getElementById("hoverDiv").addEventListener("mouseover", function () {
  this.style.borderColor = "red";
});
