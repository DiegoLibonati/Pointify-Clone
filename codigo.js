const btnOpenNav = document.getElementById("btnOpenNav");
const containerNav = document.querySelector(".nav_container_nav");


btnOpenNav.addEventListener("click", (e)=>{

    containerNav.classList.toggle("show-nav");

})


const btnsOpenQuestion = document.querySelectorAll(".section_faq_item_question");

btnsOpenQuestion.forEach(function(btn){

    btn.addEventListener("click", (e)=>{

        let btnRespond = e.currentTarget.parentElement.children[1];

        btnRespond.classList.toggle("open-respond")

        if (btnRespond.classList.contains("open-respond")){
            e.currentTarget.children[1].style.display = "none";
            e.currentTarget.children[2].style.display = "flex";
        } else {
            e.currentTarget.children[1].style.display = "flex";
            e.currentTarget.children[2].style.display = "none";
        }
    
    });

});

const scrollLinks = document.querySelectorAll(".scrollLink");
const sections = document.querySelectorAll(".section");
const navHeight = 100;

scrollLinks.forEach(function(scrollLink){

    scrollLink.addEventListener("click", (e)=>{
        containerNav.classList.remove("show-nav");
        e.preventDefault();

        let scrollLinkId = e.currentTarget.getAttribute("href").substring(1);

        for (let i = 0; i < scrollLinks.length; i++){
            if (scrollLinks[i].classList.contains("colorItemNavClick")){
                scrollLinks[i].classList.remove("colorItemNavClick");
            }
        }

        e.currentTarget.classList.add("colorItemNavClick");

        for (let i = 0; i < sections.length; i++){

            if(scrollLinkId == sections[i].id){
                let sectionTop = sections[i].offsetTop - navHeight;

                window.scrollTo({
                    left: 0, top:sectionTop,
                })
            }

        }

    });

});