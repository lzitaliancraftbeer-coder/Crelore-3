document.addEventListener("DOMContentLoaded", function () {

  /* ============================= */
  /* CONTATORE AVANZATO PROOF */
  /* ============================= */
  const proofItems = document.querySelectorAll(".proof-item h2");
  const proofSection = document.querySelector(".proof-grid");

  if (proofSection && proofItems.length > 0) {
    const proofObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          proofItems.forEach((num, index) => {
            const target = +num.getAttribute("data-target");
            let start = 0;
            const duration = 2000; // durata animazione totale in ms
            const delay = index * 300; // delay progressivo tra i numeri
            const startTime = performance.now();

            function animateCounter(currentTime) {
              const elapsed = currentTime - startTime - delay;
              const progress = Math.min(Math.max(elapsed / duration, 0), 1);
              num.textContent = Math.floor(progress * target);

              if (progress < 1) {
                requestAnimationFrame(animateCounter);
              } else {
                num.textContent = target;
              }
            }

            requestAnimationFrame(animateCounter);
          });

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    proofObserver.observe(proofSection);
  }

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