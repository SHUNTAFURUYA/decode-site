// デコデ 会社サイト。動きは控えめ（ふわっと出る・少しずれて動く・ヘッダーの切り替え）
const root = document.documentElement;
root.classList.add("js");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ふわっと出る
const items = document.querySelectorAll(".fade-up");
if (reduce || !("IntersectionObserver" in window)) {
  items.forEach((el) => el.classList.add("is-in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
  );
  items.forEach((el) => io.observe(el));
}

// 最初の画面：写真と青い面が少し遅れて出る
const hero = document.querySelector(".hero, .phero");
if (hero) {
  window.requestAnimationFrame(() => setTimeout(() => hero.classList.add("is-in"), 60));
}

// ヘッダー：スクロールしたら白地にする。青い面を少しずらす
const head = document.getElementById("head");
const par = document.querySelectorAll("[data-par]");
let ticking = false;
function update() {
  const y = window.scrollY || 0;
  head.classList.toggle("is-solid", y > 24);
  if (!reduce && y < window.innerHeight * 1.2) {
    par.forEach((el) => {
      const k = parseFloat(el.getAttribute("data-par"));
      el.style.transform = `translate3d(0,${(y * k).toFixed(1)}px,0)`;
    });
  }
  ticking = false;
}
window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  },
  { passive: true },
);
update();

// スマホのメニュー
const burger = document.getElementById("burger");
const drawer = document.getElementById("drawer");
if (burger && drawer) {
  const set = (open) => {
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    drawer.hidden = !open;
    document.body.classList.toggle("is-locked", open);
    head.classList.toggle("is-open", open);
  };
  burger.addEventListener("click", () => set(burger.getAttribute("aria-expanded") !== "true"));
  drawer.addEventListener("click", (e) => {
    if (e.target.closest("a")) set(false);
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") set(false);
  });
}
