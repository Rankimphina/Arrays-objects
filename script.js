 
let tasks = [
  { id: 1, text: "Buy groceries" },
  { id: 2, text: "Read a book" },
  { id: 3, text: "Finish assignment" },
];

let nextId = 4;



for (let i = 0; i < tasks.length; i++) {

  const task      = tasks[i];
  const li        = document.getElementById("task-" + task.id);
  const checkbox  = li.querySelector("input");
  const span      = li.querySelector("span");
  const deleteBtn = li.querySelector("button");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
    tasks = tasks.filter(function (t) {
      return t.id !== task.id;
    });
  });

}



document.getElementById("addBtn").addEventListener("click", function () {
  const input = document.getElementById("taskInput");

  if (input.value === "") {
    alert("Please type a task!");
    return;
  }

  
  tasks.push({ id: nextId, text: input.value });

  
  const li        = document.createElement("li");
  const checkbox  = document.createElement("input");
  const span      = document.createElement("span");
  const deleteBtn = document.createElement("button");

  
  li.id = "task-" + nextId;

  
  checkbox.type         = "checkbox";
  span.textContent      = input.value;
  deleteBtn.textContent = "Delete";

  
  li.className        = "bg-white rounded-lg px-4 py-3 flex items-center gap-3 shadow-sm";
  checkbox.className  = "w-5 h-5 cursor-pointer";
  span.className      = "flex-1 text-gray-800";
  deleteBtn.className = "bg-gray-900 text-white text-sm px-3 py-1 rounded-lg hover:bg-gray-700";

  
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  });

  
  const currentId = nextId;
  deleteBtn.addEventListener("click", function () {
    li.remove();
    tasks = tasks.filter(function (t) {
      return t.id !== currentId;
    });
  });

  nextId++;
  input.value = "";
});