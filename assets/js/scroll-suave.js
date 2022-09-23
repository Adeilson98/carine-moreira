const menuLinks = document.querySelectorAll('nav .__wrap a[href^="#"]');

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth"
    });
}

function scrollToSection(event) {
    event.preventDefault();

    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 10;
    nativeScroll(distanceFromTheTop);

    // const element = event.target;

    // const id = element.getAttribute("href");

    // const secton = document.querySelector(id);

    // console.log(secton.offsetTop);
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});