import gsap, { random } from 'gsap';
import { jump, salute, graceful, resetMyGuy, fall, ninjaCrouch, flex, greet, hips, ninja, stretch } from './poses';
import { startSequenceCapture } from './sequence';
import { showPoses } from './poseSelector';
import { actionTimedPose } from './timed';
import { playRandomSound } from './helpers';

resetMyGuy('set');

const actions = document.querySelectorAll('.action');
const headerA = document.querySelector('h1 .headerA');
const headerB = document.querySelector('h1 .headerB');

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
  gsap.to('.pose-select', { duration: 1, scaleX: 1, y: 100, ease: 'power3.out' });
  gsap.to('#body', { delay: 0.3, y: 0, scaleY: 1, duration: 1, ease: 'power3.out' });
  document.getElementById('pose-selector').disabled = false;

  const selectedAction = e.currentTarget.dataset.action;
  showActiveActionIcon(e);
  transitionActionContent(selectedAction);
  transitionContentViews(selectedAction);
  activeState = selectedAction;

  const $pulse = e.currentTarget.querySelector('.action-img');
  $pulse.classList.toggle('pulse');
  setTimeout(() => {
    $pulse.classList.toggle('pulse');
  }, 1500);
  playRandomSound('.click');
}

function showActiveActionIcon(e) {
  actions.forEach((e) => e.classList.remove('action--active'));
  e.currentTarget.classList.add('action--active');
}

let toggle = true;
function transitionActionContent(selectedAction) {
  if (toggle) {
    gsap.to(headerA, { y: '-100%', duration: 0.4, ease: 'power3.out' });
    gsap.to(headerB, { y: '-100%', delay: 0.1, duration: 0.4, ease: 'power3.out' });
  } else {
    gsap.to(headerB, { y: '-200%', duration: 0.4, ease: 'power3.out' });
    gsap.to(headerA, { y: '0%', delay: 0.1, duration: 0.4, ease: 'power3.out' });
  }
  console.log(toggle);

  setTimeout(() => {
    gsap.set(toggle ? headerB : headerA, { y: '100%' });
  }, 500);

  toggle ? (headerB.innerHTML = content[selectedAction].title) : (headerA.innerHTML = content[selectedAction].title);
  toggle = !toggle;
}

let currentContent = 'select';
function transitionContentViews(selectedAction) {
  const result = Array.prototype.slice.call(contentSections).filter((e) => e.dataset.contentsection === selectedAction);
  const current = Array.prototype.slice.call(contentSections).filter((e) => e.dataset.contentsection === currentContent);

  gsap.to(current, { autoAlpha: 0, y: -30, duration: 0.35, delay: 0.1 });
  gsap.to(result[0], { autoAlpha: 1, y: 0, duration: 0.35, delay: 0.4 });
  currentContent = selectedAction;
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
  let el = document.querySelector('#element');
  let sprites = document.querySelectorAll('.action-select img');
  let box = document.querySelector('.action-select .action-img');
  let boxCenter = [box.getBoundingClientRect().left + box.offsetWidth / 2, box.getBoundingClientRect().top + box.offsetHeight / 2];

  switch (activeState) {
    case 'select':
      el = document.querySelector('#element1');
      sprites = document.querySelectorAll('.action-select img');
      box = document.querySelector('.action-select .action-img');
      boxCenter = [box.getBoundingClientRect().left + box.offsetWidth / 2, box.getBoundingClientRect().top + box.offsetHeight / 2];
      break;

    case 'timed':
      el = document.querySelector('#element2');
      sprites = document.querySelectorAll('.action-timed img');
      box = document.querySelector('.action-timed .action-img');
      boxCenter = [box.getBoundingClientRect().left + box.offsetWidth / 2, box.getBoundingClientRect().top + box.offsetHeight / 2];
      break;

    case 'sequence':
      el = document.querySelector('#element3');
      sprites = document.querySelectorAll('.action-sequence img');
      box = document.querySelector('.action-sequence .action-img');
      boxCenter = [box.getBoundingClientRect().left + box.offsetWidth / 2, box.getBoundingClientRect().top + box.offsetHeight / 2];
      break;
  }

  rotateActiveIcon(e, box, boxCenter);
  updateIconsPerButton(e, el, sprites);
});

function rotateActiveIcon(e, box, boxCenter) {
  const angle = Math.atan2(e.pageX - boxCenter[0], -(e.pageY - boxCenter[1])) * (180 / Math.PI);
  box.style.transform = 'rotate(' + angle + 'deg)';
}

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

// const box = document.querySelector('.action-img');
// const boxCenter = [box.getBoundingClientRect().left + box.offsetWidth / 2, box.getBoundingClientRect().top + box.offsetHeight / 2];

// document.addEventListener('mousemove', function (e) {
//   const angle = Math.atan2(e.pageX - boxCenter[0], -(e.pageY - boxCenter[1])) * (180 / Math.PI);
//   box.style.transform = 'rotate(' + angle + 'deg)';
// });

const $bigCircle = document.querySelector('.cursor__circle--big');
const $smallCircle = document.querySelector('.cursor__circle--small');
const $smallPlus = document.querySelector('.cursor__plus');
const $smallPlusArea = document.querySelector('.cursor__plus--area');
const $hoverables = document.querySelectorAll('.hoverable');
const hoverablesArea = document.querySelectorAll('.hoverableArea');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);

for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

for (let i = 0; i < hoverablesArea.length; i++) {
  hoverablesArea[i].addEventListener('mouseenter', onMouseHoverArea);
  hoverablesArea[i].addEventListener('mouseleave', onMouseHoverAreaOut);
}

// Move the cursor
function onMouseMove(e) {
  gsap.to($bigCircle, 0.4, {
    x: e.clientX,
    y: e.clientY,
  });
  gsap.to($smallCircle, 0.1, {
    x: e.clientX,
    y: e.clientY,
  });
  gsap.to($smallPlus, 0.1, {
    x: e.clientX,
    y: e.clientY,
  });
}

// Hover an element
function onMouseHover() {
  gsap.to('#bigCircle', {
    attr: {
      r: 25,
    },
  });
}
function onMouseHoverOut() {
  gsap.to('#bigCircle', {
    attr: {
      r: 18,
    },
  });
}

// Hover img an element
function onMouseHoverArea() {
  gsap.to($bigCircle, 0.3, {
    scale: 1.3,
  });

  gsap.to($smallPlusArea, 0.3, {
    stroke: '#08153A',
  });
}
function onMouseHoverAreaOut() {
  gsap.to($bigCircle, 0.3, {
    scale: 1,
  });
  gsap.to($smallPlusArea, 0.3, {
    stroke: '#08153A',
  });
}
