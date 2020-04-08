import gsap from 'gsap';
import { jump, graceful, salute, fall, resetMyGuy, ninjaCrouch, ninja, stretch, greet, flex, hips } from './poses';
import { randomPose } from './helpers';

export function showPoses(e) {
  resetMyGuy('trans', 0.3);

  setTimeout(() => {
    jump(0.45);
    document.querySelector('#jump').play();
  }, 400);

  gsap.to('.pose-select', { delay: 1, duration: 1, scaleX: 1, y: '-104%', ease: 'power3.out' });
  document.getElementById('pose-selector').disabled = true;
}

const poseSelect = document.querySelectorAll('.pose-select .row div');
poseSelect.forEach((pose) => pose.addEventListener('click', adeptNewPose));

function adeptNewPose(e) {
  const selected = e.currentTarget;
  const pose = selected.querySelector('p').textContent.toLowerCase();

  const duration = 1.2;
  fall(duration / 2);
  gsap.to('#body', { y: 0, scaleY: 1, duration: duration, ease: 'power4.out' });

  setTimeout(() => {
    if (pose === 'cross') stretch(1.5);
    if (pose === 'graceful') graceful(1.5);
    if (pose === 'pole') ninja(1.5);
    if (pose === 'crouch') ninjaCrouch(1.5);
    if (pose === 'greet') greet(1.5);
    if (pose === 'salute') salute(1.5);
    if (pose === 'flex') flex(1.5);
    if (pose === 'sunshine') hips(1.5);
    if (pose === 'stand') resetMyGuy(1.5);

    // jump, salute, graceful, resetMyGuy, fall, ninjaCrouch, flex, greet, hips, ninja, stretch

    // [pose](2); // TODO should be the selected pose
  }, 1200);

  gsap.to('.pose-select', { duration: duration, scaleX: 1, y: '100%', ease: 'power4.out' });
  gsap.to('#shadow', { autoAlpha: 0.14, duration: duration * 1.5, ease: 'Expo.out' });
  document.getElementById('pose-selector').disabled = false;
  document.querySelector('#land').play();
}
