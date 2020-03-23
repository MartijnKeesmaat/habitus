import { jump, graceful, salute } from './poses';

const poses = [salute, graceful];

export function randomPose(duration) {
  const rand = Math.floor(Math.random() * poses.length);
  poses[rand](2); // 2 = time
}
