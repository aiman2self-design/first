const themeBtn = document.getElementById('theme-toggle');
const langSelect = document.getElementById('lang-select');

// Загрузка темы из localStorage
if(localStorage.getItem('theme')) {
  document.body.className = localStorage.getItem('theme');
} else {
  document.body.className = 'light';
}

themeBtn.addEventListener('click', () => {
  if(document.body.classList.contains('light')) {
    document.body.className = 'dark';
  } else {
    document.body.className = 'light';
  }
  localStorage.setItem('theme', document.body.className);
});

// Переключение языка
function updateLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
  localStorage.setItem('lang', lang);
}

langSelect.addEventListener('change', (e) => updateLanguage(e.target.value));
if(localStorage.getItem('lang')) {
  langSelect.value = localStorage.getItem('lang');
  updateLanguage(localStorage.getItem('lang'));
} else {
  updateLanguage('ru');
}