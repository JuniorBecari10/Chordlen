const modeBtn = qs("#mode-btn");

const tabOpts = qsAll("footer .opt");
const tabConts = qsAll("main .tab-cnt");

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


function qsAll(q) {
  return document.querySelectorAll(q);
}