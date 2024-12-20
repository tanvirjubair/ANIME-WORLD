function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}
document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll(".grid-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    gridItems.forEach((item) => observer.observe(item));
});
