// 1# Navigation bar

var ham = document.getElementById("hamburgermenu");

ham.addEventListener('click', function () {
    var id_navigation = document.getElementById("navigation");
    var id_mobile_header = document.getElementById("header");

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
    

    shourtcut[i].addEventListener('mouseenter', function() {
        info_label[i].style.opacity = '1';
    })
    shourtcut[i].addEventListener('mouseleave', function() {
        info_label[i].style.opacity = '0';
    })
    
    span[i].addEventListener('click', function showcomment() {
        navigator.clipboard.writeText(shourtcut[i].textContent);
        
        changeTextLabel(i);
    }, false)
    
    shourtcut[i].addEventListener('click', function showcomment() {
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

// #3 Scroll to top button

const scroll_button = document.getElementById('top-arrow_container');

window.onscroll = function () { scroll_function() };

function scroll_function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scroll_button.style.display = "flex";
    } else {
        scroll_button.style.display = "none";
      }
}
  
/*
 * y: the y coordinate to scroll, 0 = top
 * duration: scroll duration in milliseconds; default is 0 (no transition)
 * element: the html element that should be scrolled ; default is the main scrolling element
 */
function scrollToY (y, duration = 0, element = document.scrollingElement) {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    const cosParameter = document.scrollingElement.scrollTop / 2;
    let scrollCount = 0, oldTimestamp = null;

    function step (newTimestamp) {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollCount will be Infinity
            scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
            if (scrollCount >= Math.PI) return document.scrollingElement.scrollTop = 0;
            document.scrollingElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }
  
  function scrollToTop(duration = 0) {
    scrollToY(0, duration, document.scrollingElement);
  }