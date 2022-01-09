// 1# Navigation bar

var ham = document.getElementById("hamburgermenu");

ham.addEventListener('click', function () {
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


// 2# Click button and copy to clipboard

const span = document.getElementsByClassName("copy_icon");

for (let i = 0; i < span.length; i++) {
    const shourtcut = document.getElementsByClassName("shourtcut-container-p_bold");
    const info_label = document.getElementsByClassName('info-label');
    

    span[i].addEventListener('mouseenter', function() {
        info_label[i].style.opacity = '1';
    })
    span[i].addEventListener('mouseleave', function() {
        info_label[i].style.opacity = '0';
    })
    

    shourtcut[i].addEventListener('mouseenter', function () {
        info_label[i].style.opacity = '1';
    })
    shourtcut[i].addEventListener('mouseleave', function() {
        info_label[i].style.opacity = '0';
    })
    
    span[i].addEventListener('click', function showcomment() {
        console.log('span');
        navigator.clipboard.writeText(shourtcut[i].textContent);
        
        changeTextLabel(i);
    }, false)
    
    shourtcut[i].addEventListener('click', function showcomment() {
        console.log('shourtcut');
        navigator.clipboard.writeText(shourtcut[i].textContent);

        changeTextLabel(i);
    }, false)
}

function changeTextLabel(i) {
    const info_label = document.getElementsByClassName("info-label");

    info_label[i].innerHTML = 'Copied!';

    setTimeout(() => {
        info_label[i].innerHTML = 'Click and copy';
    }, 2000);
}