/* const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
}); */

console.log("Script running");

const daysTag = document.querySelector(
  ".days"
); /* Finder elementet med klassen .days (listen, hvor dagene vises). */
const currentDate = document.querySelector(
  ".current-date"
); /*  Finder elementet med klassen .current-date (overskriften med måned og år). */
const prevNextIcon =
  document.querySelectorAll(
    ".icons span"
  ); /* Finder begge <span>-elementer med klassen .icons, som bruges til at gå til forrige/næste måned. */

let date = new Date() /*  Starter med dagens dato (new Date()). */,
  currYear =
    date.getFullYear() /* Gemmer det aktuelle år (f.eks. 2024). */,
  currMonth =
    date.getMonth(); /* Gemmer den aktuelle måned som et tal (f.eks. januar = 0, december = 11). */

/* En liste over alle månedsnavne, så vi kan vise dem i stedet for kun tal. */
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/* Tjekker, om de nødvendige HTML-elementer (daysTag og currentDate) findes. Hvis ikke, logges en fejl, og funktionen stopper. */
const renderCalendar = () => {
  if (!daysTag || !currentDate) {
    console.error("Required DOM elements not found.");
    return;
  }

  /* Finder ugedagen for den første dag i måneden (f.eks. søndag = 0, mandag = 1). */
  /* Finder den sidste dato i måneden (f.eks. 31 for januar, 28/29 for februar). */
  /* Finder ugedagen for den sidste dag i måneden. */
  /* Finder den sidste dato i måneden før (f.eks. 31 for december, hvis måneden er januar). */

  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(
      currYear,
      currMonth,
      lastDateofMonth
    ).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  /* <li>-elementer for de dage fra den forrige måned, der skal vises i starten af kalenderen. */
  /* inactive klassen bruges til at style dem anderledes. */
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }

  /* Går fra dag 1 til den sidste dag i den aktuelle måned.  */
  /* Hvis en dag er "i dag", får den klassen active. */
  /* Tilføjer en <li> for hver dag i måneden. */
  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  /* Tilføjer <li>-elementer for de dage fra næste måned, der skal vises i slutningen af kalenderen. */

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  /* Viser den aktuelle måned og år i overskriften. */
  /* Indsætter alle <li>-elementer i daysTag. */
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};

/* Lytter efter klik for ikonerne. */
/* Hvis brugeren klikker på "prev", går den til forrige måned. */
/* Hvis brugeren klikker på "next", går den til næste måned. */

/* Hvis måneden går under 0 (januar) eller over 11 (december), opdateres året: */
/* Forrige måned: Gå til december sidste år. */
/* Næste måned: Gå til januar næste år. */

/* Til sidst kaldes renderCalendar() for at opdatere kalenderen. */

renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth, new Date().getDate());
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});