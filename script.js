// Simulated collaborative editing
const editor = document.getElementById('editor');
editor.addEventListener('input', () => {
  localStorage.setItem('collabDoc', editor.value);
});
window.addEventListener('load', () => {
  editor.value = localStorage.getItem('collabDoc') || '';
});
setInterval(() => {
  editor.value = localStorage.getItem('collabDoc') || '';
}, 1000);