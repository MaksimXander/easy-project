// modal-callback

const requireCall = document.getElementById("require-call");
const requireCallMobile = document.getElementById("require-call-mobile");
const callback = document.getElementById("call-us");
const ourSurvise = document.querySelector('.services-elements')
const modalApplication = document.querySelector('#application')



const modal = document.getElementById('callback');
const closeModalButton = document.getElementById("modal-close");



const openModal = () => {
    modal.style.display = "block";
}
const closeModal = () => {
    modal.style.display = 'none';
}

window.addEventListener('click', (event) => {
    if(event.target == modal)
        modal.style.display = "none";
});

requireCall.addEventListener('click', openModal);
requireCallMobile.addEventListener('click', openModal);
callback.addEventListener('click', openModal);

closeModalButton.addEventListener('click', closeModal);

const cardModal = document.getElementById('application');
cardModal.addEventListener('click', () => cardModal.style.display = 'none')





// document.getElementById("modal").addEventListener("click", function(){
//     document.getElementById("feedback").classList.add("open");
// });


// skroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


const goTopBtn = document.querySelector(".go-top");
window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", goTop);
function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add("go-top--show");
  } else {
    goTopBtn.classList.remove("go-top--show");
  }
}
function goTop() {
  if (window.pageYOffset > 0) {

    window.scrollBy(0, -35); 
    setTimeout(goTop, 0); 
  }
}

// skroll


// Accordeon
let openedSection = -1; // Если -1, то ничего не открыто, иначе - индекс открытого пункта
const accordeonSections = Array.from(document.getElementById('accordeon').children); // Список карточек

accordeonSections.forEach((section, index) => section.addEventListener('click', () => changeSection(index))); // Добавляем на каждую карточку ивент
const openSection = (index) => {
    const section = accordeonSections[index]; // Карточка по индексу
    const sectionContent = section.children[1]; // Второй дочерний элемент (сам текст)
    sectionContent.style.display = 'block';
}
const closeSection = (index) => {
    const section = accordeonSections[index];
    const sectionContent = section.children[1];
    sectionContent.style.display = 'none';
}
const changeSection = (index) => {
    if(openedSection == -1) { // Если ничего не открыто, то просто открываем карточку
        openSection(index)
        openedSection = index;
    } else if(openedSection == index) { // Если нажимаем на открытый, то закрывает
        closeSection(index)
        openedSection = -1;
    } else { // Закрываем открытый, открываем по индексу
        closeSection(openedSection);
        openSection(index);
        openedSection = index;
    }
}

ourSurvise.addEventListener("click", (e)=>{
    
    if (e.target.localName === "a"){
        modalApplication.style.display="block"
    }
    
})


// sliders
const topSlides = Array.from(document.getElementById('top-slider').children);
let currentSlide = 0;

const showSlide = (slide) => {
    slide.style.removeProperty('display');
    slide.getElementsByClassName('table')[0].classList.add('active');
}
const hideSlide = (slide) => {
    slide.style.display = 'none';
    slide.getElementsByClassName('table')[0].classList.remove('active');
}

setInterval(() => {
    const current = topSlides[currentSlide];
    let next;
    if(currentSlide >= topSlides.length-1) {
        next = topSlides[0];
        currentSlide = 0;
    } else {
        next = topSlides[currentSlide+1];
        currentSlide++;
    }
    hideSlide(current);
    showSlide(next);
}, 2000);

