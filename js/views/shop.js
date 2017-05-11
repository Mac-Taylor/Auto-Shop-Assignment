

let View = require('ampersand-view');

module.exports = View.extend({
    template: document.querySelector('#shop-template').innerHTML,
    bindings: {
        'model.tires': '.tires',
        'model.paint': '.paint',
        'model.exhaust': '.exhaust',
        'model.horsepower': '.horsepower',
        'model.mpg': '.mpg',
        'model.totalcost': '.totalcost',
    }, // put this object in 
    events: {
        'click .mpgbutton': 'boostMPG',
        'click .tirebutton': 'repairTires'
    },
    boostMPG: function () {
        this.model.mpg = this.model.mpg + 5;
        this.model.horsepower = this.model.horsepower - 1;
    },
    repairTires: function () {
        console.log('Tires are fixed!');
    },
    render: function () {
        console.log('rendering');
        this.renderWithTemplate();
    },

})