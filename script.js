// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== MOBILE MENU TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
  const scrollY = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveLink);

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger animation for siblings
      const siblings = entry.target.parentElement.querySelectorAll('.reveal');
      const siblingIndex = Array.from(siblings).indexOf(entry.target);
      
      setTimeout(() => {
        entry.target.classList.add('revealed');
      }, siblingIndex * 100);
      
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== PRICING TABS =====
const pricingTabs = document.querySelectorAll('.pricing-tab');

pricingTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs
    pricingTabs.forEach(t => t.classList.remove('active'));
    // Add active to clicked tab
    tab.classList.add('active');

    // Switch panel
    const targetPanel = tab.getAttribute('data-tab');
    document.querySelectorAll('.pricing-panel').forEach(panel => {
      panel.classList.remove('active');
    });
    document.getElementById('panel-' + targetPanel).classList.add('active');
  });
});

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(element) {
  const img = element.querySelector('img');
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});

// Prevent closing when clicking on the image itself
lightboxImg.addEventListener('click', (e) => {
  e.stopPropagation();
});

// ===== CONTACT FORM =====
function handleFormSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  // Create mailto link with form data
  const subject = encodeURIComponent('Poptávka skleníku' + (data.model ? ' - ' + data.model.toUpperCase() : ''));
  const body = encodeURIComponent(
    `Jméno: ${data.name}\n` +
    `Telefon: ${data.phone}\n` +
    `E-mail: ${data.email || 'neuvedeno'}\n` +
    `Model: ${data.model || 'neuvedeno'}\n` +
    `Zpráva:\n${data.message || 'Mám zájem o Vaše skleníky.'}`
  );
  
  window.location.href = `mailto:info@sklenikytobias.cz?subject=${subject}&body=${body}`;
  
  // Show confirmation
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = '✓ Otevírám e-mailového klienta...';
  btn.style.background = 'var(--green-600)';
  
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
  }, 3000);
}

// ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = navbar.offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
