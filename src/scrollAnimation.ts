/**
 * スクロール位置に応じて要素を表示するアニメーションを管理する
 * IntersectionObserverを使用して表示タイミングを監視する
 */
export function initScrollAnimation() {

    // アニメーション対象要素を取得
    const targets = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // 表示範囲に入った場合、表示用クラスを付与
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    targets.forEach((target) => {
        observer.observe(target);
    });


}

/**
 * 要素が表示範囲に入ったか判定する
 */
export function shouldShow(entry: IntersectionObserverEntry): boolean {
    return entry.isIntersecting;
}