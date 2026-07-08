const menuClickSound = new Howl({
  src: ['audio/floraphonic-multi-pop-2-188167.mp3'], 
  volume: 0.5           
});

const closeClickSound = new Howl({
  src: ['audio/floraphonic-multi-pop-1-188165.mp3'],
  volume: 0.5 
});

const menuButtons = document.querySelectorAll('.menu-choices');
const closeButtons = document.querySelectorAll('.popup-close-btn'); 

let highestZ = 9999;

function setupPopup(buttonId, popupId, width, height) { 
  const btn = document.getElementById(buttonId);
  const popup = document.getElementById(popupId);
  
  if (!btn || !popup) {
    console.warn(`Initialization skipped: Check if #${buttonId} or #${popupId} exists in your HTML.`);
    return;
  }

  // Apply styles safely
  if (width) popup.style.width = width;
  if (height) popup.style.height = height;


  const closeBtn = popup.querySelector('.popup-close-btn');

  btn.addEventListener('click', () => {
    if (popup.style.display === 'none' || !popup.style.display) {
      popup.dataset.x = '0';
      popup.dataset.y = '0';
      // preserves original screen center position configurations during transformation resets
      popup.style.transform = 'translate(-50%, -50%) translate3d(0px, 0px, 0px)'; 
    }
    
    popup.style.display = 'flex';
    highestZ++;
    popup.style.zIndex = highestZ;
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (event) => {
      event.stopPropagation(); 
      popup.style.display = 'none';
    });
  }

  popup.addEventListener("mousedown", () => {
    highestZ++;
    popup.style.zIndex = highestZ;
  });
}

// map buttons to respective popups safely, also sizes to control their dimensions individually
setupPopup('about-btn', 'about-popup', '700px', '500px'); 
setupPopup('work-btn', 'work-popup', '1000px', '600px');  
setupPopup('cert-btn', 'cert-popup', '400px', '300px');

menuButtons.forEach(button => {
  button.addEventListener('click', () => menuClickSound.play());
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => closeClickSound.play());
});

// makes entire popup window interactable
interact(".popup-window")
  .draggable({
    listeners: {
      move(event) {
        const target = event.target;
        
        const x = (parseFloat(target.dataset.x) || 0) + event.dx;
        const y = (parseFloat(target.dataset.y) || 0) + event.dy;

        target.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0)`;

        target.dataset.x = x;
        target.dataset.y = y;
      }
    }
  });