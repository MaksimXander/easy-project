// const modal = document.querySelector('#application');
// const btn = document.getElementById("myBtn");
// const span = document.getElementsByClassName("modal-close")[0];

// console.log(modal);
// console.log(btn);
// console.log(span);

// btn.addEventListener('click', () =>{
//     modal.style.display = "block";
// })

// span.addEventListener('click', () =>{
//     modal.style.display = "none";
// })

// window.addEventListener('click', () =>{
//     if (event.target == modal) {
//         modal.style.display = "none";
//         }
// })


var modal = document.getElementById('#feedback')
var btn = document.getElementById("mybtn")
var span = document.getElementsByClassName("close")[0]

btn.onclick = function() {
    modal.style.display ="block";
}
span.onclick = function() {
    modal.style.display = "none"
}
window.onclick = function(event) {
    if (event.target == modal){
        modal.style.display = "none"
    }
}
