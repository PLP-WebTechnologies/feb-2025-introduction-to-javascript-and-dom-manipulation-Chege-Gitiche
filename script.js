// Change text dynamically
document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.getElementById("description").textContent = "The text has been updated!";
  });
  
  // Modify CSS style via JavaScript
  document.getElementById("changeStyleBtn").addEventListener("click", function () {
    const styleTarget = document.getElementById("styleMe");
    styleTarget.style.color = "white";
    styleTarget.style.backgroundColor = "teal";
    styleTarget.style.padding = "10px";
    styleTarget.style.borderRadius = "8px";
  });
  
  // Add a new element
  document.getElementById("addElementBtn").addEventListener("click", function () {
    const newElement = document.createElement("p");
    newElement.textContent = "I'm a new paragraph!";
    newElement.id = "newPara";
    document.getElementById("elementContainer").appendChild(newElement);
  });
  
  // Remove the added element
  document.getElementById("removeElementBtn").addEventListener("click", function () {
    const existing = document.getElementById("newPara");
    if (existing) {
      existing.remove();
    }
  });
  