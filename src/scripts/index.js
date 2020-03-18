import gsap from 'gsap';

const allParts = [
  '#left-arm',
  '#left-lower-arm',
  '#left-lower-arm-hand',
  '#left-hand',
  '#left-elbow',

  '#right-arm',
  '#right-lower-arm',
  '#right-lower-arm-hand',
  '#right-hand',
  '#right-elbow',

  '#upper-body',
  '#waist',
  '#hips',
  '#head',
  '#neck',
  '#torso',

  '#right-foot',
  '#right-leg',
  '#right-knee',
  '#right-lower-leg',
  '#right-upper-leg',
  '#right-lower-leg-foot',
  '#right-upper-leg-knee',
  '#right-leg-connection',

  '#left-foot',
  '#left-leg',
  '#left-knee',
  '#left-lower-leg',
  '#left-upper-leg',
  '#left-upper-leg-knee',
  '#left-lower-leg-foot',
  '#left-leg-connection'
];

function graceful(duration) {
  gsap.to('#left-arm', { duration: duration / 1.5, rotate: 170, x: 60, y: 20, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-arm-hand', { delay: 0.1, duration: duration, rotate: 120, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-arm', { duration: duration / 1.5, x: 10, y: 30, rotate: 10, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-lower-arm-hand', { duration: duration / 1.5, rotate: -120, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#upper-body', { duration: duration, rotate: 20, y: 10, transformOrigin: 'bottom', ease: 'power3.out' });
  gsap.to('#waist', { duration: duration, rotate: 20, x: -5, y: 5, transformOrigin: 'bottom', ease: 'power3.out' });
  gsap.to('#hips', { duration: duration, rotate: -4, y: 2, transformOrigin: 'bottom', ease: 'power3.out' });
  gsap.to('#head', { duration: duration, rotate: 30, y: 6, transformOrigin: 'bottom', ease: 'power3.out' });
  gsap.to('#neck', { duration: duration, rotate: 30, transformOrigin: 'left', ease: 'power3.out' });

  gsap.to('#left-upper-leg-knee', { duration: duration, rotate: 3, ease: 'power3.out' });
  gsap.to('#left-lower-leg-foot', { duration: duration, rotate: -2, ease: 'power3.out', transformOrigin: 'bottom' });
  gsap.to('#right-leg', { duration: duration, y: -5, ease: 'power3.out' });
  gsap.to('#right-lower-leg-foot', { duration: duration, y: -10, x: 15, rotate: 10, ease: 'power3.out', transformOrigin: 'top' });
  gsap.to('#right-upper-leg-knee', { duration: duration, rotate: -10, x: 10, ease: 'power3.out' });
}

function salute() {
  gsap.to('#head', { duration: 1.5, y: 10, x: -4, rotate: -8, ease: 'power3.out' });
  gsap.to('#upper-body', { duration: 1.5, rotate: -3, ease: 'power3.out' });
  gsap.to('#neck', { duration: 1.5, y: 2, x: 5, rotate: -3, ease: 'power3.out' });
  gsap.to('#left-arm', { duration: 1.5, rotate: 100, x: 40, y: -5, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-arm-hand', { duration: 0.75, rotate: 160, y: 5, x: -2, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-lower-arm-hand', { duration: 2, rotate: 8, y: -3, ease: 'power3.out' });
  gsap.to('#hips', { duration: 2, rotate: 3, ease: 'power3.out' });
}

function resetMyGuy() {
  allParts.forEach(part => {
    gsap.to(part, { duration: 1, rotate: 0, x: 0, y: 0, ease: 'power3.out' });
  });

  allParts.forEach(part => {
    gsap.set(part, { delay: 1, transformOrigin: '50% 50%' });
  });
}

function startSequenceCapture(duration) {
  const sequenceTimer = setInterval(myTimer, 500);

  captureSequence(document.querySelector('svg'), document.querySelector('body'));

  function myTimer() {
    captureSequence(document.querySelector('svg'), document.querySelector('body'));
  }

  // Stop after 2s
  setTimeout(() => {
    myStopFunction();
  }, duration);

  function myStopFunction() {
    clearInterval(sequenceTimer);
  }
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

const poseDemo = document.querySelector('#poseDemo');
poseDemo.addEventListener('click', pose);

const timedDemo = document.querySelector('#timedDemo');
timedDemo.addEventListener('click', timed);

const demoButton = document.querySelector('#sequenceDemo');
demoButton.addEventListener('click', sequencePose);

function pose() {
  graceful(1.5);
}

function timed() {}

graceful(1);

setTimeout(() => {
  resetMyGuy();
}, 2000);

// setTimeout(() => {
//   salute(1.5);
// }, 3000);

function sequencePose() {
  graceful(1.5);
  startSequenceCapture(1500);
}
