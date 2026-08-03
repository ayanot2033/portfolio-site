import { Validator } from "./validator";


interface ContactData {
    name: string;
    email: string;
    message: string;
}


type FormState =
    | "input"
    | "confirm"
    | "complete";


export class ContactForm {

    // プロパティ
    private validator: Validator;


    private data: ContactData = {
        name: "",
        email: "",
        message: ""
    };


    private state: FormState = "input";



    constructor() {
        this.validator = new Validator();
    }



    // 確認ボタン押下
    handleSubmit(): void {

        // 前回の成功メッセージを消す
        const successElement =
            document.getElementById("success-message");

        if(successElement){
            successElement.textContent = "";
        }

        // 前回のエラーを消す
        this.clearError();


        // ① 入力値を取得
        const name =
            (document.getElementById("name") as HTMLInputElement).value;

        const email =
            (document.getElementById("email") as HTMLInputElement).value;

        const message =
            (document.getElementById("message") as HTMLTextAreaElement).value;



        // ② Validatorでチェック
        const nameError = this.validator.validateName(name);
        const emailError = this.validator.validateEmail(email);
        const messageError = this.validator.validateMessage(message);



        // エラー管理
        let hasError = false;



        // 名前チェック
        if (nameError) {

            this.showError("name-error", nameError);
            hasError = true;

        }



        // メールチェック
        if (emailError) {

            this.showError("email-error", emailError);
            hasError = true;

        }



        // 内容チェック
        if (messageError) {

            this.showError("message-error", messageError);
            hasError = true;

        }



        // エラーがあれば停止
        if (hasError) {

            return;

        }



        // 入力内容を保存
        this.data = {

            name,
            email,
            message

        };



        // 確認画面へ
        this.showConfirm();


        

    }




    // エラー表示
    showError(id: string, message: string): void {

        const errorElement =
            document.getElementById(id);


        if (errorElement) {

            errorElement.textContent = message;

        }

    }





    // エラー削除
    clearError(): void {

        const errors =
            document.querySelectorAll(".error-message");


        errors.forEach((error) => {

            error.textContent = "";

        });

    }





    // 確認画面表示
    showConfirm(): void {


        const confirmArea =
            document.getElementById("confirm-area");

            if (this.state !== "input") {
                return;
            }

            if (confirmArea) {

                 // アニメーションをリセット
                confirmArea.classList.remove("show-confirm");
                
                confirmArea.innerHTML = `
                    <h3>入力内容をご確認ください</h3>

                    <p>Name</p>
                    <p>${this.data.name}</p>

                    <p>Email</p>
                    <p>${this.data.email}</p>

                    <p>Message</p>
                    <p>${this.data.message}</p>

                    <button id="back-button">
                        戻る
                    </button>


                    <button id="send-button">
                        送信
                    </button>


                `;

                // 確認画面表示アニメーション開始
                confirmArea.classList.add("show-confirm");

                this.state = "confirm";



            // 送信ボタン
            document
            .getElementById("send-button")
            ?.addEventListener("click", () => {

                this.send();

            });



            // 戻るボタン
            document
            .getElementById("back-button")
            ?.addEventListener("click", () => {


                confirmArea.innerHTML = "";

                this.state = "input";


            });


        }

    }





    // 送信処理
    send(): void {


        this.state = "complete";


        // 後でここにEmailJSなどを追加


        this.showSuccess();


        this.clearForm();


    }





    // 成功表示
    showSuccess(): void {


        const successElement =
            document.getElementById("success-message");



        if(successElement) {


            successElement.textContent =
                "お問い合わせありがとうございました。";

                successElement.classList.add("show-success");

        }

    }





    // フォーム初期化
    clearForm(): void {


        const nameInput =
            document.getElementById("name") as HTMLInputElement;


        const emailInput =
            document.getElementById("email") as HTMLInputElement;


        const messageInput =
            document.getElementById("message") as HTMLTextAreaElement;



        nameInput.value = "";

        emailInput.value = "";

        messageInput.value = "";

    }


}