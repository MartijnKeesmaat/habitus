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
// const poseDemo = document.querySelector('#poseDemo');
// poseDemo.addEventListener('click', actionSelectPose);

// const timedDemo = document.querySelector('#timedDemo');
// timedDemo.addEventListener('click', actionTimedPose);

// const demoButton = document.querySelector('#sequenceDemo');
// demoButton.addEventListener('click', actionSequencedPose);

function actionSelectPose() {
  // Todo swith to view
}

// TODO should be dynamic
const contentSections = document.querySelectorAll('.content-section');

function actionSequencedPose() {
  contentSections[0].classList.toggle('content-section--active');
  contentSections[2].classList.toggle('content-section--active');

  gsap.to('.view .mannenman', { y: '140%', duration: 1 });
  gsap.to('#shadow', { autoAlpha: 0, duration: 1 });
  gsap.to('.sequence', { y: '175%', duration: 1, delay: 1 });
  resetMyGuy('set');

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

var hippo = $('#hippo').attr('d');

TweenLite.set('svg', { visibility: 'visible' });

var tl = new TimelineMax({ repeat: -1, repeatDelay: 0.5, delay: 1 });
tl.to('#hippo', 1, { morphSVG: '#elephant', ease: Back.easeInOut }).to('#hippo', 1, { morphSVG: hippo, shapeIndex: -13, ease: Back.easeOut }, '+=0.5');

//findShapeIndex("#hippo", "#elephant");

//tl.timeScale(0.3)
