export class Slider {

    private images: NodeListOf<HTMLImageElement>;
    private currentIndex: number = 0;
    private prevButton: HTMLButtonElement | null;
    private nextButton: HTMLButtonElement | null;
    private dots: NodeListOf<HTMLSpanElement>;


    constructor() {

        this.images = document.querySelectorAll(".slider img");

        this.prevButton = document.querySelector(".slider-prev");
        this.nextButton = document.querySelector(".slider-next");

        this.createDots();

        this.dots = document.querySelectorAll(".slider-dots span");

    }


    public start(): void {


        // スライダーがないページでは終了
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


    private nextSlide():void{

        this.currentIndex++;


        if(this.currentIndex >= this.images.length){

            this.currentIndex = 0;

        }


        this.showSlide();

    }


    private prevSlide():void{

        this.currentIndex--;


        if(this.currentIndex < 0){

            this.currentIndex = this.images.length - 1;

        }


        this.showSlide();

    }


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