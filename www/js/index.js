const r = qs(":root");

const modeBtn = qs("#mode-btn");

const tabOpts = qsAll("footer .opt");
const tabConts = qsAll("main .tab-cnt");

const emptyMoon = qs("#empty-moon");
const fullMoon = qs("#full-moon");

var mode = false;

// ---

// test - remove
start();

document.addEventListener("deviceready", start, false);

function start() {
  if (localStorage["mode"])
  {
    mode = localStorage["mode"] === "true";
    updateMode(mode);
  }
}

// mode: bool - true: dark, false: light
function updateMode(mode) {
  if (mode) {
    r.style.setProperty("--bg", "#333");
    r.style.setProperty("--fg", "#fff");
    
    emptyMoon.classList.add("disabled");
    fullMoon.classList.remove("disabled");
  }
  else {
    r.style.setProperty("--bg", "#fff");
    r.style.setProperty("--fg", "#000");
    
    emptyMoon.classList.remove("disabled");
    fullMoon.classList.add("disabled");
  }
  
  localStorage["mode"] = mode;
}

// ---

modeBtn.onclick = () => {
  mode = !mode;
  
  updateMode(mode);
};

// ---

function qs(q) {
  return document.querySelector(q);
}


function qsAll(q) {
  return document.querySelectorAll(q);
}