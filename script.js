// Create floating particles animation
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
  }
}

// Mobile navigation toggle
function toggleNav() {
  const sideNav = document.getElementById('sideNav');
  if (sideNav) {
    sideNav.classList.toggle('active');
  }
}

// Close mobile nav when clicking a link
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        const sideNav = document.getElementById('sideNav');
        if (sideNav) {
          sideNav.classList.remove('active');
        }
      }
    });
  });
});