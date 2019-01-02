/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Create chart instance
var chart = am4core.create("twotreemap", am4charts.XYChart);

// Set up data source
chart.dataSource.url = "./data/data.json";

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Total";
series1.dataFields.categoryX = "year";
series1.name = "Total";
series1.strokeWidth = 3;
series1.tensionX = 0.7;
series1.bullets.push(new am4charts.CircleBullet());

// Add legend
chart.legend = new am4charts.Legend();