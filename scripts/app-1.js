let menu = document.querySelector(".header__menu")
let headerBtn = document.querySelector(".header__icon")
let headerIcon = document.querySelector(".header__icon i")

headerBtn.addEventListener("click" , function (){
   if (headerIcon.classList.contains("fa-bars")) {
    menu.style.left = "0"
    headerIcon.classList = "fa fa-times"
   } else {
    menu.style.left = "-256px"
    headerIcon.classList = "fa fa-bars"
   }

})