var rem = document.getElementById("rem-value");
var default_value = document.getElementById("default-value");
var pixel_value = document.getElementById("pixel-value");

// default_value.addEventListener("input",function () {
//     rem.value = pixel_value.value / default_value.value + " rem";
// });
//
// pixel_value.addEventListener("input",function () {
//    rem.value = pixel_value.value / default_value.value + " rem";
// });
//
default_value.addEventListener("keyup",function () {
    rem.value = pixel_value.value / default_value.value + " Rem";
});

pixel_value.addEventListener("keyup",function () {
   rem.value = pixel_value.value / default_value.value + " Rem";
});