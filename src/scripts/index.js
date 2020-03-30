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

const actions = document.querySelectorAll('.action');
const header = document.querySelector('h1');
const desc = document.querySelector('.desc');

const content = {
  select: {
    title: 'Strike a pose <br> for the camera',
    body: 'Practice a specific pose, <br> there is no need to hurry your sketch.'
  },
  timed: {
    title: 'Capture the pose <br> within the time',
    body: 'A great way to practice gestures. <br> Need more time? Adjust it below.'
  },
  sequence: {
    title: 'Let’s do some sequence drawing',
    body: 'A great way to practice gestures. <br> Need more time? Adjust it below.'
  }
};

actions.forEach(e => e.addEventListener('click', startAction));

function startAction(e) {
  const selectedAction = e.currentTarget.dataset.action;
  showActiveActionIcon(e);
  playActiveActionIcon(selectedAction);
  transitionActionContent(selectedAction);
}

function showActiveActionIcon(e) {
  actions.forEach(e => e.classList.remove('action--active'));
  e.currentTarget.classList.add('action--active');
}

function playActiveActionIcon(selectedAction) {
  selectTl.pause();
  timedTl.pause();
  sequenceTl.pause();

  if (selectedAction === 'select') selectTl.resume();
  if (selectedAction === 'timed') timedTl.resume();
  if (selectedAction === 'sequence') sequenceTl.resume();
}

function transitionActionContent(selectedAction) {
  // selectedAction;
  header.innerHTML = content[selectedAction].title;
  desc.innerHTML = content[selectedAction].body;
}

// TODO should be dynamic
const contentSections = document.querySelectorAll('.content-section');

function actionSequencedPose() {
  gsap.to('.view .mannenman', { y: '140%', duration: 1 });
  gsap.to('#shadow', { autoAlpha: 0, duration: 1 });
  gsap.to('.sequence', { y: '175%', duration: 1, delay: 1 });
  resetMyGuy('set');

  setTimeout(() => {
    graceful(5);
    startSequenceCapture(2000, 200);
  }, 1000);
}

// const actions = document.querySelectorAll('.action');
// actions.forEach(e => e.addEventListener('click', showFunction));

// function showFunction(e) {
//   actions.forEach(e => e.classList.remove('action--active'));
//   e.target.classList.add('action--active');
// }

const poseSelector = document.querySelector('#pose-selector');
poseSelector.addEventListener('click', showPoses);

var sequenceTl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

sequenceTl.to(
  '.squaries .square',
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

sequenceTl.to(
  '.squaries .square',
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

sequenceTl.to('.squaries .square', { x: 0, y: 0, duration: 1 });

sequenceTl.pause();

var timedTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
timedTl.to('.circlies .circle', { scale: 0.5, duration: 0.5 });

timedTl.to('.circlies .circle:nth-child(1)', { x: -15, duration: 0.2 });
timedTl.to('.circlies .circle:nth-child(3)', { x: 15, duration: 0.2 });

// 27 - 5
timedTl.to('.circlies .circle:nth-child(1)', { y: 27 - 10, duration: 0.2 });
timedTl.to('.circlies .circle:nth-child(1)', { y: 27 - 0, duration: 0.2 });

timedTl.to('.circlies .circle:nth-child(2)', { y: 0 - 10, duration: 0.2 });
timedTl.to('.circlies .circle:nth-child(2)', { y: 0 - 0, duration: 0.2 });

timedTl.to('.circlies .circle:nth-child(3)', { y: -27 - 10, duration: 0.2 });
timedTl.to('.circlies .circle:nth-child(3)', { y: -27 - 0, duration: 0.2 });

timedTl.to('.circlies .circle:nth-child(1)', { y: 27 - 10, duration: 0.2 });
timedTl.to('.circlies .circle:nth-child(1)', { y: 27 - 0, duration: 0.2 });

timedTl.to('.circlies .circle:nth-child(2)', { y: 0 - 10, duration: 0.2 });
timedTl.to('.circlies .circle:nth-child(2)', { y: 0 - 0, duration: 0.2 });

timedTl.to('.circlies .circle:nth-child(3)', { y: -27 - 10, duration: 0.2 });
timedTl.to('.circlies .circle:nth-child(3)', { y: -27 - 0, duration: 0.2 });

// Reset
timedTl.to('.circlies .circle:nth-child(3)', { x: 0, duration: 0.2 });
timedTl.to('.circlies .circle:nth-child(1)', { x: 0, duration: 0.2 });
timedTl.to('.circlies .circle', { scale: 1, duration: 0.5 });

timedTl.pause();

var selectTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

selectTl.to('.triangle', { borderLeftColor: '#08153A', duration: 0.4 });
selectTl.to('.triangle', { x: -5, rotate: -5, duration: 1, ease: 'elastic.out(1, 0.6)' }, '-=0.4');
selectTl.to('.triangle', { x: 0, rotate: 0, duration: 1, ease: 'elastic.out(1, 0.6)' }, '-=0.4');

selectTl.to('.triangle', { borderRightColor: '#08153A', duration: 0.4 });
selectTl.to('.triangle', { x: 5, rotate: 10, duration: 1, ease: 'elastic.out(1, 0.6)' }, '-=0.4');
selectTl.to('.triangle', { x: 0, rotate: 0, duration: 1, ease: 'elastic.out(1, 0.6)' }, '-=0.4');

selectTl.to('.triangle', { rotate: 360, duration: 0.6, delay: 0.3 });
selectTl.to('.triangle', { borderRadius: '50%', duration: 0.6 }, '-=0.6');

// Reset
selectTl.to('.triangle', { borderRadius: '0%', duration: 0.6, delay: 1 });
selectTl.to('.triangle', { borderRightColor: 'transparent', duration: 0.5 });
selectTl.to('.triangle', { borderLeftColor: 'transparent', duration: 0.5 }, '-=0.3');

// selectTl.pause();
