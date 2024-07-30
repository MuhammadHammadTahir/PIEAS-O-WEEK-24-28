let timeToDisplay = document.querySelector(".current-time");
let currentTime = () => {
  timeToDisplay.textContent = new Date().toLocaleTimeString();
};
setInterval(currentTime, 1000);

let innerHTML = ``;
let componet = document.querySelector(`.container`);
let populateData= JSON.parse(localStorage.getItem("data")) ?? data;
// console.log(populateData);
for (i = 0; i < populateData.length; i++) {
  innerHTML += `<div class="department ${populateData[i].class}">
                  <h1 id=${populateData[i].class} class="counter">${populateData[i].counter}</h1>
                  <h2>${populateData[i].name}</h2>
              </div>`;
}
innerHTML+=`<div class="break-time">
              <a class="current-time break" href="http://127.0.0.1:5500/break.html" onclick="storeCount()">Break Time: 12:30AM -  1:30PM</a>
            </div>`
componet.innerHTML = innerHTML;

let counterHandler = (event) => {
  const departmentIndex = parseInt(event.key) - 1;
  if (event.ctrlKey && departmentIndex >= 0 && departmentIndex < data.length) {
    if (data[departmentIndex].counter > 0) {
      data[departmentIndex].counter--;
      const counterElement = document.querySelector(
        `#${data[departmentIndex].class}`
      );
      counterElement.textContent = data[departmentIndex].counter;
    }
  } else if (departmentIndex >= 0 && departmentIndex < data.length) {
    data[departmentIndex].counter++;
    const counterElement = document.querySelector(
      `#${data[departmentIndex].class}`
    );
    counterElement.textContent = data[departmentIndex].counter;
  }
};

document.addEventListener("keydown", counterHandler);

let storeCount = () => {
  localStorage.setItem("data", JSON.stringify(data));
};

