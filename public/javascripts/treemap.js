var Treemap = (function () {

    // Konstruktor
    var Treemap = function (divId) {
        this.divId = divId;
        this.sample_data = [
            { "value": 100, "name": "alpha", "growth": .9 },
            { "value": 70, "name": "beta", "growth": .4 },
            { "value": 40, "name": "gamma", "growth": -.3 },
            { "value": 15, "name": "delta", "growth": -.65 },
            { "value": 5, "name": "epsilon", "growth": .7 },
            { "value": 1, "name": "zeta", "growth": .2 }
        ];
    };

    // render
    Treemap.prototype.render = function () {
        var visualization = d3plus.viz()
            .container("#" + this.divId)
            .data(this.sample_data)
            .type("tree_map")
            .id("name")
            .size("value")
            .color({
                "range": ["white", "yellow", "red"],
                "value": "growth"
            })
            .draw()
        // finally, draw the visualization!
    }
    return Treemap;
})();