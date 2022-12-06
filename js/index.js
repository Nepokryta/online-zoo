window.addEventListener('DOMContentLoaded', function() {
    
    // классы для карточек 

    class SliderCard {
        constructor(num, src, alt, title, subtitle, srcIcons, altIcons, parentSelector) {
            this.num = num;
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.subtitle = subtitle;
            this.srcIcons = srcIcons;
            this.altIcons = altIcons;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            element.classList.add('card');
            element.innerHTML = `
                <img class="card__photo" src=${this.src} alt=${this.alt}>
                <div class="card__wrapper">
                    <div class="card__info">
                        <div class="card__title">${this.title}</div>
                        <div class="card__subtitle">${this.subtitle}</div>
                    </div>

                    <img class="card__icons" src=${this.srcIcons} alt=${this.altIcons}>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new SliderCard (
        "1",
        "img/pandas.png",
        "pandas",
        "giant Pandas",
        "Native to Southwest China",
        "icons/banana-bamboo_icon.svg",
        "banana-bamboo_icon",
        ".carousel .cards"
    ).render();
    new SliderCard (
        "2",
        "img/eagles.png",
        "eagles",
        "Eagles",
        "Native to South America",
        "icons/meet-fish_icon.svg",
        "meet-fish_icon",
        ".carousel .cards"
    ).render();
    new SliderCard (
        "3",
        "img/gorillas.png",
        "gorillas",
        "Gorillas",
        "Native to Congo",
        "icons/banana-bamboo_icon.svg",
        "banana-bamboo_icon",
        ".carousel .cards"
    ).render();
    new SliderCard (
        "4",
        "img/sloth.png",
        "sloth",
        "Two-toed Sloth",
        "Native to Southwest China",
        "icons/banana-bamboo_icon.svg",
        "banana-bamboo_icon",
        ".carousel .cards"
    ).render();
    new SliderCard (
        "5",
        "img/cheetahs.png",
        "cheetahs",
        "cheetahs",
        "Native to Africa",
        "icons/meet-fish_icon.svg",
        "meet-fish_icon",
        ".carousel .cards"
    ).render();
    new SliderCard (
        "6",
        "img/penguins.png",
        "penguins",
        "Penguins",
        "Native to Antarctica",
        "icons/meet-fish_icon.svg",
        "meet-fish_icon",
        ".carousel .cards"
    ).render();
    new SliderCard (
        "7",
        "img/pandas.png",
        "pandas",
        "giant Pandas",
        "Native to Southwest China",
        "icons/banana-bamboo_icon.svg",
        "banana-bamboo_icon",
        ".carousel .cards"
    ).render();
    new SliderCard (
        "8",
        "img/eagles.png",
        "eagles",
        "Eagles",
        "Native to South America",
        "icons/meet-fish_icon.svg",
        "meet-fish_icon",
        ".carousel .cards"
    ).render();
    new SliderCard (
        "9",
        "img/gorillas.png",
        "gorillas",
        "Gorillas",
        "Native to Congo",
        "icons/banana-bamboo_icon.svg",
        "banana-bamboo_icon",
        ".carousel .cards"
    ).render();
    new SliderCard (
        "10",
        "img/sloth.png",
        "sloth",
        "Two-toed Sloth",
        "Native to Southwest China",
        "icons/banana-bamboo_icon.svg",
        "banana-bamboo_icon",
        ".carousel .cards"
    ).render();
    new SliderCard (
        "11",
        "img/cheetahs.png",
        "cheetahs",
        "cheetahs",
        "Native to Africa",
        "icons/meet-fish_icon.svg",
        "meet-fish_icon",
        ".carousel .cards"
    ).render();
    new SliderCard (
        "12",
        "img/penguins.png",
        "penguins",
        "Penguins",
        "Native to Antarctica",
        "icons/meet-fish_icon.svg",
        "meet-fish_icon",
        ".carousel .cards"
    ).render();
    new SliderCard (
        "13",
        "img/penguins.png",
        "penguins",
        "Penguins",
        "Native to Antarctica",
        "icons/meet-fish_icon.svg",
        "meet-fish_icon",
        ".carousel .cards"
    ).render();
    new SliderCard (
        "14",
        "img/penguins.png",
        "penguins",
        "Penguins",
        "Native to Antarctica",
        "icons/meet-fish_icon.svg",
        "meet-fish_icon",
        ".carousel .cards"
    ).render();

    // кдассы для отзывов

    class CommentCard {
        constructor(num, src, alt, title, subtitle1, subtitle2, body, parentSelector) {
            this.num = num;
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.subtitle1 = subtitle1;
            this.subtitle2 = subtitle2;
            this.body = body;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="comment__card comment__card${this.num}">
                    <div class="card__wrapper">
                        <div class="img"><img src=${this.src} alt=${this.alt}></div>
                        <div class="user__info">
                            <div class="user__name">${this.title}</div>
                            <div class="info">
                                <div class="loc">${this.subtitle1}</div>
                                <div class="decor">&ensp;•&ensp;</div>
                                <div class="time">${this.subtitle2}</div>
                            </div>
                        </div>
                    </div>
                    <div class="comment__text">${this.body}</div>
                </div>
            `;
            this.parent.append(element);
        }
    }
    new CommentCard (
        "1",
        "icons/user_icon.svg",
        "user_icon",
        "Michael John",
        "Local Austria",
        "Today",
        "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
        ".comment__wrapper .comment__cards"
    ).render();
    new CommentCard (
        "2",
        "img/user2.png",
        "user2",
        "Oskar Samborsky",
        "Local Austria",
        "Yesterday",
        "Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. <br> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. <br> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
        ".comment__wrapper .comment__cards"
    ).render();
    new CommentCard (
        "3",
        "img/user3.png",
        "user3",
        "Fredericka Michelin",
        "Local Austria",
        "Yesterday",
        "The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.<br> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. <br> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
        ".comment__wrapper .comment__cards"
    ).render();
    new CommentCard (
        "4",
        "img/user4.png",
        "user4",
        "Mila Riksha",
        "Local Austria",
        "Yesterday",
        "My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. <br> The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.",
        ".comment__wrapper .comment__cards"
    ).render();

    // Carousel


    let listElement = document.querySelectorAll('.card');
    let list = document.querySelector('.cards');
    const btnLeft = document.querySelector('.btn__left');
    const btnRight = document.querySelector('.btn__right');

    let content = document.querySelector('.container').offsetWidth;
    console.log(content);

    window.onresize = function() {
        let newContent =  document.querySelector('.container').offsetWidth;
        if (newContent != content) {
            console.log('ffffff');
            content = newContent;
            location.reload();
        }
        console.log(content);
    };

    let width;   // ширина картинки
    let count;   // видимое количество изображений

    if (content === 300) {
        width = 285;
        count = 1;
    } else if (content === 600) {
        width = 285 + 28;
        count = 2;
    } else if (content === 940) {
        width = 294 + 28;
        count = 3;
    } else {
        width = 366 + 30;
        count = 3;
    }

    let position = 0; // положение ленты прокрутки

    // /* конфигурация */

    function lastPage() {
        return (-width * Math.ceil((listElement.length - 6)/ 2));
    }

    function rightShift() {
        position += width * count;      // сдвиг влево
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position, 0);
        list.style.marginLeft = position + 'px';
    }

    function leftShift() {
        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position, lastPage());
        list.style.marginLeft = position + 'px';
    }


    btnLeft.addEventListener('click', () => {
        if (position === 0) {
            position -= width * (listElement.length - 1);
            leftShift();
        } else { 
            rightShift();
        }
    });

    btnRight.addEventListener('click', () => {
        if (position === lastPage()) {
            position = 0; 
            rightShift();
        } else {
            position -= width * count;    // сдвиг вправо
            leftShift();
        }
    });

});