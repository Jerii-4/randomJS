let count = 0;
function increment() {
  count += 1;
  document.getElementById("count-el").innerText = count;
}

function save() {
  let entry = count + " - ";
  document.getElementById("save-el").textContent += entry;
  document.getElementById("count-el").innerText = 0;
  count = 0;
}
