//import waitForElm from "../../utils/waitForElemnt.js";
!async function() {

//Make the DIV element draggagle:
await waitForElm('#mydiv');
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
  var position = 14;
  const pictures = ["Theresienstraße_1.jpg","Theresienstraße_2.jpg","Theresienstraße_3.jpg","Kreuzung_Theresienstraße.jpg","Theresienstraße_4.jpg","Theresienstraße_5.jpg","Dietrich-Bonhoeffer-Platz_1.jpg","Dietrich-Bonhoeffer-Platz_2.jpg","Dietrich-Bonhoeffer-Platz_3.jpg","Dietrich-Bonhoeffer-Platz_4.jpg","Dietrich-Bonhoeffer-Platz_5.jpg","Dietrich-Bonhoeffer-Platz_6.jpg","Rosengasse_3.jpg","Rosengasse_2.jpg","Rosengasse_1.jpg"];
  const ButPosFX = ["63%","60%","61%","82%","20%","50%","48%","40%","65%","60%","60%","200%","17%","17%","200%"]; 
  const ButPosBX = ["","15%","15%","39%","64%","19%","23%","10%","22%","20%","18%","15%","","60%","70%"];
  var buttonf = document.getElementById("forward");
    buttonf.onclick=()=>{
          position = position+1;
          intersectionButton(position);
          if(position==7){
             document.getElementById("show-map").style.display="block";
          }else{
            document.getElementById("show-map").style.display="none";
          }
    }

  var buttonb = document.getElementById("backward");
  buttonb.onclick=()=>{
    position = position-1;
    intersectionButton(position);
    if(position==7){
      document.getElementById("show-map").style.display="block";
   }else{
     document.getElementById("show-map").style.display="none";
   }
  }

  var buttoni = document.getElementById("inter");
  buttoni.onclick=()=>{
    if(position == 3){
      position = 12;
    }else{
      position = 3;
    }
    intersectionButton(position);
    if(position==7){
      document.getElementById("show-map").style.display="block";
   }else{
     document.getElementById("show-map").style.display="none";
   }
  }

  var mapbut = document.getElementById("show-map");
  mapbut.onclick=()=>{
    document.getElementById("map").style.visibility="visible";
    document.getElementById("leavebut").style.display="block";
  }

  var leavbut = document.getElementById("leavebut")
  leavbut.onclick=()=>{
    leavbut.style.display="none";
    document.getElementById("map").style.visibility="hidden";
  }



  function intersectionButton(pos){
    let pic = pictures[pos];
    var change = "/assets/images/Szene01/" + pic;
    document.getElementById("background").src=change;
    buttonf.style.marginLeft=ButPosFX[pos];
    buttonb.style.marginLeft=ButPosBX[pos];
    if(pos == 3 || pos == 12){
      if(pos == 3){
        buttoni.style.marginLeft="19%";
      }else{
        buttoni.style.marginLeft="60%"
      }
    }else{
      buttoni.style.marginLeft="";
    }
  }
}();