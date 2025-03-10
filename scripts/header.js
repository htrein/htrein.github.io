document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("header");
  var contato = document.getElementById("btn-contact");
  var navItems = document.querySelectorAll(".header__nav ul li");

  function setInitialHeaderStyle() {
    if (window.innerWidth > 768) {
      header.style.backgroundColor = "transparent";
    } else {
      header.style.backgroundColor = "white";
    }
  }

  setInitialHeaderStyle();

  if (
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("index.html")
  ) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
        contato.classList.add("v");
        header.style.backgroundColor = "white";
      } else {
        header.classList.remove("scrolled");
        contato.classList.remove("v");
        if (window.innerWidth > 768) {
          header.style.backgroundColor = "transparent";
        } else {
          header.style.backgroundColor = "white";
        }
      }
    });
    if (navItems.length > 0 && window.innerWidth > 768) {
      navItems[0].style.borderBottom = "2px solid #8a0b24";
    }
  }
  if (
    window.location.pathname !== "/" &&
    !window.location.pathname.endsWith("index.html")
  ) {
    contato.classList.add("v");
    header.style.backgroundColor = "white";
  }
  if (window.location.pathname.endsWith("servico-item.html")) {
    if (navItems.length > 1 && window.innerWidth > 768) {
      navItems[1].style.borderBottom = "2px solid #8a0b24";
    }
  }

  if (window.location.pathname.endsWith("sobre-nos.html")) {
    if (navItems.length > 2 && window.innerWidth > 768) {
      navItems[2].style.borderBottom = "2px solid #8a0b24";
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".header__menu-button");
  const nav = document.querySelector(".header__nav");
  const navList = nav.querySelector("ul");

  function addContactOption() {
    if (window.innerWidth <= 768) {
      let contactItem = nav.querySelector(".mobile-contact");
      if (!contactItem) {
        contactItem = document.createElement("li");
        contactItem.classList.add("mobile-contact");
        const contactLink = document.createElement("a");
        contactLink.href = "contato.html";
        contactLink.textContent = "Contato";
        contactItem.appendChild(contactLink);
        navList.appendChild(contactItem);
      }
    } else {
      const contactItem = nav.querySelector(".mobile-contact");
      if (contactItem) {
        contactItem.remove();
      }
    }
  }

  addContactOption();

  window.addEventListener("resize", addContactOption);

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
    const menuIcon = menuButton.querySelector("img");
    if (nav.classList.contains("active")) {
      menuIcon.src = "images/ph--x.svg";
    } else {
      menuIcon.src = "images/ph--list.svg";
    }
  });
});
