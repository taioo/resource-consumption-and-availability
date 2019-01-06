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

function processData(data) {
  var treeData = [];

  // var smallBrands = { name: "Other", children: [] };

  for (var country in data) {
    if (data[country]['year'] == 2014) {
      var countryData = { name: data[country]['Country Name'], children: [] };

      for (var kfigure in data[country]) {

        if (kfigure == "Built-up Land_FT" || kfigure == "Cropland_FT"
          || kfigure == "Forest Products_FT" || kfigure == "Carbon_FT"
          || kfigure == "Fishing Grounds_FT" || kfigure == "Grazing Land_FT") {
          var value = data[country][kfigure].toString().replace(',', '.')
          countryData.children.push({ name: kfigure, count: parseFloat(value).toFixed(2) })
        }
      }

      treeData.push(countryData)
    }
  }
  return treeData;
}

// create chart
var chart = container.createChild(am4charts.TreeMap);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
chart.width = am4core.percent(50);
chart.height = am4core.percent(50);
chart.align = "left";


chart.padding(0, 0, 0, 0);
chart.data = processData(data);
// only one level visible initially
chart.maxLevels = 1;
// define data fields
chart.dataFields.value = "count";
chart.dataFields.name = "name";
chart.dataFields.children = "children";
chart.homeText = "Ecological Footprint";

// enable navigation
chart.navigationBar = new am4charts.NavigationBar();

// level 0 series template
var level0SeriesTemplate = chart.seriesTemplates.create("0");
level0SeriesTemplate.strokeWidth = 2;
var bullet = level0SeriesTemplate.bullets.push(
  new am4charts.LabelBullet()
);
bullet.locationX = 0.5;
bullet.locationY = 0.5;
bullet.label.text = "{name}";
bullet.label.fill = am4core.color("#ffffff");
// level0SeriesTemplate.columns.template.fillOpacity = 0;


// by default only current level series bullets are visible, but as we need brand bullets to be visible all the time, we modify it's hidden state
// level0SeriesTemplate.bulletsContainer.hiddenState.properties.opacity = 1;
// level0SeriesTemplate.bulletsContainer.hiddenState.properties.visible = true;

// create hover state
var hoverState = level0SeriesTemplate.columns.template.states.create("hover");

// darken
hoverState.adapter.add("fill", (fill, target) => {
  return am4core.color(am4core.colors.brighten(fill.rgb, -0.2));
});

// level1 series template
var level1SeriesTemplate = chart.seriesTemplates.create("1");
var bullet1 = level1SeriesTemplate.bullets.push(
  new am4charts.LabelBullet()
);
bullet1.locationX = 0.5;
bullet1.locationY = 0.5;
bullet1.label.text = "{name}";
bullet1.label.fill = am4core.color("#ffffff");
level1SeriesTemplate.columns.template.fillOpacity = 0;

// level2 series template
// var level2SeriesTemplate = chart.seriesTemplates.create("2");
// var bullet2 = level2SeriesTemplate.bullets.push(
//   new am4charts.LabelBullet()
// );
// bullet2.locationX = 0.5;
// bullet2.locationY = 0.5;
// bullet2.label.text = "{name}";
// bullet2.label.fill = am4core.color("#ffffff");

/************************************************************************************ */

// am4core.useTheme(am4themes_animated);

// const formatter = new Intl.NumberFormat('en-US', {
//   minimumFractionDigits: 2
// })

function processBiocap(data) {
  var treeData = [];

  // var smallBrands = { name: "Other", children: [] };

  for (var country in data) {
    if (data[country]['year'] == 2014) {
      var countryData = { name: data[country]['Country Name'], children: [] };

      for (var kfigure in data[country]) {

        if (kfigure == "Built-up Land_BT" || kfigure == "Cropland_BT"
          || kfigure == "Forest Products_BT" || kfigure == "Carbon_BT"
          || kfigure == "Fishing Grounds_BT" || kfigure == "Grazing Land_BT") {
          var value = data[country][kfigure].toString().replace(',', '.')
          countryData.children.push({ name: kfigure, count: parseFloat(value).toFixed(2) })
        }
      }

      treeData.push(countryData)
    }
  }
  return treeData;
}

