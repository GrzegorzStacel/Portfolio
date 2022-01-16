// 1# Navigation bar
const navbarMenu = document.getElementById('navbar');
const burgerMenu = document.getElementById('burger');
const overlayMenu = document.getElementById('overlay');
const burgerLine = document.getElementsByClassName('burger-line');
const close_handler = document.getElementsByClassName('close-handler');

// Toggle Menu Function
burgerMenu.addEventListener('click', toggleMenu);
overlayMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    navbarMenu.classList.toggle('active');
    overlayMenu.classList.toggle('active');
    burgerLine[0].classList.toggle('active');
}

// Close Menu when user click for id hook link
for (let i = 0; i < close_handler.length; i++) {
    close_handler[i].addEventListener('click', (e) => {
        toggleMenu();

        const e_target = e.target.parentElement.parentElement.previousElementSibling;
        
        if (e_target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
            const menuItemHasChildren = e_target.parentElement;
            
            // If menu-item-child is Expanded, then Collapse It
            if (menuItemHasChildren.classList.contains('active')) {
                collapseSubMenu();
            } else {
                // Collapse the Existing Expanded menu-item-child
                if (navbarMenu.querySelector('.menu-item-child.active')) {
                    collapseSubMenu();
                }
                
                // Expanded the New menu-item-child
                menuItemHasChildren.classList.add('active');
                const subMenu = menuItemHasChildren.querySelector('.sub-menu');
                subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
            }
        }
    } )
}

// Collapse SubMenu Function
navbarMenu.addEventListener('click', (e) => {

    if (e.target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
        e.preventDefault();
        const menuItemHasChildren = e.target.parentElement;
        
        // If menu-item-child is Expanded, then Collapse It
        if (menuItemHasChildren.classList.contains('active')) {
            collapseSubMenu();
        } else {
            // Collapse the Existing Expanded menu-item-child
            if (navbarMenu.querySelector('.menu-item-child.active')) {
                collapseSubMenu();
            }
            // Expanded the New menu-item-child
            menuItemHasChildren.classList.add('active');
            const subMenu = menuItemHasChildren.querySelector('.sub-menu');
            subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
        }
    }
});

function collapseSubMenu() {
    navbarMenu.querySelector('.menu-item-child.active .sub-menu').removeAttribute('style');
    navbarMenu.querySelector('.menu-item-child.active').classList.remove('active');
}

// Fixed Resize Screen Function
window.addEventListener('resize', () => {
    if (this.innerWidth > 992) {
        // If navbarMenu is Open, then Close It
        if (navbarMenu.classList.contains('active')) {
            toggleMenu();
        }

        // If menu-item-child is Expanded, then Collapse It
        if (navbarMenu.querySelector('.menu-item-child.active')) {
            collapseSubMenu();
        }
    }
});






// 2# Click button and copy to clipboard
const span = document.getElementsByClassName("copy_icon");

for (let i = 0; i < span.length; i++) {
    const shourtcut = document.getElementsByClassName("shourtcut-container-p_bold");
    const info_label = document.getElementsByClassName('info-label');


    span[i].addEventListener('mouseenter', function () {
        info_label[i].style.opacity = '1';
    })
    span[i].addEventListener('mouseleave', function () {
        info_label[i].style.opacity = '0';
    })


    shourtcut[i].addEventListener('mouseenter', function () {
        info_label[i].style.opacity = '1';
    })
    shourtcut[i].addEventListener('mouseleave', function () {
        info_label[i].style.opacity = '0';
    })

    span[i].addEventListener('click', function showcomment() {
        navigator.clipboard.writeText(shourtcut[i].textContent);
        navigator.clipboard.writeText(shourtcut[i].value);
        
        changeTextLabel(i);
    }, false)
    
    shourtcut[i].addEventListener('click', function showcomment() {
        navigator.clipboard.writeText(shourtcut[i].textContent);
        navigator.clipboard.writeText(shourtcut[i].value);

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

window.onscroll = function () {
    scroll_function()
};

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
function scrollToY(y, duration = 0, element = document.scrollingElement) {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    const cosParameter = document.scrollingElement.scrollTop / 2;
    let scrollCount = 0,
        oldTimestamp = null;

    function step(newTimestamp) {
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