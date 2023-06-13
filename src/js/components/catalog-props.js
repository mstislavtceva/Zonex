import vars from "../_vars";

vars.catalogColumns.addEventListener("click", function (e) {
  if (
    e.target.classList.contains(".catalog-columns__btn") ||
    e.target.closest(".catalog-columns__item")
  ) {
    const columns = e.target.dataset.columns;

    vars.columnsBtn.forEach((el) => {
      el.classList.remove("catalog-columns__btn--current");
    });
    e.target.classList.add("catalog-columns__btn--current");
    vars.catalogGrid.dataset.gridColumns = columns;
  }
});
