import { describe, it, expect, beforeEach } from "vitest";
import { Slider } from "../src/slider";


describe("Slider DOM Test", () => {


    beforeEach(() => {

        document.body.innerHTML = `
            <div class="slider">
                <img>
                <img>
                <img>
            </div>

            <button class="slider-prev"></button>
            <button class="slider-next"></button>

            <div class="slider-dots"></div>
        `;

    });



    it("初期状態では1枚目が表示される", () => {

        const slider = new Slider();

        slider.start();


        const images = document.querySelectorAll(".slider img");


        expect(images[0].classList.contains("active"))
            .toBe(true);

    });



    it("画像枚数を正しく取得できる", () => {

        const slider = new Slider();


        expect(slider.getImageCount())
            .toBe(3);

    });



    it("next()で2枚目が表示される", () => {

        const slider = new Slider();

        slider.start();

        slider.next();


        const images = document.querySelectorAll(".slider img");


        expect(images[1].classList.contains("active"))
            .toBe(true);


        expect(images[0].classList.contains("active"))
            .toBe(false);

    });



    it("prev()で前の画像に戻る", () => {

        const slider = new Slider();

        slider.start();

        slider.next();

        slider.prev();


        const images = document.querySelectorAll(".slider img");


        expect(images[0].classList.contains("active"))
            .toBe(true);


        expect(images[1].classList.contains("active"))
            .toBe(false);

    });



    it("最後の画像からnext()で最初に戻る", () => {

        const slider = new Slider();

        slider.start();


        slider.next();
        slider.next();
        slider.next();


        const images = document.querySelectorAll(".slider img");


        expect(images[0].classList.contains("active"))
            .toBe(true);


        expect(images[2].classList.contains("active"))
            .toBe(false);

    });


});