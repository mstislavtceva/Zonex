import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
import vars from "../_vars";

const bannerSlider = new Swiper(vars.bannerSlider, {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".banner-pag",
    type: "bullets",
    clickable: true,
  },
});
