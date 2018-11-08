(function(){
    var chose=document.getElementById("chose-btn");
    var open_shop=document.getElementById("open-shop");
    var user_content=document.getElementById("user-content");
    chose.className="open-shop-unsel";
    // open_shop.style.display="none";
    // user_content.style.display="block";
    chose.onclick=function(){
        switch(chose.className){
            case "open-shop-unsel":
                chose.className="open-shop-sel";
                // open_shop.style.display="block";
                // user_content.style.display="none";

            break;
            case "open-shop-sel":
                chose.className="open-shop-unsel";
                // open_shop.style.display="none";
                // user_content.style.display="block";
            break;
        }
    }

})()