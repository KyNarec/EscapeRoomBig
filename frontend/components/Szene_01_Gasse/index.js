//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    // set the element's new position:
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
  var position = 11;
  const pictures = ["Theresienstraße_1.jpg","Theresienstraße_2.jpg","Theresienstraße_3.jpg","Kreuzung_Theresienstraße.jpg","Theresienstraße_4.jpg","Theresienstraße_5.jpg","Dietrich-Bonhoeffer-Platz_1.jpg","Dietrich-Bonhoeffer-Platz_2.jpg","Dietrich-Bonhoeffer-Platz_3.jpg","Dietrich-Bonhoeffer-Platz_4.jpg","Dietrich-Bonhoeffer-Platz_5.jpg","Dietrich-Bonhoeffer-Platz_6.jpg","Rosengasse_3.jpg","Rosengasse_2.jpg","Rosengasse_1.jpg"];
  const ButPosX = ["63%","60%","61%","82%","20%","50%","48%","40%","65%","60%","60%","60%","200%","40%"];  
  var buttonf = document.getElementById("forward");
    buttonf.onclick=()=>{
          position = position+1;
          let pic = pictures[position];
          var change = "/frontend/assets/images/Szene01/" + pic;
          document.getElementById("background").src=change;
          buttonf.style.marginLeft=ButPosX[position];
    }
