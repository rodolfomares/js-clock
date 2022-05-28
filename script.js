const tickSound = new Audio('./assets/clock-tick.mp3');
const hoursHand = document.getElementById('hand-hours');
const minutesHand = document.getElementById('hand-minutes');
const secondsHand = document.getElementById('hand-seconds');
const toggleSound = document.getElementById('toggle-sound');

function setRotation (element, rotationAngle) {
  element.style.setProperty('--rotation', rotationAngle);
}

function updateTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var secondsRotation = seconds / 60 * 360;
  var minutesRotation = (minutes / 60 * 360);
  var hoursRotation = (hours / 12 * 360) + (minutesRotation / 12); 

  toggleSound.checked && tickSound.play();

  setRotation(hoursHand, hoursRotation);
  setRotation(minutesHand, minutesRotation);
  setRotation(secondsHand, secondsRotation);
  
}

setInterval(updateTime, 1000);