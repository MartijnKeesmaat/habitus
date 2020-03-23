import gsap from 'gsap';
import { randomPose } from './helpers';
import { resetMyGuy, salute, graceful } from './poses';

// TODO should be dynamic
const contentSections = document.querySelectorAll('.content-section');

const timeNode = document.querySelector('.time-selector h4');

export function actionTimedPose() {
  // TODO make this dynamic
  contentSections[0].classList.toggle('content-section--active');
  contentSections[1].classList.toggle('content-section--active');

  // TODO parameter
  let time = 5;
  let timer = 5;

  setInterval(() => {
    const prefixTime = timer < 10 ? `0${timer}` : timer;
    timeNode.innerHTML = `00:${prefixTime}`;
    console.log(timer);

    if (timer === 1) {
      resetMyGuy('trans', 0.5);
      setTimeout(() => randomPose(2), 1500);
    }
    if (timer === 0) {
      timer = time;
    }
    timer--;
  }, 1000);
}
