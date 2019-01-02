am4core.useTheme(am4themes_animated);

const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2
})

$.ajaxSetup({
  async: false
});

var data = []
$.getJSON("./data/dataFinal.json", function(json) {
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
  }}
  return treeData;
}

// create chart
var chart = am4core.create("chartdiv", am4charts.TreeMap);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

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
  }}
  return treeData;
}

// create chart
var chart1 = am4core.create("chartdiv1", am4charts.TreeMap);
chart1.hiddenState.properties.opacity = 0; // this makes initial fade in effect

chart1.padding(0, 0, 0, 0);
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