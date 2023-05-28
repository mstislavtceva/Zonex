import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
import vars from "../_vars";

const catalogSlider = new Swiper(vars.catalogSlider, {
  loop: true,
  slidesPerView: 1,
});
