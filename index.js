const data = [
    {
        buyer: "Colton Smith",
        description: "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
        image: "./images/image-colton.jpg",
    },
    {
        buyer: "Irene Roberts",
        description: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
        image: "./images/image-irene.jpg",
    },
    {
        buyer: "Anne Wallace",
        description: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
        image: "./images/image-anne.jpg",
    },
];

const ratesData = [
    "Rated 5 Stars in Reviews",
    "Rated 5 Stars in Report Guru",
    "Rated 5 Stars in BestTech",
];

const getRateHtml = () => {
    let rateHtml = "";
    ratesData.forEach(rate => {
        rateHtml += `
        <div class="rates">
            <div class="stars-wrapper">
                <img src="./images/icon-star.svg" alt="" />
                <img src="./images/icon-star.svg" alt="" />
                <img src="./images/icon-star.svg" alt="" />
                <img src="./images/icon-star.svg" alt="" />
                <img src="./images/icon-star.svg" alt="" />
            </div>
            <span class="rated__text">${rate}</span>
        </div>
        `
    });
    return rateHtml;
};

const getCardHtml = () => {
    let cardHtml = "";
    data.forEach(item => {
        cardHtml += `
        <div class="card">
            <div class="card__buyer-wrapper">
                <img class="card__image" src="${item.image}" alt="" />
                <span class="card__buyer">${item.buyer}</span>
                <span class="card__verified-buyer">Verified Buyer</span>
            </div>
            <p class="card__description">"${item.description}"</p>
        </div>
        `
    })
    return cardHtml;
};

const render = () => {
    document.getElementById("card-section").innerHTML = getCardHtml();
    document.getElementById("rates-wrapper").innerHTML = getRateHtml();
};

render();