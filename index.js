let navigations = document.querySelectorAll('.main_nav_links');
navigations.forEach((element) =>{
    element.addEventListener('click', () =>{
        let dropDown = element.nextElementSibling;
        let visible = dropDown.getAttribute("aria-expanded");
        if(visible === "false"){
            navigations.forEach(element => {
                element.nextElementSibling.setAttribute("aria-expanded", "false") ;
                element.firstElementChild.setAttribute("src", "images/icon-arrow-down.svg");
            })

                    dropDown.setAttribute("aria-expanded", "true");
                element.firstElementChild.setAttribute("src", "images/icon-arrow-up.svg");

        }else{
          navigations.forEach(element => {
            element.nextElementSibling.setAttribute("aria-expanded", "false");
            element.firstElementChild.setAttribute("src", "images/icon-arrow-down.svg")
          });
        };
    });
});

// hero section

let heroImages = document.querySelectorAll('.big-display');
let heroImageThumbnail = Array.from(document.querySelectorAll('.hero__'));
let tracker = 0;
let heroImageAnimation = setInterval(() => {
    heroImages.forEach((element) =>{
        element.style.display = "none";
    });
    heroImages[tracker].style.display = "block";

    heroImageThumbnail.forEach((element) =>{
        element.style.opacity = .8;
        element.style.outline = "unset";
        element.style.transform = "unset"
    });
    
    heroImageThumbnail[tracker].style.opacity = 1;
    heroImageThumbnail[tracker].style.outline = "3px solid rgb(9, 61, 230)";
    heroImageThumbnail[tracker].style.transform = "translateY(-.7rem)";
    tracker +=1;
    if (tracker > heroImages.length - 1) {
        tracker = 0;
    }
}, 4500);


heroImageThumbnail.forEach(element => {
    element.addEventListener('click', () =>{
        setTimeout(clearInterval(heroImageAnimation), 10000)
        let tracker = heroImageThumbnail.indexOf(element);
        heroImages.forEach((element) =>{
            element.style.display = "none";
        });
        heroImages[tracker].style.display = "block"
        return heroImageAnimation
    });
})

let products = document.querySelectorAll('.PS-Products');
let productThumbnails = document.querySelector('.product-thumbnails')
let productImages = Array.from(productThumbnails.querySelectorAll('.thumbnail')); 
productImages.forEach((element) => {
    element.addEventListener('click', () =>{
        products.forEach((element) =>{
            element.style.display = "none";
        });
        let tracker = productImages.indexOf(element);
        products[tracker].style.display = "grid"
    })
})

// THE FIRST CAROUSEL
let carouselSlide = document.querySelector('.carousel-slide');
let carousels = Array.from(document.querySelectorAll('.carousel'))
let size = carousels[0].clientWidth;

let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

let carouseltwoTracker = 0;
prevBtn.addEventListener('click', () => {
    carouselSlide.style.transition ="transform 1500ms ease-in-out"
    carouselSlide.style.transform = "translateX("+ (size*carouseltwoTracker) +"px)";
    carouseltwoTracker--
})
let carouseloneTracker = 1;
nextBtn.addEventListener('click', () => {
    carouselSlide.style.transition ="transform 1500ms ease-in-out"
    carouselSlide.style.transform = "translateX("+ (-size*carouseloneTracker) +"px)";
    carouseloneTracker++
})
// carouselSlide.addEventListener('transitionend', () =>{
//     carousels.sort().reverse();
//     carouselSlide.style.transition ="unset"
//     carouselSlide.style.transform = "translateX(0px)";
//     console.log("fired")
// })