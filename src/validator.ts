export class Validator{
    validateName(name: string): string | null {
         // ① 空欄チェック
        if(name === "") {
            return "名前を入力してください";
        }

         // ② 文字以外（数字・記号）のチェック
        if(!/^[A-Za-zぁ-んァ-ヶ一-龯\s]+$/.test(name)) {
            return "名前は文字のみで入力してください";
        }

         // ③ 文字数制限
        if (name.length > 50) {
            return "名前は50文字以内で入力してください";
        }

         // ④ 問題なし
        return  null;
    }

    validateEmail(email: string): string | null {
         // ① 空欄チェック
        if( email=== "") {
            return "メールアドレスを入力してください";
        }

        // ② メールアドレスの形式
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return "メールアドレスの形式が正しくありません";
        }

        // ③ 問題なし
        return  null;

    }

    validateMessage(message: string): string | null {

        if (message === "") {
            return "お問い合わせ内容を入力してください";
        }

        if (message.length > 1000) {
            return "お問い合わせ内容は1000文字以内で入力してください";
        }

        return null;
}
}