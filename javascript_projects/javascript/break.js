let timeToDisplay = document.querySelector(".current-time");
let currentTime = () => {
  timeToDisplay.textContent = new Date().toLocaleTimeString();
};
setInterval(currentTime, 1000);

let remaingSeconds = 3600;
setInterval(() => {
    document.querySelector(".main").innerHTML = `
        <div class="break-time">
            <h1>Registration will start in ${formatTime(
              remaingSeconds
            )} minutes</h1>
        </div>`;
    remaingSeconds--;
  }, 1000);

function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}
