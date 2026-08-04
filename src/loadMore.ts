/**
 * 制作物一覧の「もっと見る」機能を管理するクラス
 * 初期表示数を超える作品をボタン操作で追加表示する
 */
export class LoadMore {

    // もっと見るボタン
    private button: HTMLElement | null;

    // 表示対象となる作品一覧
    private items: NodeListOf<HTMLElement>;

    // 現在表示している作品数
    private visibleCount: number;

    // クリック時に追加表示する件数
    private increment: number;

    constructor(
        buttonId: string,
        itemSelector: string,
        initialCount = 9,
        increment = 9
    ) {

        // ボタン要素を取得
        this.button = document.getElementById(buttonId);

        // 作品カードを取得
        this.items = document.querySelectorAll<HTMLElement>(itemSelector);

        // 初期表示数を設定
        this.visibleCount = initialCount;

        // 追加表示数を設定
        this.increment = increment;

    }


    /**
     * 初期表示設定とクリックイベント登録
     */
    public init() {

        // 初期表示数を超える作品を非表示にする
        this.hideItems();

        // ボタンクリック時に追加表示
        this.button?.addEventListener("click", () => {
            this.showMore();
        });

    }

    /**
     * 初期表示数を超える作品を非表示にする
     */
    private hideItems() {

        this.items.forEach((item, index) => {

            if (index >= this.visibleCount) {
                item.classList.add("hidden");
            }

        });

    }

    /**
     * 指定数の作品を追加表示する
     */
    private showMore() {

        // 表示数を追加
        this.visibleCount += this.increment;

        this.items.forEach((item, index) => {

            // 表示対象になった作品のhiddenを解除
            if (index < this.visibleCount) {
                item.classList.remove("hidden");
            }

        });

    }


    public more(): void {
        this.showMore();
    }

    public getVisibleCount(): number {
        return this.visibleCount;
    }

}