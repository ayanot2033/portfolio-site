import { describe, it, expect, beforeEach } from "vitest";
import { ContactForm } from "../src/contactForm";


describe("ContactForm", () => {


    beforeEach(() => {

        document.body.innerHTML = `
            <input id="name" />
            <input id="email" />
            <textarea id="message"></textarea>

            <div id="confirm-area"></div>

            <div id="success-message"></div>

            <div class="error-message" id="name-error"></div>
            <div class="error-message" id="email-error"></div>
            <div class="error-message" id="message-error"></div>
        `;

    });



    it("正常入力で確認画面が表示される", () => {

        const form = new ContactForm();


        (document.getElementById("name") as HTMLInputElement).value =
            "Ayano";

        (document.getElementById("email") as HTMLInputElement).value =
            "test@example.com";

        (document.getElementById("message") as HTMLTextAreaElement).value =
            "Hello";


        form.handleSubmit();


        expect(
            document.getElementById("confirm-area")?.textContent
        ).toContain("Ayano");


    });



    it("send()で成功メッセージが表示される", () => {

        const form = new ContactForm();


        form.send();


        const success =
        document.getElementById("success-message");


        expect(success?.textContent)
        .toBe(
                "お問い合わせありがとうございました。"
            );


        expect(success?.classList.contains("show-success"))
            .toBe(true);


        });



    it("clearForm()で入力内容が消える", () => {

        const form = new ContactForm();


        (document.getElementById("name") as HTMLInputElement).value =
            "test";


        form.clearForm();


        expect(
            (document.getElementById("name") as HTMLInputElement).value
        ).toBe("");

    });


    it("名前が空の場合エラー表示される", () => {

        const form = new ContactForm();


        (document.getElementById("email") as HTMLInputElement).value =
            "test@example.com";

        (document.getElementById("message") as HTMLTextAreaElement).value =
            "Hello";


        form.handleSubmit();


        expect(
            document.getElementById("name-error")?.textContent
        ).not.toBe("");

    });


        it("メールアドレスが不正の場合エラー表示される", () => {

        const form = new ContactForm();


        (document.getElementById("name") as HTMLInputElement).value =
            "Ayano";


        (document.getElementById("email") as HTMLInputElement).value =
            "abc";


        (document.getElementById("message") as HTMLTextAreaElement).value =
            "Hello";


        form.handleSubmit();



        expect(
            document.getElementById("email-error")?.textContent
        ).not.toBe("");


    });



    it("戻るボタンで確認画面が消える", () => {

        const form = new ContactForm();



        (document.getElementById("name") as HTMLInputElement).value =
            "Ayano";


        (document.getElementById("email") as HTMLInputElement).value =
            "test@example.com";


        (document.getElementById("message") as HTMLTextAreaElement).value =
            "Hello";


        form.handleSubmit();



        const backButton =
            document.getElementById("back-button");



        backButton?.click();



        expect(
            document.getElementById("confirm-area")?.innerHTML
        )
        .toBe("");


    });


});