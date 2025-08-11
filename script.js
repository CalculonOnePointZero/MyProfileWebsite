// Jahr im Footer aktualisieren (DOM Basics)
document.getElementById('year').textContent = new Date().getFullYear();

// Theme Toggle (State, Attribute-API, Local Storage)
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;

function setTheme(mode){
  if(mode === 'light'){
    root.classList.add('light');
    toggle.setAttribute('aria-pressed', 'true');
  }else{
    root.classList.remove('light');
    toggle.setAttribute('aria-pressed', 'false');
  }
  localStorage.setItem('theme', mode);
}

const saved = localStorage.getItem('theme');
setTheme(saved || 'dark');

toggle.addEventListener('click', () => {
  const next = root.classList.contains('light') ? 'dark' : 'light';
  setTheme(next);
});

// Kontaktformular (Client‑Side Validierung, Events)
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name')?.trim();
  const email = data.get('email')?.trim();
  const text = data.get('message')?.trim();

  if(!name || !email || !text){
    msg.textContent = 'Bitte fülle alle Felder aus.';
    return;
  }
  // Demo: In echt würdest du hier an einen Backend‑Service senden.
  msg.textContent = 'Danke! Nachricht wurde (simuliert) gesendet.';
  form.reset();
});
