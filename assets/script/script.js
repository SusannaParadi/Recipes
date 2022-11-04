/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== API =========================*/
const $form = document.querySelector('.js-form');
const $container = document.querySelector('.js-recipes');
const $searchInput = document.querySelector('[name=food]');
const $errorField = document.querySelector('.js-error');
const $chicken = document.querySelector('.chicken');
const $beef = document.querySelector('.beef');
const $lamb = document.querySelector('.lamb');
const $home = document.querySelector('.home-images');
const $homeContainer = document.querySelector('.home-container');

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function getApiURL(search) {
    return API_URL + search;
}

function renderRecipe(response) {
    let html = '';
    let meals = response.meals ?? [];

    for (let meal of meals) {
        html += `
        <section class="meal-section">
            <h3>${meal.strMeal}</h3>
            <h4>${meal.strArea}</h4>
            <p>${meal.strInstructions}<p>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-img">
            <a href="${meal.strYoutube}" target="_blank" class="video"><i class='bx bxl-youtube'></i></a>
            
        </section>
        `
    }
    if (html.length > 0) {
        $container.innerHTML = html;
    } else {
        $errorField.innerHTML = 'Nothing was find'
    }
}

function formSubmitted(event) {
    event.preventDefault();
    const value = $searchInput.value.trim();
    $container.innerHTML = "";
    if (value.length > 0) {
        $errorField.innerHTML = "";
        fetch(getApiURL(value))
            .then((data) => data.json())
            .then(renderRecipe);
    } 
    else {
        $errorField.innerHTML = 'Error Search'
    } 
    $home.style.display = 'none';
    $homeContainer.style.height = '60vh';
    $homeContainer.style.paddingTop = '2rem';
}


$form.addEventListener("submit", formSubmitted);

function getChicken() {
    const value = 'chicken';
    $container.innerHTML = "";
    if (value.length > 0) {
        fetch(getApiURL(value))
            .then((data) => data.json())
            .then(renderRecipe);
    } 
    
    $home.style.display = 'none';
    $homeContainer.style.height = '60vh';
    $homeContainer.style.paddingTop = '2rem';
}

$chicken.addEventListener("click", getChicken);

function getBeef() {
    const value = 'beef';
    $container.innerHTML = "";
    if (value.length > 0) {
        fetch(getApiURL(value))
            .then((data) => data.json())
            .then(renderRecipe);
    } 
    
    $home.style.display = 'none';
    $homeContainer.style.height = '60vh';
    $homeContainer.style.paddingTop = '2rem';
}

$beef.addEventListener("click", getBeef);

function getLamb() {
    const value = 'lamb';
    $container.innerHTML = "";
    if (value.length > 0) {
        fetch(getApiURL(value))
            .then((data) => data.json())
            .then(renderRecipe);
    } 
    
    $home.style.display = 'none';
    $homeContainer.style.height = '60vh';
    $homeContainer.style.paddingTop = '2rem';
}

$lamb.addEventListener("click", getLamb);

/*========================= GSAP ANIMATION ============================*/
TweenMax.from('.home-title', 1, {delay: .2, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home-description', 1, {delay: .3, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home-button', 1, {delay: .4, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home-bgpics', 1, {delay: .7, opacity: 0, y: 200, ease: Expo.easeInOut})
TweenMax.from('.home-img-animate', 1, {delay: 1.2, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-bigpics', 1, {delay: 1.5, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-bigpics-2', 1, {delay: 1.6, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-decor:nth-child(1)', 2, {delay: 1.3, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-decor:nth-child(2)', 2, {delay: 1.4, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-decor:nth-child(3)', 2, {delay: 1.5, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-decor:nth-child(4)', 2, {delay: 1.6, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-decor:nth-child(5)', 2, {delay: 1.7, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home-decor:nth-child(6)', 2, {delay: 1.8, opacity: 0, y: -800, ease: Expo.easeInOut})