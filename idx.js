$(document).ready(function(){
    var foot = document.getElementById('foot');
    var f_left = document.getElementById('left');
    var f_right = document.getElementById('right');
    var oldSize_w = window.innerWidth;
    var oldSize_h = window.innerHeight;
    var main_height = document.getElementById('main').clientHeight;

        sizes();

    window.onresize = function(){
        sizes();
    };
function sizes(){
    var win_width = window.innerWidth;
    var win_height = window.innerHeight;

    var quotient = win_width/win_height;

    var newHeight_f = win_height - main_height;
    foot.style.height = newHeight_f;

    console.log(newHeight_f);
}
});