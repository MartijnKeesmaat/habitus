import gsap from 'gsap';
import { graceful, resetMyGuy } from './poses';

const sequenceTrigger = document.querySelector('.small-man-wrapper');
sequenceTrigger.addEventListener('click', function() {
  gsap.to('.view .mannenman', { y: '140%', duration: 1 });
  gsap.to('#shadow', { autoAlpha: 0, duration: 1 });
  gsap.to('.sequence', { y: '175%', duration: 1, delay: 1 });
  resetMyGuy('set');

  setTimeout(() => {
    graceful(5);
    startSequenceCapture(2000, 200);
  }, 1000);
});

function startSequenceCapture(duration, interval) {
  const sequenceTimer = setInterval(myTimer, interval);
  console.log(document.querySelector('.content svg'));
  captureSequence(document.querySelector('.content svg'), document.querySelector('.sequence__container'));

  function myTimer() {
    captureSequence(document.querySelector('.content svg'), document.querySelector('.sequence__container'));
  }

  // Stop after 2s
  setTimeout(() => {
    clearInterval(sequenceTimer);
  }, duration);
}

// http://stackoverflow.com/questions/3768565/drawing-a-svg-file-on-a-html5-canvas
function captureSequence(source, target) {
  var imgDOM = document.createElement('img');
  var canvas = document.querySelector('canvas');

  // get svg data
  var xml = new XMLSerializer().serializeToString(source);

  // make it base64
  var svg64 = btoa(xml);
  var b64Start = 'data:image/svg+xml;base64,';

  // prepend a "header"
  var image64 = b64Start + svg64;

  // set it as the source of the img element
  imgDOM.src = image64;

  // draw the image onto the canvas
  canvas.getContext('2d').drawImage(imgDOM, 0, 0);
  target.appendChild(imgDOM);
}
