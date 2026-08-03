import { describe, it, expect, beforeEach } from "vitest";
import { LoadMore } from "../src/loadMore";


describe("LoadMore DOM Test", () => {


    beforeEach(() => {

        document.body.innerHTML = `
            <button id="more-package"></button>

            <div class="package-item">1</div>
            <div class="package-item">2</div>
            <div class="package-item">3</div>
            <div class="package-item">4</div>
            <div class="package-item">5</div>
            <div class="package-item">6</div>
            <div class="package-item">7</div>
            <div class="package-item">8</div>
            <div class="package-item">9</div>
            <div class="package-item">10</div>
            <div class="package-item">11</div>
            <div class="package-item">12</div>
            <div class="package-item">13</div>
            <div class="package-item">14</div>
            <div class="package-item">15</div>
        `;

    });



    it("初期表示では4件目以降がhiddenになる", () => {

        const loadMore = new LoadMore(
            "more-package",
            ".package-item",
            3,
            3
        );


        loadMore.init();


        const items = document.querySelectorAll(".package-item");


        expect(items[0].classList.contains("hidden"))
            .toBe(false);

        expect(items[2].classList.contains("hidden"))
            .toBe(false);


        expect(items[3].classList.contains("hidden"))
            .toBe(true);

    });



    it("more()を1回呼ぶと6件表示される", () => {

        const loadMore = new LoadMore(
            "more-package",
            ".package-item",
            3,
            3
        );


        loadMore.init();

        loadMore.more();


        const items = document.querySelectorAll(".package-item");


        expect(items[5].classList.contains("hidden"))
            .toBe(false);


        expect(items[6].classList.contains("hidden"))
            .toBe(true);

    });



    it("more()を4回呼ぶと15件すべて表示される", () => {

        const loadMore = new LoadMore(
            "more-package",
            ".package-item",
            3,
            3
        );


        loadMore.init();


        loadMore.more();
        loadMore.more();
        loadMore.more();
        loadMore.more();


        const items = document.querySelectorAll(".package-item");


        items.forEach((item)=>{

            expect(item.classList.contains("hidden"))
                .toBe(false);

        });

    });


});