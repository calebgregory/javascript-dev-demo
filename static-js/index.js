let h1Element     = document.getElementById("title" );
let buttonElement = document.getElementById("button");

buttonElement.addEventListener('click', function() {
  let currentColor = h1Element.style.color;
  if (!currentColor) {
    currentColor = "black";
  }

  let colorConverter = {
    "black"  : "tomato" ,
    "tomato" : "lime",
    "lime"   : "black",
  };

  let nextColor = colorConverter[currentColor];

  h1Element.style.color = nextColor;
});
