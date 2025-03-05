const hoverElement = document.getElementById("hoverElement");
const targetElement = document.getElementById("targetElement");

hoverElement.addEventListener("mouseenter", () => {
    targetElement.style.display = "none"; // Появляется
});

hoverElement.addEventListener("mouseleave", () => {
    targetElement.style.display = "block"; // Исчезает
});