// بررسی تم ذخیره شده یا تنظیم پیش‌فرض
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateToggleIcon(savedTheme);

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateToggleIcon(newTheme);
}

function updateToggleIcon(theme) {
  const toggleButton = document.getElementById('themeToggle');
  toggleButton.textContent = theme === 'dark' ? '☀️' : '🌙';
}