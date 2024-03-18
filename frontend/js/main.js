var i = 0;
function newButton(){
var button = document.createElement('button');
      button.textContent = 'Rätsel ' + i;
      button.setAttribute("type", "button");
      button.setAttribute("class", "btn btn-primary m-1");
      i++;
      var div = document.getElementById('progress-buttons');
      div.appendChild(button);
}

// um auf die verschiedenen rätsel zu springen kann man ja wieder
// ein Attribute setten und dann als type onclick machen und mit ner variable
// auf ne website verweisen