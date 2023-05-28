import vars from "../_vars";

// Data
const data = [
  {
    title: "Product 2",
    whenWhere: "3 minutes ago Tbilisi, Georgia",
  },
  {
    title: "Product 3",
    whenWhere: "10 minutes ago Rome, Italy",
  },
  {
    title: "Product 4",
    whenWhere: "5 minutes ago Moscow, Russia",
  },
];

// Functions
if (vars.marketing) {
  let counter = 0;
  let delay = 8000;

  const closeMarketing = function () {
    vars.marketing.classList.remove("marketing--visible");
  };

  const openMarketing = function () {
    vars.marketing.classList.add("marketing--visible");
  };

  const changeMarketingData = function () {
    vars.marketing.classList.remove("marketing--visible");

    setTimeout(openMarketing, delay - 4000);

    const stringTitle = `${data[counter].title}`;
    const stringWhenWhere = `${data[counter].whenWhere}`;

    vars.marketing.querySelector(".marketing__title").textContent = stringTitle;
    vars.marketing.querySelector(".marketing__when-from").textContent =
      stringWhenWhere;

    counter++;

    if (counter === data.length) {
      counter = 0;
    }
  };

  setInterval(changeMarketingData, delay);

  vars.marketing.addEventListener("click", (e) => {
    if (e.target.classList.contains("marketing__close")) {
      closeMarketing();
    }
  });
}
