import gsap from 'gsap';
import { jump, graceful, salute } from './poses';
import { resetMyGuy } from './poses';

export function showPoses(e) {
  resetMyGuy('trans', 0.5);

  console.log(e);

  setTimeout(() => {
    jump(0.45);
    document.querySelector('#jump').play();
  }, 200);

  // setTimeout(() => {
  // }, 350);

  gsap.to('.pose-select', { delay: 1, duration: 1, scaleX: 1, y: '-110%', ease: 'power3.out' });
  document.getElementById('pose-selector').disabled = true;
}

const poseSelect = document.querySelectorAll('.pose-select img');
poseSelect.forEach((pose) => pose.addEventListener('click', adeptNewPose));

function adeptNewPose() {
  const duration = 1.2;
  graceful(); // TODO should be the selected pose
  gsap.to('#body', { y: 0, scaleY: 1.05, duration: duration, ease: 'power3.out' });
  gsap.to('.pose-select', { duration: duration, scaleX: 1, y: '100%', ease: 'power4.out' });
  gsap.to('#shadow', { autoAlpha: 0.14, duration: duration * 1.5, ease: 'Expo.out' });
  document.getElementById('pose-selector').disabled = false;
  document.querySelector('#land').play();
}
