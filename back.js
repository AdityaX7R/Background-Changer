// let div = document.querySelector("#color");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     div.style.backgroundColor="green";
// });




let div = document.querySelector("#color");
let btn = document.querySelector("button");

btn.addEventListener("click", function() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

});