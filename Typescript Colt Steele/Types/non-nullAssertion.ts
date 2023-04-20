const btn = document.getElementById("btn")!;

btn.addEventListener("click", function () {
  alert("CLICKED!!");
});

// btn?.addEventListener("click", function () {
//   alert("CLICKED!!");
// });

// Non null assertion operator
//IF we put the "!" sign after the line of code: this tells typescript STOP WORRYING it is guaranteed not to be null.

//Use it in the situations where you are sure that the value will be found
