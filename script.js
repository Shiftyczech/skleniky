// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===== MOBILE MENU TOGGLE =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  updateBodyOverflow();
});

// Close mobile menu on link click
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    updateBodyOverflow();
  });
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {
  const scrollY = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + sectionId) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = entry.target.parentElement.querySelectorAll(".reveal");
        const siblingIndex = Array.from(siblings).indexOf(entry.target);

        setTimeout(() => {
          entry.target.classList.add("revealed");
        }, siblingIndex * 100);

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  },
);

revealElements.forEach((el) => revealObserver.observe(el));

// ===== PRICING TABS =====
const pricingTabs = document.querySelectorAll(".pricing-tab");

pricingTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    pricingTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const targetPanel = tab.getAttribute("data-tab");
    document.querySelectorAll(".pricing-panel").forEach((panel) => {
      panel.classList.remove("active");
    });
    document.getElementById("panel-" + targetPanel).classList.add("active");
  });
});

// ===== FAQ ACCORDION =====
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const isOpen = item.classList.contains("open");

    // Close all open items
    document.querySelectorAll(".faq-item.open").forEach((openItem) => {
      openItem.classList.remove("open");
      openItem
        .querySelector(".faq-question")
        .setAttribute("aria-expanded", "false");
    });

    // Open clicked item if it was closed
    if (!isOpen) {
      item.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

// ===== LIGHTBOX =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

// Collect all gallery images for navigation
let galleryImages = [];
let currentLightboxIndex = 0;

function buildGalleryList() {
  galleryImages = Array.from(document.querySelectorAll(".gallery-item img"));
}

function openLightbox(element) {
  buildGalleryList();
  const img = element.querySelector("img");
  currentLightboxIndex = galleryImages.indexOf(img);
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add("active");
  updateBodyOverflow();
}

function closeLightbox() {
  lightbox.classList.remove("active");
  updateBodyOverflow();
}

function lightboxNext() {
  if (galleryImages.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
  const img = galleryImages[currentLightboxIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
}

function lightboxPrev() {
  if (galleryImages.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
  const img = galleryImages[currentLightboxIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
}

// Helper: manage body overflow based on both menu and lightbox state
function updateBodyOverflow() {
  const menuOpen = navLinks.classList.contains("open");
  const lightboxOpen = lightbox.classList.contains("active");
  document.body.style.overflow = (menuOpen || lightboxOpen) ? "hidden" : "";
}

// Close lightbox with Escape key, navigate with arrow keys
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") lightboxNext();
  if (e.key === "ArrowLeft") lightboxPrev();
});

// Prevent closing when clicking on the image itself
lightboxImg.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Lightbox navigation buttons click
document.getElementById("lightboxPrev").addEventListener("click", (e) => {
  e.stopPropagation();
  lightboxPrev();
});
document.getElementById("lightboxNext").addEventListener("click", (e) => {
  e.stopPropagation();
  lightboxNext();
});

// ===== CONTACT FORM (EmailJS) =====
const EMAILJS_PUBLIC_KEY  = "jRrL9jwNryWslqfqp";
const EMAILJS_SERVICE_ID  = "service_cvxbj4k";
const EMAILJS_TEMPLATE_ID = "template_0yo533r";

emailjs.init(EMAILJS_PUBLIC_KEY);

const contactForm = document.getElementById("contactForm");
const submitBtn   = document.getElementById("submitBtn");
const formSuccess = document.getElementById("formSuccess");
const formError   = document.getElementById("formError");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const originalText = submitBtn.textContent;
    submitBtn.textContent = (typeof translations !== "undefined" && translations[currentLang])
      ? translations[currentLang]["contact.submitting"]
      : "Odesílám...";
    submitBtn.disabled = true;
    formSuccess.style.display = "none";
    formError.style.display   = "none";

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
      .then(function () {
        formSuccess.style.display = "block";
        contactForm.reset();
      })
      .catch(function () {
        formError.style.display = "block";
      })
      .finally(function () {
        submitBtn.textContent = originalText;
        submitBtn.disabled    = false;
      });
  });
}

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const navHeight = navbar.offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ===== FOOTER YEAR =====
const yearEl = document.getElementById("footerYear");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
