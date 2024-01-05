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
    const btnRespond = target.parentElement?.children[1];

    btnRespond?.classList.toggle("open-respond");

    const children = target.children[1] as HTMLElement;
    const children2 = target.children[2] as HTMLElement;

    if (btnRespond?.classList.contains("open-respond")) {
      children.style.display = "none";
      children2.style.display = "flex";
    } else {
      children2.style.display = "none";
      children.style.display = "flex";
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

    for (let i = 0; i < scrollLinks.length; i++) {
      const element = scrollLinks[i] as HTMLElement;

      if (element.classList.contains("colorItemNavClick")) {
        element.classList.remove("colorItemNavClick");
      }
    }

    target.classList.add("colorItemNavClick");

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      if (scrollLinkId == section.id) {
        const sectionTop = section.offsetTop - navHeight;

        window.scrollTo({
          left: 0,
          top: sectionTop,
        });
      }
    }
  });
});
