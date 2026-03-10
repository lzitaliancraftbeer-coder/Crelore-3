document.addEventListener("DOMContentLoaded", () => {

  /* ============================= */
  /* COOKIE BANNER */
  /* ============================= */

  const cookieBanner = document.getElementById("cookie-banner");

  if (cookieBanner) {

    if (localStorage.getItem("cookieConsent")) {
      cookieBanner.style.display = "none";
    }

    window.acceptCookies = () => {
      localStorage.setItem("cookieConsent", "accepted");
      cookieBanner.style.display = "none";
    };

    window.rejectCookies = () => {
      localStorage.setItem("cookieConsent", "rejected");
      cookieBanner.style.display = "none";
    };

  }

  /* ============================= */
  /* REVEAL ON SCROLL */
  /* ============================= */

  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length) {

    const observer = new IntersectionObserver((entries, observer) => {

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
  /* BOOTSTRAP MOBILE AUTO CLOSE */
  /* ============================= */

  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");

  if (navbarCollapse && navLinks.length) {

    navLinks.forEach(link => {

      link.addEventListener("click", () => {

        if (window.innerWidth < 992) {

          const collapse = bootstrap.Collapse.getInstance(navbarCollapse);

          if (collapse) {
            collapse.hide();
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

  if (sections.length) {

    window.addEventListener("scroll", () => {

      const scrollY = window.pageYOffset;

      sections.forEach(section => {

        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
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

  if (faqItems.length) {

    faqItems.forEach(item => {

      const question = item.querySelector(".faq-question");

      if (question) {

        question.addEventListener("click", () => {

          const isOpen = item.classList.contains("active");

          faqItems.forEach(i => i.classList.remove("active"));

          if (!isOpen) {
            item.classList.add("active");
          }

        });

      }

    });

  }

});