var Geomap = (function () {

    // Konstruktor
    var Geomap = function (divId) {
        this.divId = divId;
        this.sample_data = [
            { "value": 10, "country": "nausa", "name": "United States" },
            { "value": 15, "country": "aschn", "name": "China" },
            { "value": 2, "country": "euesp", "name": "Spain" },
            { "value": 3, "country": "sabra", "name": "Brazil" }
        ];
    };

    // render
    Geomap.prototype.render = function () {
        visualization = d3plus.viz()
            .container("#" + this.divId)        // container DIV to hold the visualization
            .data(this.sample_data)        // data to use with the visualization
            .coords("http://d3plus.org/topojson/countries.json") // pass topojson coordinates
            .type("geo_map")          // visualization type
            .id("country")            // key for which our data is unique on
            .text("name")             // key to use for display text
            .color({
                "heatmap": ["blue", "yellow", "red"],
                "value": "value"
            })
            .mouse({                
                "move": false,                        // key will also take custom function
                "click": function(){alert("Click!")}   
              })       
            .tooltip("value")         // keys to place in tooltip
            .draw();
        // finally, draw the visualization!
    }
    return Geomap;
})();
