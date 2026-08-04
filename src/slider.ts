/**
 * TOPページのメインビジュアルスライダーを管理するクラス
 * 画像切替、ボタン操作、自動切替、ドット表示を制御する
 */
export class Slider {

    // スライド対象の画像一覧
    private images: NodeListOf<HTMLImageElement>;

    private currentIndex: number = 0;
    private prevButton: HTMLButtonElement | null;
    private nextButton: HTMLButtonElement | null;

    // スライド位置を示すドット一覧
    private dots: NodeListOf<HTMLSpanElement>;


    constructor() {

        this.images = document.querySelectorAll(".slider img");
        this.prevButton = document.querySelector(".slider-prev");
        this.nextButton = document.querySelector(".slider-next");

        this.createDots();

        this.dots = document.querySelectorAll(".slider-dots span");

    }


    /**
     * スライダーを開始する
     * 初期表示設定、イベント登録、自動切替を実行する
     */
    public start(): void {


        if(this.images.length === 0){

            console.log("Slider skipped");

            return;

        }


        this.showSlide();


        this.nextButton?.addEventListener("click",()=>{

            this.nextSlide();

        });


        this.prevButton?.addEventListener("click",()=>{

            this.prevSlide();

        });


        setInterval(()=>{

            this.nextSlide();

        },3000);


    }


    /**
     * 次のスライドへ切り替える
     */
    private nextSlide():void{

        this.currentIndex++;


        if(this.currentIndex >= this.images.length){

            this.currentIndex = 0;

        }


        this.showSlide();

    }


    /**
     * 前のスライドへ切り替える
     */
    private prevSlide():void{

        this.currentIndex--;


        if(this.currentIndex < 0){

            this.currentIndex = this.images.length - 1;

        }


        this.showSlide();

    }


    /**
     * 現在のスライドを画面へ反映する
     */
    private showSlide():void{


        if(this.images.length === 0){

            return;

        }


        this.images.forEach((image)=>{

            image.classList.remove("active");

        });


        this.images[this.currentIndex].classList.add("active");


        this.dots.forEach((dot)=>{

            dot.classList.remove("active");

        });


        this.dots[this.currentIndex]?.classList.add("active");


    }


    /**
     * スライド数に合わせてドットを生成する
     */
    private createDots():void{


        const dotsContainer = document.querySelector(".slider-dots");


        if(!dotsContainer){

            return;

        }


        this.images.forEach(()=>{

            const dot = document.createElement("span");

            dotsContainer.appendChild(dot);

        });

    }



    public getCurrentIndex(): number {
        return this.currentIndex;
    }

    public next(): void {
        this.nextSlide();
    }

    public prev(): void {
        this.prevSlide();
    }

    public getImageCount(): number {
        return this.images.length;
    }

}