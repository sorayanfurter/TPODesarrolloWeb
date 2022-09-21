document.querySelector('.btn').onclick = function (e) {
    var menu = document.querySelector('.menu');
    var btn = document.querySelector('.btn');

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');

    e.preventDefault();


}
 

window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("down", window.scrollY>0);
})