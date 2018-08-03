var d_value = document.getElementsByName("default-value")[0].value;
var p_value = document.getElementsByName("pixel-value")[0].value;
var convert = document.getElementsByName("convert")[0];
let rem = null;
convert_rem = function(){
    rem = p_value/d_value;
    document.getElementsByClassName("rem-size")[0].innerHTML=rem;
};
convert.addEventListener("click",function () {
    convert_rem();
});