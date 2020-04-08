import { graceful, ninja, ninjaCrouch, greet, salute, flex, hips } from './poses';

const poses = [graceful, ninja, ninjaCrouch, greet, salute, flex, hips];

export function randomPose(duration) {
  const rand = Math.floor(Math.random() * poses.length);
  poses[rand](1.8); // 2 = time
  playRandomSound('.creak');
}

export function playRandomSound(classs) {
  const source = document.querySelectorAll(classs);
  const rand = Math.floor(Math.random() * source.length);
  source[rand].play();
}
