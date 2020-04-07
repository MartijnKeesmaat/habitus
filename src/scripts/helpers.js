import { jump, graceful, salute, cheeky, ninjaCrouch, flex, greet } from './poses';

const poses = [salute, graceful, cheeky, ninjaCrouch, flex, greet];

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
