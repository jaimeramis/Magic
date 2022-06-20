'use strict'

/***BURGER MENU: Open/Close***/
const navigation_button = document.querySelector("#navigation_button");
const navigation_items = document.querySelector("#navigation_items");
let button_open = false;

navigation_button.addEventListener("click", ()=>{
    
    if(!button_open){
        navigation_button.classList.add("button_open");
        navigation_button.classList.remove("button_close");
        button_open = true;
        navigation_items.style.top="0";



    }else{
        navigation_button.classList.remove("button_open");
        navigation_button.classList.add("button_close");
        button_open = false;
        navigation_items.style.top="-1000px";
    }
    
});
/***BURGER MENU: END Open/Close***/
