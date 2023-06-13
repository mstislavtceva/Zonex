import vars from "../_vars";

if (vars.catalogFilters) {
  vars.catalogFilters.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.currentTarget
        .closest(".catalog-filter")
        .classList.toggle("catalog-filter--open");
    });
  });

  vars.hideFilters.addEventListener("click", function (e) {
    vars.catalogFilters.forEach((el) => {
      el.closest(".catalog-filter").classList.remove("catalog-filter--open");
    });
  });
}
