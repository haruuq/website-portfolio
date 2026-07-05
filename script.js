// --- 1. AUDIO INSTANCES ---
const menuClickSound = new Howl({
  src: ['audio/floraphonic-multi-pop-2-188167.mp3'], 
  volume: 0.5           
});

// Added your new close sound definition here
const closeClickSound = new Howl({
  src: ['audio/floraphonic-multi-pop-1-188165.mp3'],
  volume: 0.5 // Matching your volume configuration
});


// --- 2. GLOBAL SELECTORS & SETTINGS ---
const menuButtons = document.querySelectorAll('.menu-choices');

// CHANGED: Renamed variable to closeButtons to prevent a crash error
const closeButtons = document.querySelectorAll('.popup-close-btn'); 

const aboutBtn = document.getElementById('about-btn');
const aboutPopup = document.getElementById('about-popup');
const closeBtn = aboutPopup.querySelector('.popup-close-btn');

let highestZ = 10;


// --- 3. GLOBAL AUDIO LOOPS ---
// Menu button sound click loop
menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    menuClickSound.play();
  });
});

// Added your popup close button sound loop here
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    closeClickSound.play();
  });
});


// --- 4. POPUP CONTROL WORKFLOWS ---
// Click Event: Show Popup Window
aboutBtn.addEventListener('click', () => {
  if (aboutPopup.style.display === 'none' || !aboutPopup.style.display) {
    // Centers the fixed container dynamically on screen
    aboutPopup.style.top = '50%';
    aboutPopup.style.left = '50%';
    aboutPopup.style.transform = 'translate(-50%, -50%)';
    
    // Clear old positioning markers for interact.js tracking
    aboutPopup.dataset.x = 0;
    aboutPopup.dataset.y = 0;
  }
  
  aboutPopup.style.display = 'flex';
  
  highestZ++;
  aboutPopup.style.zIndex = highestZ;
});

// Click Event: Close Popup Window
closeBtn.addEventListener('click', (event) => {
  event.stopPropagation(); // Stops click from processing layout elements behind it
  aboutPopup.style.display = 'none';
});

// Layer Management: Focus when clicking on it
aboutPopup.addEventListener("mousedown", () => {
  highestZ++;
  aboutPopup.style.zIndex = highestZ;
});


// --- 5. INTERACT.JS ENGINE ---
interact("#about-popup")
  .draggable({
    allowFrom: ".popup-drag-handle", // Dragging ONLY works by grabbing the header bar
    listeners: {
      move(event) {
        const target = event.target;
        const x = (parseFloat(target.dataset.x) || 0) + event.dx;
        const y = (parseFloat(target.dataset.y) || 0) + event.dy;

        target.style.transform = `translate3d(${x}px, ${y}px, 0)`;

        target.dataset.x = x;
        target.dataset.y = y;
      }
    }
  })
  .resizable({
    margin: 20, // EASIER TO GRAB: Increased from 8 to 20 pixels wide
    edges: { top: true, left: true, bottom: true, right: true },
    listeners: {
      move(event) {
        const target = event.target;
        let x = parseFloat(target.dataset.x) || 0;
        let y = parseFloat(target.dataset.y) || 0;

        target.style.width = `${event.rect.width}px`;
        target.style.height = `${event.rect.height}px`;

        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.transform = `translate3d(${x}px, ${y}px, 0)`;

        target.dataset.x = x;
        target.dataset.y = y;
      }
    },
    modifiers: [
      interact.modifiers.restrictSize({
        min: { width: 450, height: 400 } // Gives the user flexibility, but maintains a solid card layout minimum
      })
    ]
  });