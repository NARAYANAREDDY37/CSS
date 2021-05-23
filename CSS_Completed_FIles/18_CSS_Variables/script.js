console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--background'));

console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--text-color'));

/* setting the themes */

//Dark theme
document.getElementById('dark-theme-btn').addEventListener('click', () => {
  document.documentElement.style.setProperty('--background-color', '#333');
})

//Light theme
document.getElementById('light-theme-btn').addEventListener('click', () => {
  document.documentElement.style.setProperty('--background-color', 'white');
})