const button = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;

button.addEventListener("click", function () {
  console.log(input.value);
});
