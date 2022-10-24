/*var collection = 0;
var i = 0;
var slider=document.getElementsByClassName("slider");
var line=document.getElementsByClassName("line");

auto();

function show(n){
    for(i=0;i<slider.length;i++){
        slider[i].style.display="none";
    }
    for(i=0;i<line.length;i++) {
        line[i].className=line[i].className.replace(" active");
    }
    slider[n-1].style.display=("block");
    line[n-1].className += " active";
}

function auto(){
    collection++;
    if(collection>slider.length){
        collection = 1;
    }

    show(collection);
    setTimeout(auto, 2000);

}

function plusSlide(n){
    collection += n;
    if (collection> slider.length){
        collection =1;
    }
    if (collection < 1) {
        collection = slider.length;
    }
    show(collection);
}
*/
