document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("taskForm");
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  function saveTasks() {
    const tasks = [];

    taskList.querySelectorAll("li p").forEach((p) => tasks.push(p.textContent));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTasks() {
    const tasksStr = localStorage.getItem("tasks");

    if (tasksStr) {
      const tasks = JSON.parse(tasksStr);

      tasks.forEach((taskText) => addTask(taskText));
    }
  }

  function addTask(taskText) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const img = document.createElement("img");

    p.textContent = taskText;
    img.src = "assets/trash-solid.svg";
    img.alt = "Delete task";

    li.appendChild(p);
    li.appendChild(img);
    taskList.appendChild(li);

    img.addEventListener("click", () => {
      taskList.removeChild(li);

      saveTasks();
    });
  }

  loadTasks();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskText = input.value;
    if (taskText !== "") {
      addTask(taskText);
      input.value = "";
      saveTasks();
    }
  });
});
