import gsap from 'gsap';
import { jump, graceful, salute, fall, resetMyGuy } from './poses';
import { randomPose } from './helpers';

export function showPoses(e) {
  resetMyGuy('set');

  console.log(e);

  setTimeout(() => {
    jump(0.45);
    // document.querySelector('#jump').play();
  }, 400);

  gsap.to('.pose-select', { delay: 1, duration: 1, scaleX: 1, y: '-110%', ease: 'power3.out' });
  document.getElementById('pose-selector').disabled = true;
}

const poseSelect = document.querySelectorAll('.pose-select img');
poseSelect.forEach((pose) => pose.addEventListener('click', adeptNewPose));

function adeptNewPose() {
  const duration = 1.2;
  fall(duration / 2);
  gsap.to('#body', { y: 0, scaleY: 1, duration: duration, ease: 'power4.out' });

  // setTimeout(() => {
  //   resetMyGuy('trans', 0.5);
  // }, duration);

  setTimeout(() => {
    salute(2); // TODO should be the selected pose
  }, 1400);

  gsap.to('.pose-select', { duration: duration, scaleX: 1, y: '100%', ease: 'power4.out' });
  gsap.to('#shadow', { autoAlpha: 0.14, duration: duration * 1.5, ease: 'Expo.out' });
  document.getElementById('pose-selector').disabled = false;
  document.querySelector('#land').play();
}
