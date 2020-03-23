import gsap from 'gsap';
import { jump, salute, graceful, resetMyGuy } from './poses';
import { startSequenceCapture } from './sequence';
import { showPoses } from './poseSelector';
import { actionTimedPose } from './timed';

resetMyGuy('set');

/* 
  TODO dynamic function for view switch
  TODO text switch
*/

// Action click events
const poseDemo = document.querySelector('#poseDemo');
poseDemo.addEventListener('click', actionSelectPose);

const timedDemo = document.querySelector('#timedDemo');
timedDemo.addEventListener('click', actionTimedPose);

const demoButton = document.querySelector('#sequenceDemo');
demoButton.addEventListener('click', actionSequencedPose);

function actionSelectPose() {
  // Todo swith to view
}

function actionSequencedPose() {
  gsap.to('.view .mannenman', { y: '100%', duration: 0.7 });
  gsap.to('#shadow', { autoAlpha: 0, duration: 0.7 });
  gsap.to('.sequence', { y: '162%', duration: 0.7, delay: 0.7 });

  setTimeout(() => {
    graceful(5);
    startSequenceCapture(2000, 200);
  }, 1000);
}

const actions = document.querySelectorAll('.action');
actions.forEach(e => e.addEventListener('click', showFunction));

function showFunction(e) {
  actions.forEach(e => e.classList.remove('action--active'));
  e.target.classList.add('action--active');
}

const poseSelector = document.querySelector('#pose-selector');
poseSelector.addEventListener('click', showPoses);
