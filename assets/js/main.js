document.addEventListener("DOMContentLoaded", function () {
  // ... COOKIE BANNER, NAVBAR, REVEAL ecc.

  // =============================
  // CONTATORI PROOF
  // =============================
  {
      const proofSection = document.querySelector(".proof-section");
  const proofNumbers = document.querySelectorAll(".proof-item h2");

  if (proofSection && proofNumbers.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          proofNumbers.forEach((num, idx) => {
            const target = +num.getAttribute("data-target");
            let start = 0;
            const duration = 2000; // durata animazione in ms
            const delay = idx * 300; // delay tra numeri

            function animate(currentTime, startTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              num.textContent = Math.floor(progress * target);

              if (progress < 1) {
                requestAnimationFrame((time) => animate(time, startTime));
              } else {
                num.textContent = target;
              }
            }

            setTimeout(() => {
              requestAnimationFrame((time) => animate(time, time));
            }, delay);
          });

          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(proofSection);
  }
});

  // ... eventuali altri script
});

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