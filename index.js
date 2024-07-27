let fixed_btn = document.getElementById("fixed-btn")
let menu_btn = document.getElementById("menu-btn")
let close_menu = document.getElementById("close-menu")
let drop_menu= document.getElementById("drop-menu")

// console.log("scroll : " + scrollY)

document.addEventListener("scroll",function()
{
    if(scrollY>=700)
    {
fixed_btn.style.display="block"
    }
    else if(scrollY<700)
    {
        fixed_btn.style.display="none"
    }
})

menu_btn.addEventListener('click',function(){
    menu_btn.style.display="none"
    close_menu.style.display="block"
    drop_menu.style.display="block"
})

close_menu.addEventListener('click',function(){
    menu_btn.style.display="block"
    close_menu.style.display="none"
    drop_menu.style.display="none"
})