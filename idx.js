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
    var win_o_height = window.outerHeight;

    var quotient = win_width/win_height;
    var ex_height = win_o_height - win_height;

    var newHeight_f = win_height - main_height + 50;
    foot.style.height = newHeight_f;

    console.log(win_height);
    console.log(newHeight_f);
    console.log(win_height - newHeight_f);
}
});