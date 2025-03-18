// array
const cards = [
    {
        title: 'DEEP EARTH',
        images_desk: 'images/desktop/image-deep-earth.jpg',
        images_mobile: 'images/mobile/image-deep-earth.jpg',
        alt: 'Deep earth'
    },
    {
        title: 'NIGHT ARCADE',
        images_desk: 'images/desktop/image-night-arcade.jpg',
        images_mobile: 'images/mobile/image-night-arcade.jpg',
        alt: 'Night arcade'
    },
    {
        title: 'SOCCER TEAM VR',
        images_desk: 'images/desktop/image-soccer-team.jpg',
        images_mobile: 'images/mobile/image-soccer-team.jpg',
        alt: 'Soccer team VR'
    },
    {
        title: 'THE GRID',
        images_desk: 'images/desktop/image-grid.jpg',
        images_mobile: 'images/mobile/image-grid.jpg',
        alt: 'The grid'
    },
    {
        title: 'FROM UP ABOVE VR',
        images_desk: 'images/desktop/image-from-above.jpg',
        images_mobile: 'images/mobile/image-froms-above.jpg',
        alt: 'From up above VR'
    },
    {
        title: 'POCKET BOREALIS',
        images_desk: 'images/desktop/image-pocket-borealis.jpg',
        images_mobile: 'images/mobile/image-pocket-borealis.jpg',
        alt: 'Pocket borealis'
    },
    {
        title: 'THE CURIOSITY',
        images_desk: 'images/desktop/image-curiosity.jpg',
        images_mobile: 'images/mobile/image-curiosity.jpg',
        alt: 'The curiosity'
    },
    {
        title: 'MAKE IT FISHEYE',
        images_desk: 'images/desktop/image-fisheye.jpg',
        images_mobile: 'images/mobile/image-fisheye.jpg',
        alt: 'Make it fisheye'
    }
];


const creationCards = () => {
    const creation = document.getElementById("creation_section");
    const htmlize = (card) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('c-cards__card', 'col-md-3', 'p-3', 'overflow-hidden');

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('c-cards__card', 'w-100', 'align-content-end', 'p-3');
        imgDiv.style.backgroundImage = `url('../${card.images_desk}')`;
        cardDiv.appendChild(imgDiv);

        const h3 = document.createElement('h3');
        h3.classList.add('f-h3');
        h3.textContent = card.title;
        imgDiv.appendChild(h3);

        return cardDiv.outerHTML;
    };
    const showCards = cards.map(htmlize).join('');
    creation.innerHTML = showCards;
}

const windowSensor = () => {
    // console.log(window.innerWidth);
    navEditor();
    creationControl();
};

const navEditor = () => {
    const screenW = window.innerWidth;
    const nav = document.getElementById("rwdNav")
    if(screenW < 1024){
        nav.innerHTML=`
        <img src="../images/icon-hamburger.svg" alt="ham">
        `;
    } else{
        nav.innerHTML=`
        <ul class="c-nav__ul p-3">
          <li class="c-nav__li">About</li>
          <li class="c-nav__li">Careers</li>
          <li class="c-nav__li">Events</li>
          <li class="c-nav__li">Products</li>
          <li class="c-nav__li">Support</li>
        </ul>
        `;
    }
}

const creationControl = () => {
    const screenW = window.innerWidth;
    const creationC = document.getElementById("creation-control");
    const mobileBtn = document.getElementById("mobile-btn")
    if(screenW < 1024){
        creationC.innerHTML=`
        <div class="row justify-content-between">
            <h2 class="col-md-5 f-h2">OUR CREATIONS</h2>
        </div>
        `;
        mobileBtn.innerHTML=`
        <div class="container p-5">
            <div class="row justify-content-center">
                <div class="col-8 text-end">
                    <button class="c-btn">SEE ALL</button>
                </div>
            </div>
        </div>
        `;
    } else{
        creationC.innerHTML=`
        <div class="row justify-content-between">
        <h2 class="col-md-5 f-h2">OUR CREATIONS</h2>
        <div class="col-2 text-end">
          <button class="c-btn">SEE ALL</button>
        </div>
      </div>
        `;

        mobileBtn.innerHTML=``;
    }
}

// detictor 
window.addEventListener('resize', windowSensor);
windowSensor();

creationCards();


