import gsap from 'gsap';
import { allParts } from './parts';

export function jump(duration) {
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

  allParts.forEach((part) => {
    gsap.to(part, { duration: duration / 2, delay: duration, scaleX: 1, scaleY: 1, rotate: 0, x: 0, y: 0, ease: 'power3.out' });
  });
  gsap.to('#body', { delay: duration, duration: duration * 2, scaleY: 2, y: '-120%', ease: 'power4.out' });
}

export function fall(duration) {
  gsap.to('.view #body', { duration: duration, scaleY: 1.3, ease: 'power3.out' });
  gsap.to('.view #left-arm', { duration: duration, rotate: 140, x: 40, y: 10, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('.view #right-arm', { duration: duration, rotate: -140, x: -40, y: 10, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('.view #left-lower-arm-hand', { duration: duration, rotate: 50, ease: 'power3.out', transformOrigin: 'top' });
  gsap.to('.view #right-lower-arm-hand', { duration: duration, rotate: -50, ease: 'power3.out', transformOrigin: 'top' });

  setTimeout(() => {
    resetMyGuy('trans', duration);
  }, duration * 1000);
}

export function salute() {
  gsap.to('#head', { duration: 1.5, y: 10, x: -4, rotate: -8, ease: 'power3.out' });
  gsap.to('#upper-body', { duration: 1.5, rotate: -1, x: -2, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#neck', { duration: 1.5, y: 2, x: 5, rotate: -3, ease: 'power3.out' });
  gsap.to('#left-arm', { duration: 1.5, rotate: 100, x: 40, y: -5, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-arm-hand', { duration: 0.75, rotate: 160, y: 5, x: -2, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-upper-arm', { duration: 2, x: 5, rotate: -10, ease: 'power3.out' });
  gsap.to('#right-lower-arm-hand', { duration: 2, rotate: 8, x: 2, y: -3, ease: 'power3.out' });
  gsap.to('#hips', { duration: 2, rotate: 3, ease: 'power3.out' });
}

export function cheeky(duration) {
  gsap.to('#body', { duration, rotate: -3, x: -10, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#upper-body', { duration, scaleY: 0.9, rotate: -29, x: -50, y: 25, ease: 'power3.out' });

  gsap.to('#waist', { duration, rotate: -30, x: -4, y: 10, scale: 1.15, ease: 'power3.out' });
  gsap.to('#hips', { duration, rotate: -10, x: 5, y: 5, scaleY: 0.9, ease: 'power3.out' });

  gsap.to('#left-arm', { duration, x: -35, y: 25, ease: 'power3.out' });
  gsap.to('#left-lower-arm-hand', { duration, rotate: -25, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-hand', { duration, rotate: 50, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-arm', { duration, x: 10, y: -40, rotate: -40, ease: 'power3.out' });
  gsap.to('#right-lower-arm-hand', { duration, rotate: 160, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-hand', { duration, rotate: 10, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#left-leg', { duration, rotate: 25, x: 10, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-leg-foot', { duration, rotate: -25, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#right-leg', { duration, rotate: -10, x: 10, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-lower-leg-foot', { duration, rotate: 10, transformOrigin: 'top', ease: 'power3.out' });
}

export function graceful(duration) {
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

  gsap.to('#left-hand', { duration: duration, rotate: 20, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-hand', { duration: duration, rotate: 40, transformOrigin: 'top', ease: 'power3.out' });
}

export function resetMyGuy(mode, duration) {
  allParts.forEach((part) => {
    gsap.to(part, { duration: mode === 'set' ? 0 : duration, scaleX: 1, scaleY: 1, rotate: 0, x: 0, y: 0, ease: 'power3.out' });
    gsap.to(part, { delay: mode === 'set' ? 0 : duration, transformOrigin: '50% 50%' });
  });
}

export function ninjaCrouch(duration) {
  gsap.to('#body', { duration, y: 160, ease: 'power3.out' });
  gsap.to('#upper-body', { duration, scaleY: 0.9, y: 10, rotate: -10, ease: 'power3.out' });
  gsap.to('#waist', { duration, scaleY: 0.9, rotate: 10, x: 10, ease: 'power3.out' });
  gsap.to('#hips', { duration, scaleY: 0.9, rotate: 10, x: 10, ease: 'power3.out' });

  gsap.to('#left-leg', { duration, rotate: 80, x: 30, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-leg-foot', { duration, rotate: -150, y: 15, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-foot', { duration, rotate: 80, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#right-leg', { duration, rotate: -100, x: -30, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-lower-leg-foot', { duration, rotate: 140, y: 15, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-foot', { duration, rotate: -80, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#left-arm', { duration, rotate: -60, y: 25, x: -5, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-arm-hand', { duration, rotate: 20, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#right-arm', { duration, rotate: 10, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-hand', { duration, rotate: -60, transformOrigin: 'top', ease: 'power3.out' });
}

export function flex(duration) {
  gsap.to('#body', { scaleY: 0.92, y: 50, duration, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#left-arm', { rotate: 70, x: 20, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-arm-hand', { rotate: 140, duration, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#right-arm', { rotate: -70, x: -20, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-lower-arm-hand', { rotate: -140, duration, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#left-hand', { rotate: 60, scaleX: -1, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-hand', { rotate: -60, scaleX: -1, duration, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#left-leg', { duration, rotate: 25, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-leg-foot', { duration, rotate: -25, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#right-leg', { duration, rotate: -10, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-lower-leg-foot', { duration, rotate: 10, transformOrigin: 'top', ease: 'power3.out' });
}

export function greet(duration) {
  gsap.to('#body', { scaleY: 0.95, y: 40, x: 10, duration, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#left-arm', { duration, rotate: 20, x: 10, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-arm-hand', { duration, rotate: -120, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#right-arm', { duration, rotate: -20, x: -10, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-lower-arm-hand', { duration, rotate: 30, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#left-leg', { duration, rotate: 20, x: 5, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-leg-foot', { duration, rotate: -80, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#right-leg', { duration, rotate: -10, x: -5, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-lower-leg-foot', { duration, rotate: 20, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-foot', { duration, rotate: -20, transformOrigin: 'top', ease: 'power3.out' });
}

export function hips(duration) {
  gsap.to('#body', { x: -7, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-arm', { rotate: 120, x: 30, y: 10, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-arm', { rotate: 15, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-lower-arm-hand', { rotate: -20, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-arm-hand', { rotate: 130, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#upper-body', { rotate: 5, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#waist', { x: -10, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#hips', { rotate: -10, x: -15, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-leg', { rotate: -10, x: -5, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-leg', { rotate: 5, x: -5, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-leg-foot', { rotate: -8, duration, transformOrigin: 'top', ease: 'power3.out' });
}

export function ninja(duration) {
  gsap.to('#body', { y: 7, duration, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#left-arm', { rotate: 90, x: 30, y: 10, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-arm-hand', { rotate: 90, duration, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#left-hand', { rotate: 70, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-hand', { rotate: 20, duration, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#upper-body', { rotate: 3, x: 5, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#waist', { x: -2, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#hips', { rotate: -3, x: -6, duration, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#right-leg', { rotate: -10, x: -5, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-lower-leg-foot', { rotate: 3, duration, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#left-leg', { rotate: 10, x: -5, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-leg-foot', { rotate: -3, duration, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#right-arm', { rotate: -5, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-lower-arm-hand', { rotate: -20, duration, transformOrigin: 'top', ease: 'power3.out' });
}

export function stretch(duration) {
  gsap.to('#body', { y: 7, duration, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#left-arm', { rotate: 150, x: 30, y: 15, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-arm-hand', { rotate: 100, duration, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#right-arm', { rotate: -150, x: -30, y: 15, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-lower-arm-hand', { rotate: -100, duration, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#right-leg', { rotate: -10, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#right-lower-leg-foot', { rotate: 10, duration, transformOrigin: 'top', ease: 'power3.out' });

  gsap.to('#left-leg', { rotate: 10, duration, transformOrigin: 'top', ease: 'power3.out' });
  gsap.to('#left-lower-leg-foot', { rotate: -10, duration, transformOrigin: 'top', ease: 'power3.out' });
}
