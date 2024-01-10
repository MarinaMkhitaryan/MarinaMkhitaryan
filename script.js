let lav = document.querySelector(".lavEli")

$("ul li a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});


let respA = document.getElementsByClassName("respA")

function burger(){
    if(hamburger.style.height =="100vh"){
        hamburger.style.height = "50px" ;
        hamburger.style.width = "50px" ;
        hLine_1.style.display = "block" ;
        hLine_2.style.display = "block" ;
        hLine_3.style.display = "block" ;
        respHome.style.display = "none" ;
        respAbout.style.display = "none" ;
        respSkills.style.display = "none" ;
        respPortfolio.style.display = "none" ;
        respContact.style.display = "none" ;
        resplang.style.display = "none" ;
    }else {
        hamburger.style.height = "100vh"
        hamburger.style.width = "100vw"
        hLine_1.style.display = "none" ;
        hLine_2.style.display = "none" ;
        hLine_3.style.display = "none" ;
        respHome.style.display = "block" ;
        respAbout.style.display = "block" ;
        respSkills.style.display = "block" ;
        respPortfolio.style.display = "block" ;
        respContact.style.display = "block" ;
        resplang.style.display = "block" ;
    }
}