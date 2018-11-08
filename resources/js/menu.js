(function(){
    var menu_btn=document.getElementById("menu-btn");
    var menu_item=document.getElementById("menu-item");
    var space=document.getElementById("space");
    menu_item.style.display="none";
    space.style.display="block";

    menu_btn.onclick=function(){
        showMenu();
        hideSpace();
    }
    function showMenu(){
        var Flag=(menu_btn.getAttribute("src",2)=="../resources/image/menu.png");   
        switch(menu_item.style.display){
            case "block":
                menu_item.style.display="none";
                menu_btn.src=Flag?"../resources/image/arrowleft.png":"../resources/image/menu.png";
                break;
            case "none":
                menu_item.style.display="block";
                menu_btn.src=Flag?"../resources/image/arrowleft.png":"../resources/image/menu.png";
                break;     
        }
    }
    function hideSpace(){
        switch(space.style.display){
            case "block":
                space.style.display="none";
                break;
            case "none":
                space.style.display="block";
                break;
        }
    }

})()