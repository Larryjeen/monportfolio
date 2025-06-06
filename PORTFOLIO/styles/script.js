document.addEventListener("DOMContentLoaded", () => {
    const light = document.querySelector(".cursor-light");

    document.addEventListener("mousemove", (e) => {
        if (light) {
            light.style.left = `${e.clientX}px`;
            light.style.top = `${e.clientY}px`;
        }
    });
});
