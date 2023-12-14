document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 140,
        loop: true,
    }).type("Web Developer.", {
        delay: 900
    }).delete(19).type("Systems Analyst.", {
        delay: 900
    }).delete(21).type("Cat Lover. 😸", {
        delay: 700
    }).delete(12).type("WebDesigner.", {
        delay: 700
    }).delete(12).go()
});