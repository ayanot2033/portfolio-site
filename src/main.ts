import { Slider } from "./slider";
import { initScrollAnimation } from "./scrollAnimation";

const slider = new Slider();
slider.start();

initScrollAnimation();
console.log("scroll animation loaded");
