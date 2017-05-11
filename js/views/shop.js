

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
        'click .tirebutton': 'repairTires',
        'click .redpaintbutton': 'changeColor',
        'click .redpaintbutton': 'changeColor',
        'click .redpaintbutton': 'changeColor',
        'click .redpaintbutton': 'changeColor',
    },

    boostMPG: function () {
        this.model.mpg = this.model.mpg + 5;
        this.model.horsepower = this.model.horsepower - 1;
        this.model.totalcost = this.model.totalcost + 100;
    },

    repairTires: function () {
        console.log('Tires are fixed!');
        // you can have up to four tires, 
        if (this.model.tires < 4) {
            this.model.totalcost = this.model.totalcost + 200;
            this.model.tires++;
        }
 },
    // write a changecolor function for each button/color
    changeColor: function () {
        // if (not if statement, just English) you hit (color) button change it to that color
    },

    render: function () {
        console.log('rendering');
        this.renderWithTemplate();
    },

})