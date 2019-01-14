import { bioTreemap } from './charts.js'
import { ecoTreemap } from './charts.js'
import { timeDateAxis } from './charts.js'

am4core.useTheme(am4themes_animated);

var container = am4core.create("chartdiv", am4core.Container);
container.width = am4core.percent(100);
container.height = am4core.percent(100);

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

// crete chart
var chart2 = timeDateAxis(container, data);

// events
chart.events.on("hit", function (ev) {
  setTimeout(() => console.log("clicked on ", chart.currentlyZoomed.name), 500);
}, this);

chart1.events.on("hit", function (ev) {
  setTimeout(() => console.log("clicked on ", chart1.currentlyZoomed.name), 500);
}, this);



