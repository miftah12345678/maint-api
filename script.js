// Automatic update of links preserving path
const newDomain = "api.hamsoffc.my.id";
const currentPath = window.location.pathname + window.location.search;
const newUrl = "https://" + newDomain + currentPath;

document.getElementById("redirect-btn").href = newUrl;

// Countdown Redirect
let seconds = 10;
const countdownEl = document.getElementById("countdown");

const timer = setInterval(() => {
  seconds--;
  countdownEl.textContent = seconds;
  if (seconds <= 0) {
    clearInterval(timer);
    window.location.href = newUrl;
  }
}, 1000);
