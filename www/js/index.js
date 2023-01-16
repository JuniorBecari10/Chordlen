const r = qs(":root");

const modeBtn = qs("#mode-btn");

const tabOpts = qsAll("footer .opt");
const tabConts = qsAll("main .tab-cnt");

//const emptyMoon = qs("#empty-moon");
const fullMoon = qs("#full-moon");

const cBtn = qs("#c-btn");
const csBtn = qs("#cs-btn");
const dBtn = qs("#d-btn");
const dsBtn = qs("#ds-btn");
const ebBtn = qs("#eb-btn");
const eBtn = qs("#e-btn");
const fBtn = qs("#f-btn");
const fsBtn = qs("#fs-btn");
const gBtn = qs("#g-btn");
const abBtn = qs("#ab-btn");
const aBtn = qs("#a-btn");
const bbBtn = qs("#bb-btn");
const bBtn = qs("#b-btn");

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
  }
  else {
    r.style.setProperty("--bg", "#fff");
    r.style.setProperty("--fg", "#000");
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