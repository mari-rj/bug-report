document.getElementById("bugForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let title = document.getElementById("bugTitle").value;
  let description = document.getElementById("bugDescription").value;

  let bug = document.createElement("div");
  bug.classList.add("bug");
  bug.innerHTML = `<strong>${title}</strong>: ${description} <button onclick="resolveBug(this)">Resolve</button>`;

  document.getElementById("bugList").appendChild(bug);

  document.getElementById("bugTitle").value = "";
  document.getElementById("bugDescription").value = "";
});

function resolveBug(button) {
  button.parentElement.style.textDecoration = "line-through";
  button.remove();
}
