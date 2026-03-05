document.addEventListener("DOMContentLoaded", function () {

  const cookieBanner = document.getElementById("cookie-banner");

  if (!cookieBanner) return;

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

});


  /* ============================= */
  /* REVEAL ON SCROLL */
  /* ============================= */

  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // anima solo una volta
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

});

document.addEventListener("DOMContentLoaded", function() {

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".custom-navbar .nav-link");

    window.addEventListener("scroll", () => {
        let scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 80; // compenso navbar
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + sectionId) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });

});
