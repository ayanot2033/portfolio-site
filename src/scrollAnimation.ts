export function initScrollAnimation() {

    const targets = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    targets.forEach((target) => {
        observer.observe(target);
    });


}

export function shouldShow(entry: IntersectionObserverEntry): boolean {
    return entry.isIntersecting;
}