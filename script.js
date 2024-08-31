const jamHour = document.getElementById('jam-hour');
const jamMinute = document.getElementById('jam-minute');
const jamSecond = document.getElementById('jam-second');

function updateJam() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  jamHour.textContent = String(hour).padStart(2, '0');
  jamMinute.textContent = String(minute).padStart(2, '0');
  jamSecond.textContent = String(second).padStart(2, '0');
}

setInterval(updateJam, 1000); // update jam setiap 1 detik