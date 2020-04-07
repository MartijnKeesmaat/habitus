import gsap from 'gsap';
import { graceful, resetMyGuy, cheeky, fall } from './poses';

const sequenceTrigger = document.querySelector('#start-sequence');
sequenceTrigger.addEventListener('click', function () {
  gsap.to('.view .mannenman', { y: '140%', duration: 1 });
  gsap.to('#shadow', { autoAlpha: 0, duration: 1 });
  gsap.to('.sequence', { y: '175%', duration: 1, delay: 1 });
  resetMyGuy('set');

  sequenceTrigger.disabled = true;

  fall(1);

  setTimeout(() => {
    cheeky(4);
    startSequenceCapture(2000, 200);
  }, 1500);
});

function startSequenceCapture(duration, interval) {
  const sequenceTimer = setInterval(myTimer, interval);
  captureSequence(document.querySelector('.content svg'), document.querySelector('.sequence__container'));

  function myTimer() {
    captureSequence(document.querySelector('.content svg'), document.querySelector('.sequence__container'));
  }

  // Stop after 2s
  setTimeout(() => {
    clearInterval(sequenceTimer);
  }, duration);
}

let frameCount = 0;
// http://stackoverflow.com/questions/3768565/drawing-a-svg-file-on-a-html5-canvas
function captureSequence(source, target) {
  const imgDOM = document.createElement('img');
  const canvas = document.querySelector('canvas');
  const number = document.createElement('span');
  const container = document.createElement('div');

  frameCount++;
  number.textContent = frameCount < 10 ? `0${frameCount}` : frameCount;

  // get svg data
  const xml = new XMLSerializer().serializeToString(source);

  // make it base64
  const svg64 = btoa(xml);
  const b64Start = 'data:image/svg+xml;base64,';

  // prepend a "header"
  const image64 = b64Start + svg64;

  // set it as the source of the img element
  imgDOM.src = image64;

  // draw the image onto the canvas
  canvas.getContext('2d').drawImage(imgDOM, 0, 0);

  target.appendChild(container);
  container.appendChild(number);
  container.appendChild(imgDOM);
}
