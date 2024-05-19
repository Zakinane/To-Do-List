const paper = document.getElementsByClassName("paper")[0]; //La page
const button = document.getElementById("add"); //Le boutton
const tasks = document.getElementsByClassName("tasks")[0]; //La div des tasks
const body = document.querySelector("body");
const input = document.querySelector("input");

//Créer une task
function creatTask(taskText) {
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
    updateAndSaveData();
  });

  //Edit
  const ediButton = document.createElement("button");
  ediButton.classList.add("edit");
  ediButton.textContent = "Edit";
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
      updateAndSaveData();
    }
  });
  return task;
}

//Load data
const savedData = localStorage.getItem("todoListData");
if (savedData) {
  const { todoList, easterEggs } = JSON.parse(savedData);

  //Update UI
  todoList.forEach((taskText) => {
    creatTask(taskText);
  });

  //Easter eggs
  easterEggs.forEach((egg) => {
    checkEasterEgg(egg);
  });
}

function saveData(todoList, easterEggs) {
  const jsonData = JSON.stringify({ todoList, easterEggs });
  localStorage.setItem("todoListData", jsonData);
}
//Uptade data & save
function updateAndSaveData() {
  const tasks = document.querySelectorAll(".tasks .task p");
  const todoList = Array.from(tasks).map((task) => task.textContent);

  const easterEggs = [];
  if (document.querySelector("#SpongeBob")) easterEggs.push("SpongeBob");
  if (document.querySelector("#Mari")) easterEggs.push("Mari");

  saveData(todoList, easterEggs);
}
//Fun
function checkEasterEgg(taskText) {
  if (taskText === "SpongeBob") {
    if (!document.querySelector("#Mari")) {
      if (!document.querySelector("#SpongeBob")) {
        const SpongeBob = document.createElement("img");
        SpongeBob.classList.add("titre");
        SpongeBob.id = "SpongeBob";
        SpongeBob.style.width = "50px";
        SpongeBob.setAttribute("src", "img/easteregg.png");
        paper.appendChild(SpongeBob);
        updateAndSaveData();
      } else {
        document.querySelector("#SpongeBob").remove();
        updateAndSaveData();
      }
    }
  }

  if (taskText === "Mari") {
    if (!document.querySelector("#Mari")) {
      const existingSpongeBob = document.querySelector("#SpongeBob");
      if (existingSpongeBob) existingSpongeBob.remove();

      const Mari = document.createElement("img");
      Mari.classList.add("titre");
      Mari.id = "Mari";
      Mari.style.width = "50px";
      Mari.setAttribute("src", "img/Mari.png");
      paper.appendChild(Mari);

      body.style.backgroundImage = "url(img/bluryBackgroundMari.png)";
      body.style.fontFamily = "EB Garamond";
      button.style.fontFamily = "EB Garamond";
      input.style.fontFamily = "EB Garamond";
      paper.style.backgroundImage = "url(img/lineMari.png)";
      updateAndSaveData();
    } else {
      document.querySelector("#Mari").remove();
      body.style.backgroundImage = "url(img/bluryBackground.png)";
      body.style.fontFamily = "Kraby Patty";
      button.style.fontFamily = "Kraby Patty";
      input.style.fontFamily = "Kraby Patty";
      paper.style.backgroundImage = "url(img/line.png)";
      updateAndSaveData();
    }
  }
}

button.addEventListener("click", function () {
  const taskText = document.getElementById("addText").value.trim();
  if (taskText == "") {
    alert("Add a task first!");
  } else {
    creatTask(taskText);
    document.getElementById("addText").value = ""; //Clear le champ
    checkEasterEgg(taskText);
    updateAndSaveData();


    //     //EasterEgg :>
    //     const existingSpongeBob = document.querySelector("#SpongeBob");
    //     const existingMari = document.querySelector("#Mari");

    //     if (!existingMari) {
    //       if (taskText.trim() === "SpongeBob") {
    //         if (existingSpongeBob) {
    //           existingSpongeBob.remove();
    //           updateAndSaveData();
    //         } else {
    //           const SpongeBob = document.createElement("img");
    //           SpongeBob.classList.add("titre");
    //           SpongeBob.id = "SpongeBob";
    //           SpongeBob.style.width = "50px";
    //           SpongeBob.setAttribute("src", "img/easteregg.png");
    //           paper.appendChild(SpongeBob);
    //           updateAndSaveData();
    //         }
    //       }
    //     }

    //     //EasterEgg ;)
    //     if (taskText.trim() === "Mari") {
    //       if (existingMari) {
    //         //Reset
    //         existingMari.remove();
    //         body.style.backgroundImage = "url(img/bluryBackground.png)";
    //         body.style.fontFamily = "Kraby Patty";
    //         button.style.fontFamily = "Kraby Patty";
    //         input.style.fontFamily = "Kraby Patty";
    //         paper.style.backgroundImage = "url(img/line.png)";
    //         updateAndSaveData();
    //         return;
    //       }
    //       //start
    //       if (existingSpongeBob) {
    //         existingSpongeBob.remove();
    //       }
    //       const Mari = document.createElement("img");
    //       Mari.classList.add("titre");
    //       Mari.id = "Mari";
    //       Mari.style.width = "50px";
    //       Mari.setAttribute("src", "img/Mari.png");
    //       paper.appendChild(Mari);

    //       body.style.backgroundImage = "url(img/bluryBackgroundMari.png)";
    //       body.style.fontFamily = "EB Garamond";
    //       button.style.fontFamily = "EB Garamond";
    //       input.style.fontFamily = "EB Garamond";
    //       paper.style.backgroundImage = "url(img/lineMari.png)";
    //       updateAndSaveData();
    //     }
  }
});
