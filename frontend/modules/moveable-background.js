function moveablebackground(){
    dragElement(document.createElement("backgroung-image"));
    var pos = 0;
    var run = true;
    var mouseStart;
    var mouseEnd;
    var mouseDown = false;
    var e = window.Event;
    while(run == true){
        if(e.onmousedown==true && mouseDown == false){
            e = e || window.Event;
            mouseStart = e.clientX;
            mouseDown = true;
        }

        if(mouseDown == true){
            e = e || window.Event;
            mouseEnd = e.clientX;
            if(mouseEnd-mouseStart >= 0){
                document.getElementById(backgroung-image).style.marginLeft(-1*(mouseEnd-mouseStart));
            }

        }
    }
}