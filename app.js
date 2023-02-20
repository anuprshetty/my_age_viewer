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

setInterval(function () {
  const today = new Date();
  const birthDate = new Date(datePicker.value);

  var options = { year: "numeric", month: "long", day: "numeric" };
  var DOB = birthDate.toLocaleDateString("en-US", options);
  choseDate.innerHTML = "DOB : " + " " + DOB;

  // NOW START THE CALCULATION

  let year = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    year--;
  }
  const month = (today.getMonth() + 12 - birthDate.getMonth()) % 12;
  const dayDiff = today.getDate() - birthDate.getDate();
  const day = dayDiff < 0 ? dayDiff + 30 : dayDiff;

  const diffMs = today.getTime() - birthDate.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const sec = diffSec % 60;
  const diffMin = Math.floor(diffSec / 60);
  const min = diffMin % 60;
  const diffHrs = Math.floor(diffMin / 60);
  const hrs = diffHrs % 24;

  // Now it is time to print values in boxes

  ageYear.innerHTML = year;
  ageMonth.innerHTML = month;
  ageDays.innerHTML = day;
  ageHours.innerHTML = hrs;
  ageMinutes.innerHTML = min;
  ageSeconds.innerHTML = sec;

  document.querySelector(".age-calc").classList.add("expand");
});
