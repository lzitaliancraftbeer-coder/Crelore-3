document.addEventListener("DOMContentLoaded", function(){

  // COOKIE BANNER
  const cookieBanner = document.getElementById("cookie-banner");
  if(cookieBanner && localStorage.getItem("cookieConsent")) cookieBanner.style.display = "none";

  window.acceptCookies = () => { localStorage.setItem("cookieConsent","accepted"); if(cookieBanner) cookieBanner.style.display="none"; }
  window.rejectCookies = () => { localStorage.setItem("cookieConsent","rejected"); if(cookieBanner) cookieBanner.style.display="none"; }

  // REVEAL ELEMENTS
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add("active");
    });
  }, {threshold:0.15});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // NAVBAR SCROLL
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll",()=>{
    if(navbar){
      if(window.scrollY>20) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    }
  });

  // HAMBURGER MOBILE MENU
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  if(hamburger && mobileMenu){
    hamburger.addEventListener("click", ()=>{
      hamburger.classList.toggle("open");
      mobileMenu.classList.toggle("active");
    });
    mobileMenu.querySelectorAll("a").forEach(link=>{
      link.addEventListener("click", ()=>{
        hamburger.classList.remove("open");
        mobileMenu.classList.remove("active");
      });
    });
  }

});

💡 Con questa struttura:

JS separato e pulito → niente più errori di “index”.

Hamburger X cliccabile, menu mobile funzionante.

Reveal animazioni visibili e progressive.

Cookie banner funzionante.

Se vuoi, il prossimo passo posso prepararti una versione “all-in-one” dove index.html contiene CSS + JS inline così non ci sono problemi di path e puoi copiare-incollare e funziona subito.

Vuoi che faccia anche quella versione?

dove devo creare il file js? in qualche cartella o la stessa dove c e index?
