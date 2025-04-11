document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("taskForm");
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = input.value;

    if (taskText !== "") {
      const li = document.createElement("li");
      const p = document.createElement("p");
      const img = document.createElement("img");

      p.textContent = taskText;
      img.src = "assets/trash-solid.svg";
      img.alt = "Delete task";

      li.appendChild(p);
      li.appendChild(img);

      taskList.appendChild(li);
      input.value = "";

      img.addEventListener("click", () => {
        taskList.removeChild(li);
      });
    }
  });
});
