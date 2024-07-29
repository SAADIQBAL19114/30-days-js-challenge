// Activity 1
// Task 1
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("paragraph").textContent = "Text has been changed!";
});

// Task 2
document.getElementById("toggleImage").addEventListener("dblclick", () => {
  document.getElementById("toggleImage").style.display = "none";
});

// Activity 2
// Task 3
document.getElementById("hoverDiv").addEventListener("mouseover", () => {
  document.getElementById("hoverDiv").style.backgroundColor = "lightgreen";
});

// Task 4
document.getElementById("hoverDiv").addEventListener("mouseout", () => {
  document.getElementById("hoverDiv").style.backgroundColor = "lightblue";
});

// Activity 3
// Task 5
document.getElementById("inputField").addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Task 6
document.getElementById("inputField").addEventListener("keyup", () => {
  document.getElementById("displayParagraph").textContent =
    document.getElementById("inputField").value;
});

// Activity 4
// Task 7
document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log("Form data:", Object.fromEntries(formData.entries()));
});

// Task 8
document.getElementById("mySelect").addEventListener("change", (event) => {
  document.getElementById(
    "selectedValue"
  ).textContent = `Selected: ${event.target.value}`;
});

// Activity 5
// Task 9
document.getElementById("myList").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Clicked item:", event.target.textContent);
  }
});

// Task 10
document.getElementById("parentDiv").addEventListener("click", (event) => {
  if (event.target.classList.contains("child")) {
    console.log("Clicked child element:", event.target.textContent);
  }
});

document.getElementById("addButton").addEventListener("click", () => {
  const newChild = document.createElement("div");
  newChild.classList.add("child");
  newChild.textContent = "New Child Element";
  document.getElementById("parentDiv").appendChild(newChild);
});

