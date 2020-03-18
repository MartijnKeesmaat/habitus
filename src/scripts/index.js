import gsap from 'gsap';

//simple tween like the old TweenMax.to(...)
// gsap.to('h1', { duration: 1.5, x: 100 });

//create a timeline and add a tween
// var tl = gsap.timeline();
// tl.to('h1', { duration: 1.5, x: 100 });
// tl.to('h1', { duration: 1.5, y: 100 });

graceful();
setTimeout(() => resetMyGuy(), 5000);

function graceful() {
  gsap.to('#left-arm', { duration: 1, rotate: 170, x: 60, y: 20, transformOrigin: 'top' });
  gsap.to('#left-lower-arm-hand', { delay: 0.5, duration: 1.5, rotate: 120, transformOrigin: 'top' });
  gsap.to('#right-arm', { duration: 1, x: 10, y: 30, rotate: 10, transformOrigin: 'top' });
  gsap.to('#right-lower-arm-hand', { duration: 1, rotate: -100, transformOrigin: 'top' });
  gsap.to('#upper-body', { duration: 1.5, rotate: 20, y: 5, transformOrigin: 'bottom' });
  gsap.to('#waist', { duration: 1.5, rotate: 20, x: -5, y: 5, transformOrigin: 'bottom' });
  gsap.to('#hips', { duration: 1.5, rotate: -4, y: 2, transformOrigin: 'bottom' });
  // gsap.to('#right-leg', { duration: 1.5, y: 10 });
}

function salute() {
  gsap.to('#head', { duration: 1.5, y: 2, rotate: -8, transformOrigin: '0% 100%' });
  gsap.to('#upper-body', { duration: 1.5, rotate: -3 });
  gsap.to('#neck', { duration: 1.5, y: -2, rotate: -3 });
  gsap.to('#left-arm', { duration: 1.5, rotate: 80, x: 40, y: -5 });
  gsap.to('#left-lower-arm-hand', { duration: 0.75, rotate: -80 });
  gsap.to('#left-lower-arm-hand', { duration: 0.75, rotate: 160, x: 25 });
  gsap.to('#right-lower-arm-hand', { duration: 2, rotate: 8, y: -3 });
  gsap.to('#hips', { duration: 2, rotate: 3 });
}

function resetMyGuy() {
  gsap.to('#head', { duration: 1.5, y: 0, rotate: 0, transformOrigin: '0% 100%' });
  gsap.to('#upper-body', { duration: 1.5, rotate: 0 });
  gsap.to('#neck', { duration: 1.5, y: 0, rotate: 0 });
  gsap.to('#left-arm', { duration: 1.5, rotate: 0, x: 0, y: 0 });
  gsap.to('#left-lower-arm-hand', { duration: 0.75, rotate: 0 });
  gsap.to('#left-lower-arm-hand', { duration: 0.75, rotate: 0, x: 0 });
  gsap.to('#right-lower-arm-hand', { duration: 2, rotate: 0, y: 0 });
  gsap.to('#hips', { duration: 2, rotate: 0 });
}
