import { Slider } from "./slider";
import { initScrollAnimation } from "./scrollAnimation";
import { ContactForm } from "./contactForm";

const slider = new Slider();
slider.start();

initScrollAnimation();
console.log("scroll animation loaded");



const contactForm = new ContactForm();

const form = document.querySelector(".contact-form");


if (form) {

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        contactForm.handleSubmit();

    });

}