// create chart
var chart1 = container.createChild(am4charts.TreeMap);
chart1.hiddenState.properties.opacity = 0; // this makes initial fade in effect
chart1.align = "right";
chart1.width = am4core.percent(50);
chart1.height = am4core.percent(50);


chart1.data = processBiocap(data);
// only one level visible initially
chart1.maxLevels = 1;
// define data fields
chart1.dataFields.value = "count";
chart1.dataFields.name = "name";
chart1.dataFields.children = "children";
chart1.homeText = "Biocapacity";

// enable navigation
chart1.navigationBar = new am4charts.NavigationBar();

// level 0 series template
var level0SeriesTemplate = chart1.seriesTemplates.create("0");
level0SeriesTemplate.strokeWidth = 2;
var bullet = level0SeriesTemplate.bullets.push(
  new am4charts.LabelBullet()
);
bullet.locationX = 0.5;
bullet.locationY = 0.5;
bullet.label.text = "{name}";
bullet.label.fill = am4core.color("#ffffff");
// level0SeriesTemplate.columns.template.fillOpacity = 0;


// by default only current level series bullets are visible, but as we need brand bullets to be visible all the time, we modify it's hidden state
// level0SeriesTemplate.bulletsContainer.hiddenState.properties.opacity = 1;
// level0SeriesTemplate.bulletsContainer.hiddenState.properties.visible = true;

// create hover state
var hoverState = level0SeriesTemplate.columns.template.states.create("hover");

// darken
hoverState.adapter.add("fill", (fill, target) => {
  return am4core.color(am4core.colors.brighten(fill.rgb, -0.2));
});

// level1 series template
var level1SeriesTemplate = chart1.seriesTemplates.create("1");
var bullet1 = level1SeriesTemplate.bullets.push(
  new am4charts.LabelBullet()
);
bullet1.locationX = 0.5;
bullet1.locationY = 0.5;
bullet1.label.text = "{name}";
bullet1.label.fill = am4core.color("#ffffff");
level1SeriesTemplate.columns.template.fillOpacity = 0;

chart.events.on("hit", function (ev) {
  var zoom = chart.currentlyZoomed;
  console.log("clicked on ", chart.currentlyZoomed.name);
  
}, this);

chart1.events.on("hit", function (ev) {
  console.log("clicked on ", chart1.currentlyZoomed.name);
}, this);



var chart2= container.createChild(am4charts.XYChart);

chart2.height = am4core.percent(50);
chart2.valign = "bottom";
chart2.hiddenState.properties.opacity = 0; // this creates initial fade-in

var data = [];
var open = 100;
var close = 250;

for (var i = 1; i < 120; i++) {
  open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 4);
  close = Math.round(open + Math.random() * 5 + i / 5 - (Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
  data.push({ date: new Date(2018, 0, i), open: open, close: close });
}

chart2.data = data;

var dateAxis = chart2.xAxes.push(new am4charts.DateAxis());

var valueAxis = chart2.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;

var series = chart2.series.push(new am4charts.LineSeries());
series.dataFields.dateX = "date";
series.dataFields.openValueY = "open";
series.dataFields.valueY = "close";
series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
series.sequencedInterpolation = true;
series.fillOpacity = 0.3;
series.defaultState.transitionDuration = 1000;
series.tensionX = 0.8;

var series2 = chart2.series.push(new am4charts.LineSeries());
series2.dataFields.dateX = "date";
series2.dataFields.valueY = "open";
series2.sequencedInterpolation = true;
series2.defaultState.transitionDuration = 1500;
series2.stroke = chart2.colors.getIndex(6);
series2.tensionX = 0.8;

chart2.cursor = new am4charts.XYCursor();
chart2.cursor.xAxis = dateAxis;
chart2.scrollbarX = new am4core.Scrollbar();


chart2.legend = new am4charts.Legend();
chart2.legend.useDefaultMarker = true;
var marker = chart2.legend.markers.template.children.getIndex(0);
marker.cornerRadius(12, 12, 12, 12);
marker.strokeWidth = 2;
marker.strokeOpacity = 1;
marker.stroke = am4core.color("#ccc");