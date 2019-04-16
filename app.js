const anchors = document.getElementsByClassName("smooth-scroll");

[].forEach.call(anchors, anchor => {
    anchor.addEventListener('click', function () {
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});