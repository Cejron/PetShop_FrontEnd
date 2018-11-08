(function(){
    var bechose=document.getElementsByClassName("screen-chose");
    // var pet_type_screening=document.getElementById("pet-type-screening");
    for(var i=0;i<bechose.length;i++){
        bechose[i].onclick=function(e){
            // console.log(e.target.innerHTML);
            window.all=e.target.innerHTML;
            console.log(window.all)
        }
    }
    
    // console.log(bechose[1].innerHTML)
})()