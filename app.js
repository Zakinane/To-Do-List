//Ajout avec boutton

const paper = document.getElementsByClassName("paper")[0]; //La page
const button = document.getElementById("add"); //Le boutton
const tasks = document.getElementsByClassName("tasks")[0]; //La div des tasks

//Quand le bouton "add" est cliqué:

button.addEventListener("click", function () {
  const taskText = document.getElementById("addText").value.trim();
  if (taskText == "") {
    alert("Add a task first!");
  } else {
    //Créer une task
    const task = document.createElement("div");
    task.classList.add("task");
    tasks.appendChild(task);

    //mets le texte dedans
    const text = document.createElement("p");
    text.classList.add("text");
    text.textContent = taskText;
    task.appendChild(text);

    //Delete
    const delButton = document.createElement("button");
    delButton.classList.add("delete");
    delButton.textContent = "Del";
    task.appendChild(delButton);

    delButton.addEventListener("click", function () {
      task.remove();
    });

    //Edit
    const ediButton = document.createElement("button");
    ediButton.classList.add("edit");
    ediButton.textContent = "Edd";
    task.appendChild(ediButton);

    ediButton.addEventListener("click", function Edit() {
      const newText = prompt("Edit your task: ", text.textContent);
      if (newText === null) {
        return;
      }
      if (newText.trim() === "") {
        Edit();
      } else {
        text.textContent = newText;
      }
    });

    //Clear le champ
    addText.value = "";

    //EasterEgg :>
    const existingSpongeBob = document.querySelector("#SpongeBob");
    const existingMari = document.querySelector("#Mari");

    if (!existingMari) {
      if (taskText.trim() === "SpongeBob") {
        if (existingSpongeBob) {
          existingSpongeBob.remove();
        } else {
          const SpongeBob = document.createElement("img");
          SpongeBob.classList.add("titre");
          SpongeBob.id = "SpongeBob";
          SpongeBob.style.width = "50px";
          SpongeBob.setAttribute("src", "img/easteregg.png");
          paper.appendChild(SpongeBob);
        }
      }
    }

    //EasterEgg ;)
    if (taskText.trim() === "Mari") {
    existingMari.remove();
      existingSpongeBob.remove();
      const Mari = document.createElement("img");
      Mari.classList.add("titre");
      Mari.id = "Mari";
      Mari.style.width = "50px";
      Mari.style.display = "flex";
      Mari.setAttribute("src", "img/Mari.png");
      paper.appendChild(Mari);
    }
  }
});
