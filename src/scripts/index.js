import gsap from 'gsap';

const allParts = [
  '#left-arm',
  '#left-lower-arm',
  '#left-lower-arm-hand',
  '#left-upper-arm',
  '#left-hand',
  '#left-elbow',

  '#right-arm',
  '#right-upper-arm',
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

resetMyGuy('set');

// setTimeout(() => jump(0.5), 3000);

function jump(duration) {
  gsap.to('#body', { duration: duration, y: 80, scaleY: 0.9, ease: 'power3.out' });

  gsap.to('#left-leg', { duration: duration, y: 5, scaleY: 0.85, ease: 'power3.out' });
  gsap.to('#right-leg', { duration: duration, y: 5, scaleY: 0.85, ease: 'power3.out' });

  gsap.to('#left-lower-leg-foot', { duration: duration, rotate: -5, transformOrigin: 'bottom', ease: 'power3.out' });
  gsap.to('#right-lower-leg-foot', { duration: duration, rotate: 5, transformOrigin: 'bottom', ease: 'power3.out' });
  gsap.to('#left-upper-leg-knee', { duration: duration, scaleY: 0.8, y: 20, rotate: 10, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-upper-leg-knee', { duration: duration, scaleY: 0.8, y: 20, rotate: -10, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#head', { duration: duration, y: 5, scaleY: 0.95, ease: 'power3.out' });
  gsap.to('#upper-body', { duration: duration, y: 50, scaleY: 0.88, ease: 'power3.out' });
  gsap.to('#left-arm', { duration: duration, y: 50, ease: 'power3.out' });
  gsap.to('#right-arm', { duration: duration, y: 50, ease: 'power3.out' });
  gsap.to('#waist', { duration: duration, y: 40, ease: 'power3.out' });
  gsap.to('#hips', { duration: duration, y: 40, ease: 'power3.out' });
  gsap.to('#left-leg-connection', { duration: duration, y: 20, ease: 'power3.out' });
  gsap.to('#right-leg-connection', { duration: duration, y: 20, ease: 'power3.out' });

  gsap.to('#left-arm', { duration: duration, scaleY: 0.85, rotate: 30, x: 10, scaleX: 0.9, ease: 'power3.out', transformOrigin: 'top' });
  gsap.to('#left-lower-arm-hand', { duration: duration, rotate: -150, ease: 'power3.out', transformOrigin: 'top' });

  gsap.to('#right-arm', { duration: duration, scaleY: 0.85, rotate: -30, scaleX: 0.9, x: -10, ease: 'power3.out', transformOrigin: 'top' });
  gsap.to('#right-lower-arm-hand', { duration: duration, rotate: 150, ease: 'power3.out', transformOrigin: 'top' });

  gsap.to('#shadow', { autoAlpha: 0.3, duration: duration * 1.5, ease: 'Expo.out' });

  // gsap.to('#body', { delay: duration, duration: duration, ease: 'power3.out' });
  gsap.to('#body', { delay: duration * 1.1, y: '-100%', scaleY: 1.05, duration: duration * 1.5, ease: 'Expo.out' });
  gsap.to('#shadow', { delay: duration * 1.1, autoAlpha: 0, duration: duration * 1.5, ease: 'Expo.out' });

  allParts.forEach(part => {
    gsap.to(part, { duration: duration / 2, delay: duration, scaleX: 1, scaleY: 1, rotate: 0, x: 0, y: 0, ease: 'power3.out' });
  });
  // gsap.to('#body', { delay: duration, duration: duration * 2, scaleY: 2, y: -1200, ease: 'power4.out' });
}

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
  gsap.to('#upper-body', { duration: 1.5, rotate: -1, x: -2, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#neck', { duration: 1.5, y: 2, x: 5, rotate: -3, ease: 'power3.out' });
  gsap.to('#left-arm', { duration: 1.5, rotate: 100, x: 40, y: -5, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-arm-hand', { duration: 0.75, rotate: 160, y: 5, x: -2, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-upper-arm', { duration: 2, x: 5, rotate: -10, ease: 'power3.out' });
  gsap.to('#right-lower-arm-hand', { duration: 2, rotate: 8, x: 2, y: -3, ease: 'power3.out' });
  gsap.to('#hips', { duration: 2, rotate: 3, ease: 'power3.out' });
}

function resetMyGuy(mode, duration) {
  allParts.forEach(part => {
    gsap.to(part, { duration: mode === 'set' ? 0 : duration, scaleX: 1, scaleY: 1, rotate: 0, x: 0, y: 0, ease: 'power3.out' });
  });

  setTimeout(() => {
    allParts.forEach(part => {
      gsap.to(part, { delay: mode === 'set' ? 0 : duration, transformOrigin: '50% 50%' });
    });
  }, 1000);
}

function startSequenceCapture(duration, interval) {
  const sequenceTimer = setInterval(myTimer, interval);

  captureSequence(document.querySelector('svg'), document.querySelector('body'));

  function myTimer() {
    captureSequence(document.querySelector('svg'), document.querySelector('body'));
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

const poseDemo = document.querySelector('#poseDemo');
poseDemo.addEventListener('click', pose);

const timedDemo = document.querySelector('#timedDemo');
timedDemo.addEventListener('click', timed);

const demoButton = document.querySelector('#sequenceDemo');
demoButton.addEventListener('click', sequencePose);

function pose() {
  salute(1.5);
}

function timed() {
  salute(1.5);

  setTimeout(() => {
    resetMyGuy('trans', 1);
  }, 2000);

  setTimeout(() => {
    graceful(1);
  }, 4000);

  setTimeout(() => {
    resetMyGuy('trans', 1);
  }, 6000);

  setTimeout(() => {
    salute(1);
  }, 8000);

  setTimeout(() => {
    resetMyGuy('trans', 1);
  }, 10000);
}

function sequencePose() {
  graceful(2);
  startSequenceCapture(1000, 200);
}

const poseSelector = document.querySelector('#pose-selector');
poseSelector.addEventListener('click', showPoses);

function showPoses() {
  resetMyGuy('trans', 0.5);

  setTimeout(() => {
    jump(0.45);
  }, 200);

  gsap.to('.pose-select', { delay: 1, duration: 1, scaleX: 1, y: '-50%', ease: 'power3.out' });
}

const poseSelect = document.querySelectorAll('.pose-select img');
poseSelect.forEach(pose => pose.addEventListener('click', adeptNewPose));

function adeptNewPose() {
  const duration = 1.2;
  graceful();
  gsap.to('#body', { y: 0, scaleY: 1.05, duration: duration, ease: 'power3.out' });
  gsap.to('.pose-select', { duration: duration, scaleX: 1, y: '100%', ease: 'power4.out' });
  gsap.to('#shadow', { autoAlpha: 0.14, duration: duration * 1.5, ease: 'Expo.out' });
}
