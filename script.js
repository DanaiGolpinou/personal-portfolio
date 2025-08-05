const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.remove('light-mode');
  body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');
  const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});

function openTab(id) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  document.querySelectorAll('.tab-buttons button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  let result;
  if (!isNaN(num1) && !isNaN(num2)) {
    switch (operator) {
      case '+': result = num1 + num2; break;
      case '-': result = num1 - num2; break;
      case '*': result = num1 * num2; break;
      case '/': result = num2 !== 0 ? num1 / num2 : 'Error'; break;
    }
    document.getElementById('calc-result').textContent = 'Result: ' + result;
  }
}

function updateClock() {
  const zones = [
    { name: 'New York', offset: -4 },
    { name: 'London', offset: 0 },
    { name: 'Athens', offset: 3 },
    { name: 'Dubai', offset: 4 },
    { name: 'Tokyo', offset: 9 }
  ];

  const now = new Date();
  const container = document.getElementById('clock-container');
  container.innerHTML = '';

  zones.forEach(zone => {
    const localTime = new Date(now.getTime() + zone.offset * 60 * 60 * 1000);
    const timeStr = localTime.toUTCString().slice(17, 25);
    const row = document.createElement('div');
    row.className = 'clock-row';
    row.innerHTML = `<strong>${zone.name}</strong><span>${timeStr}</span>`;
    container.appendChild(row);
  });
}
setInterval(updateClock, 1000);
updateClock();

function formatText(mode) {
  let text = document.getElementById('text-input').value;
  if (mode === 'upper') text = text.toUpperCase();
  else if (mode === 'lower') text = text.toLowerCase();
  else if (mode === 'proper') text = text.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase());
  document.getElementById('text-input').value = text;
}

function rollDice() {
  const dice = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
  const die1 = dice[Math.floor(Math.random() * 6)];
  const die2 = dice[Math.floor(Math.random() * 6)];
  document.getElementById('dice-result').textContent = `${die1} ${die2}`;
}

function updateCount() {
  const text = document.getElementById('char-input').value;
  document.getElementById('char-count').textContent = text.length;
}