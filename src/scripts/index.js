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

// gsap.to('.squaries img', {
//   x: -5,
//   y: -5,
//   stagger: 0.3
// });

var squareTl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
// tl.to("#id", { x: 100, duration: 1 });
// tl.to("#id", { y: 50, duration: 1 });
// tl.to("#id", { opacity: 0, duration: 1 });

squareTl.to(
  '.squaries img',
  0.6,
  {
    y: function(i) {
      if (i >= 6) return 5;
      if (i >= 3) return 0;
      else return -5;
    },
    stagger: 0.05
  },
  0.15,
  'frame1+=1'
);

squareTl.to(
  '.squaries img',
  0.6,
  {
    x: function(i) {
      if (i === 0) return -5;
      if (i === 1) return 0;
      if (i === 2) return 5;
      if (i === 3) return -5;
      if (i === 4) return 0;
      if (i === 5) return 5;
      if (i === 6) return -5;
      if (i === 7) return 0;
      if (i === 8) return 5;
    },
    stagger: 0.05
  },
  0.15,
  'frame1+=1'
);

squareTl.to('.squaries img', { x: 0, y: 0, duration: 1 });

var circlyTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
circlyTl.to('.circlies img', { scale: 0.5, duration: 0.5 });

circlyTl.to('.circlies img:nth-child(1)', { x: -15, duration: 0.2 });
circlyTl.to('.circlies img:nth-child(3)', { x: 15, duration: 0.2 });

// 27 - 5
circlyTl.to('.circlies img:nth-child(1)', { y: 27 - 10, duration: 0.2 });
circlyTl.to('.circlies img:nth-child(1)', { y: 27 - 0, duration: 0.2 });

circlyTl.to('.circlies img:nth-child(2)', { y: 0 - 10, duration: 0.2 });
circlyTl.to('.circlies img:nth-child(2)', { y: 0 - 0, duration: 0.2 });

circlyTl.to('.circlies img:nth-child(3)', { y: -27 - 10, duration: 0.2 });
circlyTl.to('.circlies img:nth-child(3)', { y: -27 - 0, duration: 0.2 });

circlyTl.to('.circlies img:nth-child(1)', { y: 27 - 10, duration: 0.2 });
circlyTl.to('.circlies img:nth-child(1)', { y: 27 - 0, duration: 0.2 });

circlyTl.to('.circlies img:nth-child(2)', { y: 0 - 10, duration: 0.2 });
circlyTl.to('.circlies img:nth-child(2)', { y: 0 - 0, duration: 0.2 });

circlyTl.to('.circlies img:nth-child(3)', { y: -27 - 10, duration: 0.2 });
circlyTl.to('.circlies img:nth-child(3)', { y: -27 - 0, duration: 0.2 });

// Reset
circlyTl.to('.circlies img:nth-child(3)', { x: 0, duration: 0.2 });
circlyTl.to('.circlies img:nth-child(1)', { x: 0, duration: 0.2 });
circlyTl.to('.circlies img', { scale: 1, duration: 0.5 });

var triangleTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

triangleTl.to('.triangle', { borderLeftColor: '#08153A', duration: 0.4 });
triangleTl.to('.triangle', { x: -5, rotate: -5, duration: 1, ease: 'elastic.out(1, 0.6)' }, '-=0.4');
triangleTl.to('.triangle', { x: 0, rotate: 0, duration: 1, ease: 'elastic.out(1, 0.6)' }, '-=0.4');

triangleTl.to('.triangle', { borderRightColor: '#08153A', duration: 0.4 });
triangleTl.to('.triangle', { x: 5, rotate: 10, duration: 1, ease: 'elastic.out(1, 0.6)' }, '-=0.4');
triangleTl.to('.triangle', { x: 0, rotate: 0, duration: 1, ease: 'elastic.out(1, 0.6)' }, '-=0.4');

triangleTl.to('.triangle', { rotate: 360, duration: 0.6, delay: 0.3 });
triangleTl.to('.triangle', { borderRadius: '50%', duration: 0.6 }, '-=0.6');

// Reset
triangleTl.to('.triangle', { borderRadius: '0%', duration: 0.6, delay: 1 });
triangleTl.to('.triangle', { borderRightColor: 'transparent', duration: 0.5 });
triangleTl.to('.triangle', { borderLeftColor: 'transparent', duration: 0.5 }, '-=0.3');
