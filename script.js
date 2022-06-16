'use strict';

let showModal = document.querySelector(".show-modal"); 
let modelBar = document.querySelector(".modal"); 
let closeModal = document.querySelector(".close-modal"); 
let overlay = document.querySelector(".overlay"); 

    
    showModal.addEventListener("click",function(){
    modelBar.classList.remove("hidden");
    overlay.classList.remove("hidden");
 });   

    showModal.addEventListener("click",function(){
    modelBar.classList.remove("hidden");
    overlay.classList.remove("hidden");
    });

let closewindow = function(){
    modelBar.classList.add("hidden");
    overlay.classList.add("hidden");
    console.log("hello");
}
closeModal.addEventListener("click",closewindow);
overlay.addEventListener("click",closewindow);

