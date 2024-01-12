const btnOpenNav = document.getElementById("btnOpenNav") as HTMLButtonElement;
const containerNav = document.querySelector(
  ".nav_container_nav"
) as HTMLElement;

btnOpenNav.addEventListener("click", () => {
  containerNav.classList.toggle("show-nav");
});

const btnsOpenQuestion = document.querySelectorAll(
  ".section_faq_item_question"
) as NodeList;

btnsOpenQuestion.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const target = e.currentTarget as HTMLElement;
    const showAnswer = target.parentElement?.children[1];

    showAnswer?.classList.toggle("open-respond");

    const down = target.children[1] as HTMLElement;
    const up = target.children[2] as HTMLElement;

    if (showAnswer?.classList.contains("open-respond")) {
      down.style.display = "none";
      up.style.display = "flex";
    } else {
      down.style.display = "flex";
      up.style.display = "none";
    }
  });
});

const scrollLinks = document.querySelectorAll(".scrollLink") as NodeList;
const sections = document.querySelectorAll(".section") as NodeList;
const navHeight: number = 100;

scrollLinks.forEach(function (scrollLink) {
  scrollLink.addEventListener("click", (e) => {
    containerNav.classList.remove("show-nav");
    e.preventDefault();

    const target = e.currentTarget as HTMLElement;

    const scrollLinkId = target.getAttribute("href")?.substring(1);

    const itemNavWithUnderline = document.querySelector(".colorItemNavClick");

    if (itemNavWithUnderline)
      itemNavWithUnderline.classList.remove("colorItemNavClick");

    target.classList.add("colorItemNavClick");

    const section = document.getElementById(`${scrollLinkId}`)

    const sectionTop = section!.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: sectionTop,
    });
  });
});
