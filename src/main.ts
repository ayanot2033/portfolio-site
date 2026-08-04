console.log("main.ts loaded");

import { Slider } from "./slider";
import { initScrollAnimation } from "./scrollAnimation";
import { ContactForm } from "./contactForm";
import { LoadMore } from "./loadMore";


window.addEventListener("DOMContentLoaded",()=>{


    // =====================
    // Hero Slider
    // =====================

    const slider = new Slider();

    slider.start();



    // =====================
    // Scroll Animation
    // =====================

    initScrollAnimation();



    // =====================
    // Contact Form
    // =====================

    const contactForm = new ContactForm();

    const form = document.querySelector(".contact-form");


    if(form){

        form.addEventListener("submit",(event)=>{

            event.preventDefault();

            contactForm.handleSubmit();

        });

    }



    // =====================
    // MORE VIEW
    // =====================

    const logoButton = document.getElementById("more-logo");

        if(logoButton){

            const logoLoadMore = new LoadMore(
            "more-logo",
            ".logo-item",
            9,
            9
        );

        logoLoadMore.init();

    }



    const packageButton = document.getElementById("more-package");

        if(packageButton){

            const packageLoadMore = new LoadMore(
            "more-package",
            ".package-item",
            3,
            3
        );

        packageLoadMore.init();

    }

});