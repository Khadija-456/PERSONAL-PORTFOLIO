// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Project filter chips
const chips = document.querySelectorAll('.chip');
const grid = document.getElementById('projectGrid');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    const tag = chip.dataset.filter;
    const cards = grid.querySelectorAll('.project');

    cards.forEach(card => {
      const match = tag === 'all' || card.dataset.tags.includes(tag);
      card.style.display = match ? '' : 'none';
    });
  });
});

// Basic contact form validation (front-end only demo)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name')?.toString().trim();
  const email = data.get('email')?.toString().trim();
  const message = data.get('message')?.toString().trim();

  if(!name || !email || !message){
    status.textContent = 'Please fill in all fields.';
    return;
  }
  // Simulate send
  status.textContent = 'Thanks! Your message has been sent (demo).';
  form.reset();
});
