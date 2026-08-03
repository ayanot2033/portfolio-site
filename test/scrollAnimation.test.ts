import { describe, it, expect, beforeEach, vi } from "vitest";
import { initScrollAnimation, shouldShow } from "../src/scrollAnimation";


describe("ScrollAnimation", () => {


    beforeEach(() => {

        document.body.innerHTML = `
            <div class="fade-in"></div>
        `;


        window.IntersectionObserver = vi.fn(
            function(this: any, callback) {

                this.observe = vi.fn((element: Element) => {

                callback([
                {
                    target: element,
                    isIntersecting: true
                }
            ]);

        });

        this.disconnect = vi.fn();

            }
        ) as any;


    });



    it("要素が画面内ならtrueを返す", () => {

        const entry = {
            isIntersecting: true

        } as IntersectionObserverEntry;


        expect(shouldShow(entry)).toBe(true);

    });



    it("要素が画面外ならfalseを返す", () => {

        const entry = {
            isIntersecting: false

        } as IntersectionObserverEntry;


        expect(shouldShow(entry)).toBe(false);

    });



    it("画面内に入るとshowクラスが追加される", () => {


        initScrollAnimation();


        const target =
            document.querySelector(".fade-in");



        expect(
            target?.classList.contains("show")
        )
        .toBe(true);


    });


});