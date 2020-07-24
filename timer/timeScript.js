const timeToBeReach = new Date("July 24, 2020 22:00:00").getTime();

const updateCountDown = setInterval(() => {

  const now = new Date().getTime();

  const timeDistance = timeToBeReach - now;

  const days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);

  const countDown = document.getElementById('countdown');

  countDown.innerHTML = `
    
    <div class="time-box">${hours} <span>hours</span></div>
    <div class="time-box">${minutes} <span>minutes</span></div>
    <div class="time-box">${seconds} <span>seconds</span></div>
  `;

  countDown.style.opacity = 1;

  //if time is up
  if (timeDistance < 0) {
    clearInterval(updateCountDown);
    countDown.innerHTML = "It's time !";
  }

}, 1000);