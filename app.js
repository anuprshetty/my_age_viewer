// Variables For Datepicker

var datePicker = document.getElementById("datePicker");
var choseDate = document.getElementById("choseDate");

// Variables For Prinitng Values

var ageYear = document.getElementById("ageYear");
var ageMonth = document.getElementById("ageMonth");
var ageDays = document.getElementById("ageDays");
var ageHours = document.getElementById("ageHours");
var ageMinutes = document.getElementById("ageMinutes");
var ageSeconds = document.getElementById("ageSeconds");

document.addEventListener("DOMContentLoaded", function () {
  // code to be executed when the document is ready
  calcTimer();
});

function calcTimer() {
  today = new Date();
  timeobj = new Date(datePicker.value);

  var options = { year: "numeric", month: "long", day: "numeric" };
  var DOB = timeobj.toLocaleDateString("en-US", options);
  choseDate.innerHTML = "DOB : " + " " + DOB;

  const vy = timeobj.getFullYear();
  const vm = timeobj.getMonth();
  const vd = timeobj.getDate();
  const vh = 0;
  const vi = 0;

  chkdate = new Date(today.getFullYear(), vm, vd, vh, vi, 0);
  if (chkdate < today) {
    last = new Date(today.getFullYear(), vm, vd, vh, vi, 0);
    next = new Date(today.getFullYear() + 1, vm, vd, vh, vi, 0);
  } else {
    last = new Date(today.getFullYear() - 1, vm, vd, vh, vi, 0);
    next = new Date(today.getFullYear(), vm, vd, vh, vi, 0);
  }
  as = parseInt((today - timeobj) / 1000);
  ay = as / 31556952;
  am = ay * 12;
  aw = ay * 52.1775;
  ad = ay * 365.2425;
  ah = ay * 8765.82;
  ai = ay * 525949.2;
  cy = last.getFullYear() - timeobj.getFullYear();
  cs = parseInt((today - last) / 1000);
  cd = Math.floor(cs / 86400);
  cs = cs - cd * 86400;
  cm = Math.floor(cd / 30.436875);
  cd = cd - Math.floor(cm * 30.436875);
  ch = Math.floor(cs / 3600);
  cs = cs - ch * 3600;
  ci = Math.floor(cs / 60);
  cs = cs - ci * 60;
  ns = parseInt((next - today) / 1000);
  nd = Math.floor(ns / 86400);
  ns = ns - nd * 86400;
  nh = Math.floor(ns / 3600);
  ns = ns - nh * 3600;
  ni = Math.floor(ns / 60);
  ns = ns - ni * 60;

  // Now it is time to print values in boxes

  ageYear.innerHTML = cy;
  ageMonth.innerHTML = cm;
  ageDays.innerHTML = cd;
  ageHours.innerHTML = ch;
  ageMinutes.innerHTML = ci;
  ageSeconds.innerHTML = cs;

  document.querySelector(".age-calc").classList.add("expand");

  t = setTimeout("calcTimer()", 1000);
}
