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
    body: 'Practice a specific pose, there <br> is no need to hurry your sketch.',
  },
  timed: {
    title: 'Capture the pose <br> within the time',
    body: 'A great way to practice gestures. <br> Need more time? Adjust it below.',
  },
  sequence: {
    title: 'Let’s do some sequence drawing',
    body: 'A great way to practice gestures. <br> Need more time? Adjust it below.',
  },
};

actions.forEach((e) => e.addEventListener('click', startAction));

let contentSections = document.querySelectorAll('.content-section');
contentSections = [...contentSections];
let activeState = 'select';

function startAction(e) {
  resetMyGuy('set');

  // Reset pose selector
  gsap.to('.pose-select', { duration: 1, scaleX: 1, y: 0, ease: 'power3.out' });
  gsap.to('#body', { delay: 0.3, y: 0, scaleY: 1, duration: 1, ease: 'power3.out' });
  document.getElementById('pose-selector').disabled = false;

  const selectedAction = e.currentTarget.dataset.action;
  showActiveActionIcon(e);
  transitionActionContent(selectedAction);
  transitionContentViews(selectedAction);
  activeState = selectedAction;
}

function showActiveActionIcon(e) {
  actions.forEach((e) => e.classList.remove('action--active'));
  e.currentTarget.classList.add('action--active');
}

function transitionActionContent(selectedAction) {
  header.innerHTML = content[selectedAction].title;
  desc.innerHTML = content[selectedAction].body;
}

function transitionContentViews(selectedAction) {
  contentSections.forEach((e) => e.classList.remove('content-section--active'));
  const selectedContent = contentSections.filter((i) => selectedAction === i.dataset.contentsection);
  selectedContent[0].classList.add('content-section--active');
}

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

const poseSelector = document.querySelector('#pose-selector');
poseSelector.addEventListener('click', showPoses);

function mouseDistanceFromElement(mouseEvent, element) {
  let $n = element,
    mX = mouseEvent.pageX,
    mY = mouseEvent.pageY,
    from = { x: mX, y: mY },
    off = $n.getBoundingClientRect(),
    ny1 = off.top + document.body.scrollTop, //top
    ny2 = ny1 + $n.offsetHeight, //bottom
    nx1 = off.left + document.body.scrollLeft, //left
    nx2 = nx1 + $n.offsetWidth, //right
    maxX1 = Math.max(mX, nx1),
    minX2 = Math.min(mX, nx2),
    maxY1 = Math.max(mY, ny1),
    minY2 = Math.min(mY, ny2),
    intersectX = minX2 >= maxX1,
    intersectY = minY2 >= maxY1,
    to = {
      x: intersectX ? mX : nx2 < mX ? nx2 : nx1,
      y: intersectY ? mY : ny2 < mY ? ny2 : ny1,
    },
    distX = to.x - from.x,
    distY = to.y - from.y,
    hypot = (distX ** 2 + distY ** 2) ** (1 / 2);
  return Math.floor(hypot); //this will output 0 when next to your element.
}

document.addEventListener('mousemove', function (e) {
  console.log(activeState);

  let el = document.querySelector('#element');
  let sprites = document.querySelectorAll('.action-select img');

  switch (activeState) {
    case 'select':
      el = document.querySelector('#element1');
      sprites = document.querySelectorAll('.action-select img');
      break;

    case 'timed':
      el = document.querySelector('#element2');
      sprites = document.querySelectorAll('.action-timed img');
      break;

    case 'sequence':
      el = document.querySelector('#element3');
      sprites = document.querySelectorAll('.action-sequence img');
      break;
  }

  updateIconsPerButton(e, el, sprites);
});

function updateIconsPerButton(e, el, sprites) {
  const distance = mouseDistanceFromElement(e, el);

  const showIcon = (i) => {
    sprites.forEach((e) => (e.style.display = 'none'));
    sprites[i].style.display = 'block';
  };

  if (distance < 20) showIcon(3);
  else if (distance < 100) showIcon(2);
  else if (distance < 400) showIcon(1);
  else showIcon(0);
}

function scaleIcons(e) {
  const distanceIcon = mouseDistanceFromElement(e, document.querySelector('.action-timed'));
  const normalized = normalize(distanceIcon, 0, 1100);
  const scaleIcon = document.querySelector('.action-timed .scale');
  const scaleIcon2 = document.querySelector('.action-sequence .scale');
  if (normalized > 0.5) {
    scaleIcon.style.transform = 'scale(0.7)';
    scaleIcon2.style.transform = 'scale(0.7)';
    document.querySelectorAll('.action').forEach((e) => (e.style.opacity = 0.3));
    document.querySelector('.action-select').style.opacity = 1;
  } else if (normalized > 0.1) {
    scaleIcon.style.transform = 'scale(0.8)';
    scaleIcon2.style.transform = 'scale(0.8)';
    document.querySelectorAll('.action').forEach((e) => (e.style.opacity = 0.3));
    document.querySelector('.action-select').style.opacity = 1;
  } else {
    scaleIcon.style.transform = 'scale(0.9)';
    scaleIcon2.style.transform = 'scale(0.9)';
    document.querySelectorAll('.action').forEach((e) => (e.style.opacity = 1));
    document.querySelector('.action-select').style.opacity = 1;
  }
}

function normalize(value, min, max) {
  return (value - min) / (max - min);
}

const box = document.querySelector('.action-img');
const boxCenter = [box.getBoundingClientRect().left + box.offsetWidth / 2, box.getBoundingClientRect().top + box.offsetHeight / 2];

document.addEventListener('mousemove', function (e) {
  const angle = Math.atan2(e.pageX - boxCenter[0], -(e.pageY - boxCenter[1])) * (180 / Math.PI);
  box.style.transform = 'rotate(' + angle + 'deg)';
});
