var sharebtn = document.getElementById("share");
var sharefull = document.getElementById("sharefull");
var arrow = document.getElementsByClassName("sharefull:active")[0];
var overflow = document.getElementById("overflow");
var socialsfull = document.getElementById("socialsfull");
overflow.style.height = "0";
socialsfull.style.height = "0";


if (window.innerWidth > 600){
    sharebtn.onclick = function(){
        if (overflow.style.height === "0px"){
            overflow.style.height = "5.5vw";
            overflow.style.marginTop = "0px";
            sharebtn.classList.add("shareactive");
        }
        else{
            overflow.style.height = "0";
            overflow.style.marginTop = "5vw";
            sharebtn.classList.remove("shareactive");
        }
    }
}
else{
    sharebtn.onclick = function(){
        if (socialsfull.style.height === "0px"){
            socialsfull.style.height = "28vw";
            socialsfull.style.marginTop = "0px";
            sharebtn.classList.add("shareactive");
        }
        else{
            socialsfull.style.height = "0";
            socialsfull.style.marginTop = "28vw";
            sharebtn.classList.remove("shareactive");
        }
    }
}

