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
            element.classList.add(`card${this.num}`);
            element.innerHTML = `
                <div class="card__photo">
                    <img src=${this.src} alt=${this.alt}>
                </div>
                <div class="card__wrapper">
                    <div class="card__info">
                        <div class="card__title">${this.title}</div>
                        <div class="card__subtitle">${this.subtitle}</div>
                    </div>
                    <div class="card__icons">
                        <img src=${this.srcIcons} alt=${this.altIcons}>
                    </div>
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
        ".container .cards"
    ).render();
    new SliderCard (
        "2",
        "img/eagles.png",
        "eagles",
        "Eagles",
        "Native to South America",
        "icons/meet-fish_icon.svg",
        "meet-fish_icon",
        ".container .cards"
    ).render();
    new SliderCard (
        "3",
        "img/gorillas.png",
        "gorillas",
        "Gorillas",
        "Native to Congo",
        "icons/banana-bamboo_icon.svg",
        "banana-bamboo_icon",
        ".container .cards"
    ).render();
    new SliderCard (
        "4",
        "img/sloth.png",
        "sloth",
        "Two-toed Sloth",
        "Native to Southwest China",
        "icons/banana-bamboo_icon.svg",
        "banana-bamboo_icon",
        ".container .cards"
    ).render();
    new SliderCard (
        "5",
        "img/cheetahs.png",
        "cheetahs",
        "cheetahs",
        "Native to Africa",
        "icons/meet-fish_icon.svg",
        "meet-fish_icon",
        ".container .cards"
    ).render();
    new SliderCard (
        "6",
        "img/penguins.png",
        "penguins",
        "Penguins",
        "Native to Antarctica",
        "icons/meet-fish_icon.svg",
        "meet-fish_icon",
        ".container .cards"
    ).render();
});