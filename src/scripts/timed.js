import gsap from 'gsap';
import { randomPose } from './helpers';
import { resetMyGuy, salute, graceful } from './poses';

const trigger = document.querySelector('.time-selector');
trigger.addEventListener('click', actionTimedPose);

const timeNode = document.querySelector('.time-selector h4');

function actionTimedPose() {
  // TODO parameter
  let time = 5;
  let timer = 5;

  setInterval(() => {
    const prefixTime = timer < 10 ? `0${timer}` : timer;
    timeNode.innerHTML = `00:${prefixTime}`;
    console.log(timer);

    if (timer === 1) {
      resetMyGuy('trans', 0.5);
      setTimeout(() => randomPose(1.5), 1500);
    }
    if (timer === 0) {
      timer = time;
    }
    timer--;
  }, 1000);
}
