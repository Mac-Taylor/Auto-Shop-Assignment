


let State = require('ampersand-state');


//representing a single vehicle at our shop
module.exports = State.extend({

    props: {
        tires: 'number',
        paint: 'string',
        exhaust: 'boolean',
        horsepower: 'number',
        mpg: 'number',
        totalcost: 'number',
    },

});