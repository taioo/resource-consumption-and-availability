import { bioTreemap } from './charts.js'
import { ecoTreemap } from './charts.js'
import { timeDateAxis } from './charts.js'
import { bioCountryTreemap } from './charts.js'
import { processData, processBiocap } from './data.js'
import { navbarTreemap } from './data.js'
import { textStyleTree } from './data.js'
import { processTimeAll } from './data.js'

am4core.useTheme(am4themes_animated);

var container = am4core.create("chartdiv", am4core.Container);
container.width = am4core.percent(100);
container.height = am4core.percent(100);
container.background.fill = am4core.color("#c8f1ea");
container.background.fillOpacity = 0.3;

const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2
})

$.ajaxSetup({
  async: false
});

var data = []
$.getJSON("./data/dataFinal.json", function (json) {
  data = json;
});
console.log(data)


// create chart
var chart = ecoTreemap(container, data)

// create chart
var chart1 = bioTreemap(container, data);
var chart2 = timeDateAxis(container, data, 'Ecological Footprint');
var chartCountry = bioCountryTreemap(container);
chartCountry.hide();
// crete chart

// events
chart.events.on("hit", function (ev) {

  setTimeout(() => {
    console.log("clicked on ", chart.currentlyZoomed.name);
    // chart2 = timeDateAxis(container, data, chart.currentlyZoomed.name);


    //change char data after event 
    chart2.data = processTimeAll(data, chart.currentlyZoomed.name);
    chartCountry.hide();
    if (chart.currentlyZoomed.name == 'Ecological Footprint') {
      chart1.show();
      chartCountry.hide();
    } else {

      chartCountry.data = processBiocap(data, chart.currentlyZoomed.name);




      // chartCountry.data = [{
      //   "name": "First",
      //   "value": 190
      // }, {
      //   "name": "Second",
      //   "value": 289
      // }, {
      //   "name": "Third",
      //   "value": 635
      // }, {
      //   "name": "Fourth",
      //   "value": 732
      // }, {
      //   "name": "Fifth",
      //   "value": 835
      // }];



      chartCountry.show();
      chart1.hide();

    }

  }, 500);

}, this);

chart1.events.on("hit", function (ev) {
  setTimeout(() => console.log("clicked on ", chart1.currentlyZoomed.name), 500);
}, this);



