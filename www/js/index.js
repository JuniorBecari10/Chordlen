const r = qs(":root");

const modeBtn = qs("#mode-btn");

const tabOpts = qsAll("footer .opt");
const tabConts = qsAll("main .tab-cnt");

//const emptyMoon = qs("#empty-moon");
const fullMoon = qs("#full-moon");

const cBtn = qs("#c-btn");
const csBtn = qs("#cs-btn");
const dBtn = qs("#d-btn");
const ebBtn = qs("#eb-btn");
const eBtn = qs("#e-btn");
const fBtn = qs("#f-btn");
const fsBtn = qs("#fs-btn");
const gBtn = qs("#g-btn");
const abBtn = qs("#ab-btn");
const aBtn = qs("#a-btn");
const bbBtn = qs("#bb-btn");
const bBtn = qs("#b-btn");

const c = qs("#c");
const cs = qs("#cs");
const d = qs("#d");
const eb = qs("#eb");
const e = qs("#e");
const f = qs("#f");
const fs = qs("#fs");
const g = qs("#g");
const ab = qs("#ab");
const a = qs("#a");
const bb = qs("#bb");
const b = qs("#b");

const cm = qs("#cm");
const csm = qs("#csm");
const dm = qs("#dm");
const ebm = qs("#ebm");
const em = qs("#em");
const fm = qs("#fm");
const fsm = qs("#fsm");
const gm = qs("#gm");
const abm = qs("#abm");
const am = qs("#am");
const bbm = qs("#bbm");
const bm = qs("#bm");

var mode = false;

// ---

cBtn.onclick = () => {
  c.play();
};

csBtn.onclick = async () => {
  cs.play();
};

dBtn.onclick = async () => {
  d.play();
};

ebBtn.onclick = async () => {
  eb.play();
};

eBtn.onclick = async () => {
  e.play();
};

fBtn.onclick = async () => {
  f.play();
};

fsBtn.onclick = async () => {
  fs.play();
};

gBtn.onclick = async () => {
  g.play();
};

abBtn.onclick = async () => {
  ab.play();
};

aBtn.onclick = async () => {
  a.play();
};

bbBtn.onclick = async () => {
  bb.play();
};

bBtn.onclick = async () => {
  b.play();
};

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