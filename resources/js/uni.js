(function(){
    function getRequest(){
        var url=window.location.search;
        var index=url.indexOf("=");
        var str=url.slice(index+1);
        // if(url.indexOf("?"=-1)){
        //     var str=url.slice((url.indexOf("="))+1);
        //     console.log(str)
        // }S
        return str;
    }
    var jiqiao=document.getElementById("jiqiao");
    var xinwen=document.getElementById("xinwen");
    var zatan=document.getElementById("zatan");
    // var id=getRequest();
    // console.log(id);
    function item_Load(){
        var id=getRequest();
        console.log(jiqiao);
        console.log(id);

        switch(id){
            case jiqiao.id:
                xinwen.style.display="none";
                zatan.style.display="none";
                break;
            case xinwen.id:
                jiqiao.style.display="none";
                zatan.style.display="none";
                break;
            case zatan.id:
                jiqiao.style.display="none";
                xinwen.style.display="none";
                break;
            
        }
    }
    item_Load();

})()