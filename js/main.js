var ham = document.getElementById("hamburgermenu");
var id_navigation = document.getElementById("navigation");
var id_mobile_header = document.getElementById("header");


ham.addEventListener('click', function () {
    var bar = this.firstElementChild.classList;
    bar.toggle('active');

    if (bar.contains('active')) {
        id_navigation.classList.add('visible');
        id_mobile_header.classList.add('mobile');

    } else {
        id_navigation.classList.remove('visible');
        id_mobile_header.classList.remove('mobile');

    }
});