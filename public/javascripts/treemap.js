var Treemap = (function () {

    // Konstruktor
    var Treemap = function (divId) {
        this.divId = divId;
        this.sample_data = [    //country Geographical Names
            { "value": 10, "country": "nausa", "name": "United States" },
            { "value": 15, "country": "aschn", "name": "China" },
            { "value": 2, "country": "euesp", "name": "Spain" },
            { "value": 3, "country": "sabra", "name": "Brazil" }
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
                "heatmap": ["blue", "yellow", "red"],
                "value": "value"
            })
            .mouse({                
                "move": false,                        // key will also take custom function
                "click": function(){alert("Click!")}   
              })       
            .draw()
        // finally, draw the visualization!
    }
    return Treemap;
})();