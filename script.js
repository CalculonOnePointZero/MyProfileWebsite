document.getElementById('year').textContent = new Date().getFullYear();

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
//




const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Seite nicht neu laden
    msg.textContent = 'Sende …';

    try {
        const res = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
            msg.textContent = 'Danke! Deine Nachricht wurde gesendet.';
            form.reset();
        } else {
            msg.textContent = 'Ups, das hat nicht geklappt. Bitte später erneut versuchen.';
        }
    } catch (err) {
        msg.textContent = 'Netzwerkfehler – bist du online?';
    }
});
