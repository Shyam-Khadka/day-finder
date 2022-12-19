let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
let findDay = document.getElementById("find");
let show = document.getElementById("show");

// console.log(date.value, month.value, year.value);

findDay.addEventListener("click", () => {
  let da = new Date(`${date.value} ${month.value} ${year.value}`);
  let day = da.getDay();
  console.log(day)
  if (day == 0) {
    show.textContent = "Sunday";
  } else if (day == 1) {
    show.textContent = "Monday";
  } else if (day == 2) {
    show.textContent = "Tuesday";
  } else if (day == 3) {
    show.textContent = "Wednesday";
  } else if (day == 4) {
    show.textContent = "Thursday";
  } else if (day == 5) {
    show.textContent = "Friday";
  } else  {
    show.textContent = "Saturday";
  }

  // show.textContent = da.toString().slice(0, 3);
});
