# Pointify-Clone-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

## Description

I made a website about a pointify clone, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing CSS.

## Technologies used

1. CSS3
2. Javascript
3. HTML5

## Galery

![Pointify](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/pontify-0.jpg)

![Pointify](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/pontify-1.jpg)

![Pointify](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/pontify-2.jpg)

![Pointify](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/pontify-3.jpg)

![Pointify](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Css/Imagenes/pontify-4.jpg)

## Portfolio Link

`https://diegolibonati.github.io/DiegoLibonatiWeb/#/projects?q=Pointify%20clone%20page`

## Video

https://user-images.githubusercontent.com/99032604/199360280-e6d1ea3f-0175-487f-99b2-1f881798c95b.mp4

## Documentation

This code block assigns to the nav button `btnOpenNav` a click event that will allow each time the button is clicked to open and close the `containerNav` thanks to the `toggle()` method of classList:

```
const btnOpenNav = document.getElementById("btnOpenNav");
const containerNav = document.querySelector(".nav_container_nav");


btnOpenNav.addEventListener("click", (e)=>{

    containerNav.classList.toggle("show-nav");

})
```

In this block of code what we do is to take all the buttons of all the questions of the FAQ section and to assign to each button a click event. Then we obtain from each button its respective answer to the question that is assigned. After that the necessary properties will be assigned to make it work:

```
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
```

In this block we are going to get the li of the nav basically in `scrollLinks`, then we will get all the available sections and we will assign the height of the navbar as it is in our CSS, in this case `navHeight` with 100px. Then to each `scrollLink` we are going to assign a click event. When any of them is clicked, the navbar will close, its default behavior will be canceled, we will obtain the href to which it is directed, we will add a class to the `scrollLink` that was clicked and finally we will compare if the `href` to which it is directed is equal to the section, if it is it will calculate its height subtracting the `navHeight` and it will scroll to that point automatically:

```
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
```
