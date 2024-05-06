dragElement(document.getElementById("moveable-image"));

function dragElement(elmnt) {
    var pos3 = 0;
    elmnt.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
      e = e || window.event;
      pos3 = e.clientX;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
      e = e || window.event;
      var pos1 = pos3 - e.clientX;
      pos3 = e.clientX;
      elmnt.style.left = (elmnt.offsetLeft + pos1) + "px";
      elmnt.style.top = (elmnt.offsetTop + pos1) + "px";
    }
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }