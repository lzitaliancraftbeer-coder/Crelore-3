document.addEventListener("DOMContentLoaded", function () {

  /* ============================= */
  /* COOKIE BANNER */
  /* ============================= */

  const cookieBanner = document.getElementById("cookie-banner");

  if (cookieBanner) {
    if (localStorage.getItem("cookieConsent")) {
      cookieBanner.style.display = "none";
    } else {
      document.body.style.overflow = "hidden";
    }

    window.acceptCookies = function () {
      localStorage.setItem("cookieConsent", "accepted");
      cookieBanner.style.display = "none";
      document.body.style.overflow = "auto";
    };

    window.rejectCookies = function () {
      localStorage.setItem("cookieConsent", "rejected");
      cookieBanner.style.display = "none";
      document.body.style.overflow = "auto";
    };
  }

  /* ============================= */
  /* REVEAL ON SCROLL */
  /* ============================= */

  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));
  }

  /* ============================= */
  /* NAVBAR SCROLL EFFECT */
  /* ============================= */

  const navbar = document.querySelector(".custom-navbar");

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  /* ============================= */
  /* BOOTSTRAP MOBILE AUTO-CLOSE */
  /* ============================= */

  const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navLinks.length > 0 && navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 992) {
          const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
          if (collapseInstance) {
            collapseInstance.hide();
          }
        }
      });
    });
  }

  /* ============================= */
  /* ACTIVE LINK BY SECTION */
  /* ============================= */

  const sections = document.querySelectorAll("section[id]");
  const menuLinks = document.querySelectorAll(".custom-navbar .nav-link");

  if (sections.length > 0) {
    window.addEventListener("scroll", () => {
      let scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 80;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          menuLinks.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + sectionId) {
              link.classList.add("active");
            }
          });
        }
      });
    });
  }

  /* ============================= */
  /* FAQ ACCORDION */
  /* ============================= */

  const faqItems = document.querySelectorAll(".faq-item");

  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");

      question.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");

        faqItems.forEach(i => i.classList.remove("active"));

        if (!isOpen) {
          item.classList.add("active");
        }
      });
    });
  }

});

const counters = document.querySelectorAll('.counter');

const speed = 200;

counters.forEach(counter => {

const updateCount = () => {

const target = +counter.getAttribute('data-target');
const count = +counter.innerText;

const increment = target / speed;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCount,20);

}else{

counter.innerText = target;

}

};

updateCount();

});

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter = entry.target;
const target = +counter.dataset.target;

let count = 0;

const update = () => {

const increment = target / 120;

if(count < target){

count += increment;
counter.innerText = Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

};

update();

observer.unobserve(counter);

}

});

},{threshold:0.6});

counters.forEach(counter => {

observer.observe(counter);

});

// =======================
// COUNTER + REVEAL
// =======================
const counters = document.querySelectorAll(".counter");
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){

      // REVEAL
      entry.target.classList.add("active");

      // COUNTER
      if(entry.target.classList.contains("counter")){
        const counter = entry.target;
        const target = +counter.dataset.target;
        let count = 0;
        const update = () => {
          const increment = target / 120;
          if(count < target){
            count += increment;
            counter.innerText = Math.floor(count);
            requestAnimationFrame(update);
          }else{
            counter.innerText = target;
          }
        };
        update();
      }

      observer.unobserve(entry.target);
    }
  });
},{threshold:0.6});

// Osserva sia reveal che counter
revealItems.forEach(item => observer.observe(item));
counters.forEach(counter => observer.observe(counter));
