export class LoadMore {

    private button: HTMLElement | null;
    private items: NodeListOf<HTMLElement>;

    private visibleCount: number;
    private increment: number;

    constructor(
        buttonId: string,
        itemSelector: string,
        initialCount = 9,
        increment = 9
    ) {

        this.button = document.getElementById(buttonId);
        this.items = document.querySelectorAll<HTMLElement>(itemSelector);

        this.visibleCount = initialCount;
        this.increment = increment;

    }

    public init() {

        this.hideItems();

        this.button?.addEventListener("click", () => {
            this.showMore();
        });

    }

    private hideItems() {

        this.items.forEach((item, index) => {

            if (index >= this.visibleCount) {
                item.classList.add("hidden");
            }

        });

    }

    private showMore() {

        this.visibleCount += this.increment;

        this.items.forEach((item, index) => {

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