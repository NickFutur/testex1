// let doc = document;
const wrap = document.querySelector('.wrap');
const useCard = document.querySelector('#cardUse');
const cardStatus = useCard.content.querySelector('.card__status'); // вызов из template элемента и сохранение в переменной
const priceCoast = useCard.content.querySelector('.card__price-coast');
const priceDesc = useCard.content.querySelector('.card__price-desc');
const cardMore = useCard.content.querySelector('.card__more');
const cardImage = useCard.content.querySelector('.card__image');
const card = document.querySelector('.card');


// Первая клонированная карточка
let doubleCard = document.createElement('div');
cardStatus.classList.add('card__status1'); //добавление класса
cardStatus.classList.remove('card__status'); // удаление класса
priceCoast.textContent = "2900 ₽"; //изменение цены
priceDesc.textContent = "1200 р на причале dmfklsfsdfl"; //изменение текста под ценой
cardMore.style.fontWeight = "600"; // изменение жирности текста кнопки
cardImage.style.height = "63vw"; // изменение высоты картинки

// дублирование узла
doubleCard.append(cardUse.content.cloneNode(true));
wrap.append(doubleCard);


// Вторая клонированная карточка
let doubleCard1 = document.createElement('div');
cardStatus.classList.add('card__status');
cardStatus.classList.remove('card__status1');
priceDesc.textContent = "1200 р на причале";
cardMore.style.fontWeight = "400";
cardImage.style.height = "59vw";
doubleCard1.append(cardUse.content.cloneNode(true));
wrap.append(doubleCard1);


//Пытался менять класс при изменении ширины экрана, пока не получилось
// function lenScreen() {
//     if (window.matchMedia("(min-width: 769px)").matches) {
//         let useCard1 = document.querySelector('#cardUse');
//         useCard1.style.display = 'none';
//         console.log('выполенено');
//     } else {

//     }
// };
// lenScreen();


// const mobileSec = document.querySelector('.mobile-sec');
// window.addEventListener('resize', function(event) {
//     const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
//     if (viewportWidth > 1000) {
//         if (!mobileSec.classList.contains('block-off')) {
//             mobileSec.classList.add('block-off');
//         }
//     } else {
//         if (mobileSec.classList.contains('block-off')) {
//             mobileSec.classList.remove('block-off');
//         }
//     }
// });


//скрытие элементов при определённой ширине
const mobileSec = document.querySelector('.mobile-sec');
window.addEventListener('resize', function(event) {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    if (viewportWidth >= 1000) {
        if (!card.classList.contains('block-off')) {
            card.classList.add('block-off');
            console.log('Сработал');
        }
        if (!doubleCard.classList.contains('block-off')) {
            doubleCard.classList.add('block-off');
            console.log('Сработал2');
        }
        if (!doubleCard1.classList.contains('block-off')) {
            doubleCard1.classList.add('block-off');
            console.log('Сработал3');
        }
    } else {
        if (card.classList.contains('block-off')) {
            card.classList.remove('block-off');
            console.log('Закончил работу');
        }
        if (doubleCard.classList.contains('block-off')) {
            doubleCard.classList.remove('block-off');
            console.log('Закончил работу2');
        }
        if (doubleCard1.classList.contains('block-off')) {
            doubleCard1.classList.remove('block-off');
            console.log('Закончил работу3');
        }
    }
});