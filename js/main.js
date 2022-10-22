let doc = document;
const wrap = doc.querySelector('.wrap');
const useCard = doc.querySelector('#cardUse');
const cardStatus = useCard.content.querySelector('.card__status'); // вызов из template элемента и сохранение в переменной
const priceCoast = useCard.content.querySelector('.card__price-coast');
const priceDesc = useCard.content.querySelector('.card__price-desc');
const cardMore = useCard.content.querySelector('.card__more');


// Первая клонированная карточка
let doubleCard = doc.createElement('div');
cardStatus.classList.add('card__status1'); //добавление класса
cardStatus.classList.remove('card__status'); // удаление класса
priceCoast.textContent = "2900 ₽"; //изменение цены
priceDesc.textContent = "1200 р на причале dmfklsfsdfl"; //изменение текста под ценой
cardMore.style.fontWeight = "600"; // изменение жирности текста кнопки
// дублирование узла
doubleCard.append(cardUse.content.cloneNode(true));
wrap.append(doubleCard);


// Вторая клонированная карточка
let doubleCard1 = doc.createElement('div');
cardStatus.classList.add('card__status');
cardStatus.classList.remove('card__status1');
priceDesc.textContent = "1200 р на причале";
cardMore.style.fontWeight = "400";
doubleCard1.append(cardUse.content.cloneNode(true));
wrap.append(doubleCard1);