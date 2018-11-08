(function(){
    // 三个按钮
    var new_btn=document.getElementById("new-btn");
    var hot_btn=document.getElementById("hot-btn");
    var show_btn=document.getElementById("show-btn");
    var chose_div=document.getElementById("chose-div");
    // 三个按钮
    // 三个div
    var new_div=document.getElementById("new-content");
    var hot_div=document.getElementById("hot-content");
    var show_div=document.getElementById("show-content");
    new_div.style.display="none";
    hot_div.style.display="none";
    show_div.style.display="none";
    // 三个div
    chose_div.onclick=function(e){
        var btn=document.getElementById(e.target.id);
        // var state=new_div;
        switch(btn){
            case new_btn: 
                new_btn.className="a-item-sel item-sel";
                hot_btn.className="a-item";
                show_btn.className="a-item";
                new_div.style.display="block";
                hot_div.style.display="none";
                show_div.style.display="none";
                break;
            case hot_btn:
                new_btn.className="a-item";
                hot_btn.className="a-ite-sel item-sel";
                show_btn.className="a-item";
                new_div.style.display="none";
                hot_div.style.display="block";
                show_div.style.display="none";
                break;
            case show_btn:
                new_btn.className="a-item";
                hot_btn.className="a-item";
                show_btn.className="a-item-sel item-sel";
                new_div.style.display="none";
                hot_div.style.display="none";
                show_div.style.display="block";
                break;
        }
    }
    function getRequest(){
        var url=window.location.search;
        var index=url.indexOf("=");
        var str=url.slice(index+1);
        // if(url.indexOf("?"=-1)){
        //     var str=url.slice((url.indexOf("="))+1);
        //     console.log(str)
        // }
        console.log(str);

    }
    getRequest();

})()