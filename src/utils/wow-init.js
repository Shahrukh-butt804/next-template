// utils/wow-init.js
import WOW from "wow.js";

export const initWow = () => {
  if (typeof window !== "undefined") {
    new WOW().init();
  }
};