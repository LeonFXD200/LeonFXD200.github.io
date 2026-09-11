const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.getElementById('quoteForm');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name') || '';
  const postcode = data.get('postcode') || '';
  const email = data.get('email') || '';
  const project = data.get('project') || '';
  const message = data.get('message') || '';
  const subject = encodeURIComponent(`Bathroom consultation enquiry - ${name}`);
  const body = encodeURIComponent(
`Hi Jon,\n\nI'd like to arrange a free consultation for my bathroom project.\n\nName: ${name}\nPostcode: ${postcode}\nEmail: ${email}\nProject: ${project}\n\nDetails:\n${message}\n\nRegards,\n${name}`
  );
  window.location.href = `mailto:Jon@tranquilbathrooms.co.uk?subject=${subject}&body=${body}`;
});
