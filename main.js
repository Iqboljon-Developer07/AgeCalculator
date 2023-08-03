const button = document.querySelector(".generateBtn");

let year = {
  january: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ],
  february: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
  ],
  march: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ],
  april: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ],
  may: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ],
  june: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ],
  july: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ],
  august: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ],
  september: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ],
  october: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ],
  november: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ],
  december: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ],
};

button.onclick = () => {
  const dayInputInfo = document.getElementById("DD").value;
  const monthInput = document.getElementById("MM").value;
  const yearInput = document.getElementById("YYYY").value;

  Number(dayInputInfo);
  Number(monthInput);
  Number(yearInput);

  let dayAnswer = document.querySelector(".daySpan");
  let monthAnswer = document.querySelector(".monthSpan");
  let yearAnswer = document.querySelector(".yearSpan");

  let yearList = Object.keys(year);

  let currentYear = new Date().getFullYear();
  let currenMonth = new Date().getMonth();
  let currentDay = new Date().getDate();

  const DDDD = document.getElementById("DD");
  const MMMm = document.getElementById("MM");
  const YYYY = document.getElementById("YYYY");
  if (
    dayInputInfo < 32 &&
    dayInputInfo > -1 &&
    dayInputInfo != 0 &&
    monthInput < 13 &&
    monthInput > -1 &&
    monthInput != 0 &&
    yearInput > -1 &&
    yearInput != 0 &&
    yearInput < currentYear
  ) {
    let Age = currentYear - yearInput;
    let Month = 12 * Age + (currenMonth - monthInput);
    let Day =
      30 * (Month - 1) + (year[yearList[monthInput - 1]].length - dayInputInfo);

    dayAnswer.innerHTML = Day;
    monthAnswer.innerHTML = Month;
    yearAnswer.innerHTML = Age;

    DDDD.classList.remove("warning");
    MMMm.classList.remove("warning");
    YYYY.classList.remove("warning");
    console.log(2);
  } else {
    DDDD.classList.add("warning");
    MMMm.classList.add("warning");
    YYYY.classList.add("warning");
    console.log(111);
  }
};

alert(
  "Year and Month should be 100% accurate\n but not day:)  It's around 90%."
);
