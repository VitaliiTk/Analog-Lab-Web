const btnHome = document.querySelector('#home-page-btn');
const playContent = document.querySelector('#play-content');
const homePage = document.querySelector('#home-page');
const btnClosePage = document.querySelector('#close-page');
const soundBanksContent = document.querySelector('#sound-banks');
const homeContent = document.querySelector('#home');
const exploreContent = document.querySelector('#explore');
const storeContent = document.querySelector('#store');
const favoriteBtn = document.querySelector('#favorite');
const bankName = document.querySelector('.bank-name');


function goToHomePage(event) {
    if (event.currentTarget.textContent == 'overview_key') {
        playContent.classList.add('display-none')
        homePage.classList.remove('display-none')
        event.currentTarget.textContent = 'close';
        event.currentTarget.style.color = '#0B94C1'
    } else if (event.currentTarget.textContent == 'close') {
        event.currentTarget.textContent = 'overview_key';
        playContent.classList.remove('display-none')
        homePage.classList.add('display-none')
        event.currentTarget.style.color = '#9c9c9c'
    }
}
btnHome.addEventListener('mousedown', goToHomePage)


// content change in center screen and menu selected item
function contentChange(element, nameOfPage) {
    document.querySelectorAll('.content__wrapper').forEach((element) => {
        element.classList.add('display-none')
    })
    nameOfPage.classList.remove('display-none')
    menuItem.forEach((element) => {
        element.classList.remove('selected')
    })
    element.classList.add('selected')
}
const menuItem = document.querySelectorAll('.menu__item');
menuItem.forEach((element, index) => {
    element.addEventListener('mousedown', (event) => {
        switch (index) {
            case 0:
                contentChange(element, homeContent)
                break
            case 1:
                contentChange(element, exploreContent)
                break
            case 2:
                contentChange(element, soundBanksContent)
                break
            case 3:
                contentChange(element, storeContent)
                break
        }
    })
})


// favorite btn icon logic
favoriteBtn.addEventListener('mousedown', (event) => {
    event.currentTarget.classList.toggle('active')
})


function pressedKey(buttonNumber) {
    console.log(buttonNumber);
    switch (buttonNumber) {
        case 0:
            console.log('this is H note');
            break
        default:
            console.log('not set yet');
            break
    }

}

const keys = document.querySelectorAll('.key')
keys.forEach((element, index) => {
    element.addEventListener('mousedown', event => {
        pressedKey(index)
    })
})