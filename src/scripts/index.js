import gsap from 'gsap';

//simple tween like the old TweenMax.to(...)
// gsap.to('h1', { duration: 1.5, x: 100, , ease: "power3.out" });

//create a timeline and add a tween
// var tl = gsap.timeline();
// tl.to('h1', { duration: 1.5, x: 100, , ease: "power3.out" });
// tl.to('h1', { duration: 1.5, y: 100, , ease: "power3.out" });

setTimeout(() => resetMyGuy(), 5000);

function graceful(duration) {
  gsap.to('#left-arm', { duration: 1, rotate: 170, x: 60, y: 20, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-arm-hand', { delay: 0.1, duration: 1.5, rotate: 120, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-arm', { duration: 1, x: 10, y: 30, rotate: 10, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-lower-arm-hand', { duration: 1, rotate: -120, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#upper-body', { duration: duration, rotate: 20, y: 10, transformOrigin: 'bottom', ease: 'power3.out' });
  gsap.to('#waist', { duration: duration, rotate: 20, x: -5, y: 5, transformOrigin: 'bottom', ease: 'power3.out' });
  gsap.to('#hips', { duration: duration, rotate: -4, y: 2, transformOrigin: 'bottom', ease: 'power3.out' });
  gsap.to('#head', { duration: duration, rotate: 30, y: 6, transformOrigin: 'bottom', ease: 'power3.out' });
  gsap.to('#neck', { duration: duration, rotate: 30, transformOrigin: 'left', ease: 'power3.out' });

  gsap.to('#left-upper-leg-knee', { duration: duration, rotate: 3, ease: 'power3.out' });
  gsap.to('#left-lower-leg-foot', { duration: duration, rotate: -2, ease: 'power3.out', transformOrigin: 'bottom' });
  gsap.to('#right-leg', { duration: duration, y: -5, ease: 'power3.out' });
  gsap.to('#right-lower-leg-foot', { duration: duration, y: -10, x: 15, rotate: 10, ease: 'power3.out' });
  gsap.to('#right-upper-leg-knee', { duration: duration, rotate: -10, ease: 'power3.out' });
}

function salute() {
  gsap.to('#head', { duration: 1.5, y: 2, rotate: -8, transformOrigin: '0% 100%', ease: 'power3.out' });
  gsap.to('#upper-body', { duration: 1.5, rotate: -3, ease: 'power3.out' });
  gsap.to('#neck', { duration: 1.5, y: -2, rotate: -3, ease: 'power3.out' });
  gsap.to('#left-arm', { duration: 1.5, rotate: 80, x: 40, y: -5, ease: 'power3.out' });
  gsap.to('#left-lower-arm-hand', { duration: 0.75, rotate: -80, ease: 'power3.out' });
  gsap.to('#left-lower-arm-hand', { duration: 0.75, rotate: 160, x: 25, ease: 'power3.out' });
  gsap.to('#right-lower-arm-hand', { duration: 2, rotate: 8, y: -3, ease: 'power3.out' });
  gsap.to('#hips', { duration: 2, rotate: 3, ease: 'power3.out' });
}

function resetMyGuy() {
  gsap.to('#left-arm', { duration: 1, rotate: 0, x: 0, y: 0, ease: 'power3.out' });
  gsap.to('#left-lower-arm-hand', { delay: 0.1, duration: 1.5, rotate: 0, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-arm', { duration: 1, x: 0, y: 0, rotate: 0, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-lower-arm-hand', { duration: 1, rotate: 0, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#upper-body', { duration: 1.5, rotate: 0, y: 0, transformOrigin: 'bottom', ease: 'power3.out' });
  gsap.to('#waist', { duration: 1.5, rotate: 0, x: 0, y: 0, transformOrigin: 'bottom', ease: 'power3.out' });
  gsap.to('#hips', { duration: 1.5, rotate: 0, y: 0, transformOrigin: 'bottom', ease: 'power3.out' });
  gsap.to('#head', { duration: 1.5, rotate: 0, y: 0, transformOrigin: 'bottom', ease: 'power3.out' });
  gsap.to('#neck', { duration: 1.5, rotate: 0, transformOrigin: 'left', ease: 'power3.out' });

  gsap.to('#right-leg', { duration: 1.5, y: 0, ease: 'power3.out' });
  gsap.to('#right-leg', { duration: 1.5, y: 0, ease: 'power3.out' });
  gsap.to('#left-lower-leg-foot', { duration: 1.5, rotate: 0, ease: 'power3.out' });
  gsap.to('#right-lower-leg-foot', { duration: 1.5, y: 0, x: 0, rotate: 0, ease: 'power3.out' });
  gsap.to('#right-upper-leg-knee', { duration: 1.5, rotate: 0, ease: 'power3.out' });
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

function timed() {
  graceful(1.5);

  setTimeout(() => {
    resetMyGuy();
  }, 3000);

  setTimeout(() => {
    salute(1.5);
  }, 4000);

  setTimeout(() => {
    resetMyGuy();
  }, 6000);
}

function sequencePose() {
  graceful(1.5);
  startSequenceCapture(1500);
}
