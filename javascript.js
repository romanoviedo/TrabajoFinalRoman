window.onload = init;
    function init(){
        document.querySelector(".emergente .menor").addEventListener("click",chau);
        document.querySelector(".emergente .mayor").addEventListener("click",hola);
    }
        
    function chau(){
    
    }    
    function hola(){
        document.querySelector(".emergente").style.display="none";
        document.querySelector("#container").style.opacity="1";
    }
