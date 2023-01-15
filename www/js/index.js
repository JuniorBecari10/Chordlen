const modeBtn = qs("#mode-btn");

// ---

// test- remove
start();

document.addEventListener("deviceready", start, false);

function start() {
  if (!localStorage["mode"])
  {
    updateMode(false);
    return;
  }
}

// mode: bool - true: dark, false: light
function updateMode(mode) {
  
}

// ---

modeBtn.onclick = () => {
  updateMode(localStorage["mode"] === "true");
};

// ---

function qs(q) {
  return document.querySelector(q);
}