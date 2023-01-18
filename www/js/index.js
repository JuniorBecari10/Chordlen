const r = qs(":root");

const modeBtn = qs("#mode-btn");

const tabOpts = qsAll("footer .opt");
const tabConts = qsAll("main .tab-cnt");

const selectPenta = qs("#penta");

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

cBtn.onclick = async () => {
  if (selectPenta.value == "major")
    c.play();
  else
    cm.play();
};

csBtn.onclick = async () => {
  if (selectPenta.value == "major")
    cs.play();
  else
    csm.play();
};

dBtn.onclick = async () => {
  if (selectPenta.value == "major")
    d.play();
  else
    dm.play();
};

ebBtn.onclick = async () => {
  if (selectPenta.value == "major")
    eb.play();
  else
    ebm.play();
};

eBtn.onclick = async () => {
  e.play();
};

fBtn.onclick = async () => {
  if (selectPenta.value == "major")
    f.play();
  else
    fm.play();
};

fsBtn.onclick = async () => {
  if (selectPenta.value == "major")
    fs.play();
  else
    fsm.play();
};

gBtn.onclick = async () => {
  if (selectPenta.value == "major")
    g.play();
  else
    gm.play();
};

abBtn.onclick = async () => {
  if (selectPenta.value == "major")
    ab.play();
  else
    abm.play();
};

aBtn.onclick = async () => {
  if (selectPenta.value == "major")
    a.play();
  else
    abm.play();
};

bbBtn.onclick = async () => {
  if (selectPenta.value == "major")
    bb.play();
  else
    bbm.play();
};

bBtn.onclick = async () => {
  if (selectPenta.value == "major")
    b.play();
  else
    bm.play();
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

selectPenta.onchange = () => {
  if (selectPenta.value == "major") {
    qs("#c-btn h1").innerHTML = "C";
    qs("#c-btn p").innerHTML = "C E G";
    
    qs("#cs-btn h1").innerHTML = "C#";
    qs("#cs-btn p").innerHTML = "C# F Ab";
    
    qs("#d-btn h1").innerHTML = "D";
    qs("#d-btn p").innerHTML = "D F# G";
    
    qs("#eb-btn h1").innerHTML = "Eb";
    qs("#eb-btn p").innerHTML = "Eb G Bb";
    
    qs("#e-btn h1").innerHTML = "E";
    qs("#e-btn p").innerHTML = "E Ab B";
    
    qs("#f-btn h1").innerHTML = "F";
    qs("#f-btn p").innerHTML = "F A C";
    
    qs("#fs-btn h1").innerHTML = "F#";
    qs("#fs-btn p").innerHTML = "F# Ab C#";
    
    qs("#g-btn h1").innerHTML = "G";
    qs("#g-btn p").innerHTML = "G B D";
    
    qs("#ab-btn h1").innerHTML = "Ab";
    qs("#ab-btn p").innerHTML = "Ab C Eb";
    
    qs("#a-btn h1").innerHTML = "A";
    qs("#a-btn p").innerHTML = "A C# E";
    
    qs("#bb-btn h1").innerHTML = "Bb";
    qs("#bb-btn p").innerHTML = "Bb D F";
    
    qs("#b-btn h1").innerHTML = "B";
    qs("#b-btn p").innerHTML = "B Eb F#";
  }
  else { // minor
    qs("#c-btn h1").innerHTML = "Cm";
    qs("#c-btn p").innerHTML = "C Eb G";
    
    qs("#cs-btn h1").innerHTML = "C#m";
    qs("#cs-btn p").innerHTML = "C# E Ab";
    
    qs("#d-btn h1").innerHTML = "Dm";
    qs("#d-btn p").innerHTML = "D F G";
    
    qs("#eb-btn h1").innerHTML = "Ebm";
    qs("#eb-btn p").innerHTML = "Eb F# Bb";
    
    qs("#e-btn h1").innerHTML = "Em";
    qs("#e-btn p").innerHTML = "E G B";
    
    qs("#f-btn h1").innerHTML = "Fm";
    qs("#f-btn p").innerHTML = "F Ab C";
    
    qs("#fs-btn h1").innerHTML = "F#m";
    qs("#fs-btn p").innerHTML = "F# G C#";
    
    qs("#g-btn h1").innerHTML = "Gm";
    qs("#g-btn p").innerHTML = "G Bb D";
    
    qs("#ab-btn h1").innerHTML = "Abm";
    qs("#ab-btn p").innerHTML = "Ab B Eb";
    
    qs("#a-btn h1").innerHTML = "Am";
    qs("#a-btn p").innerHTML = "A C E";
    
    qs("#bb-btn h1").innerHTML = "Bbm";
    qs("#bb-btn p").innerHTML = "Bb C# F";
    
    qs("#b-btn h1").innerHTML = "Bm";
    qs("#b-btn p").innerHTML = "B D F#";
  }
};

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