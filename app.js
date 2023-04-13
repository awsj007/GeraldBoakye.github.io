//Services section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".porfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

//Our clients - Swiper
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");
const logoImg = document.querySelector(".logo-img");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    if (getCurrentTheme() === "dark") {
        logoImg.src = "Color logo - no background.png";
    } 
    else{
        logoImg.src = "Color logo - no background-färg.png";
    }

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
    if (savedTheme === "dark") {
        logoImg.src = "Color logo - no background.png";
    } else {
        logoImg.src = "Color logo - no background-färg.png";
    }
}

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
    //reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

//Target elements, and specify options to create reveal animations

ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .content-right', { delay: 400, origin: 'right' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .contact-right form', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li', { delay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('.content-left, .services-description, .contact-card .title, .client-swiper, .contact-left h2', { delay: 500, origin: 'left' });
ScrollReveal().reveal('footer .group', { delay: 500, origin: 'top', interval: 200 });

const bar1 = document.querySelectorAll('.bar1');
const bar2 = document.querySelectorAll('.bar2');
const bar3 = document.querySelectorAll('.bar3');
const bar4 = document.querySelectorAll('.bar4');
const bar5 = document.querySelectorAll('.bar5');


function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateBars() {

  bar2.forEach(bar => {
    if (isElementInViewport(bar)) {
      bar.querySelector('.css').classList.add('animate');
    }
  });
  bar1.forEach(bar => {
    if (isElementInViewport(bar)) {
      bar.querySelector('.html').classList.add('animate');
    }
  });
  bar3.forEach(bar => {
    if (isElementInViewport(bar)) {
      bar.querySelector('.javascript').classList.add('animate');
    }
  });
  bar4.forEach(bar => {
    if (isElementInViewport(bar)) {
      bar.querySelector('.jquery').classList.add('animate');
    }
  });
  bar5.forEach(bar => {
    if (isElementInViewport(bar)) {
      bar.querySelector('.php').classList.add('animate');
    }
  });
}

window.addEventListener('scroll', animateBars);