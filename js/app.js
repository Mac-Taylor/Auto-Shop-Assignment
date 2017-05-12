
window.addEventListener('load', function () {
    let ShopView = require('./views/shop');
    let ShopModel = require('./models/shop');

    let shop = new ShopModel();
    shop.tires = 2;
    shop.paint = 'Needs a fresh coat!';
    shop.exhaust = 'Broken'; //use a boolean here
    shop.horsepower = 120;
    shop.mpg = 33;
    shop.totalcost = 0;

    let view = new ShopView({
        el: document.querySelector('main'),
        model: shop,
    });
    view.render();
});