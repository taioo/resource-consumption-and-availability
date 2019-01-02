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

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartGaps", am4charts.XYChart);

// Add data
chart.dataSource.url = "./data/data.json";

// Create axes
var yearAxis = chart.xAxes.push(new am4charts.YearAxis());
yearAxis.startLocation = 1;
yearAxis.endLocation = 1;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "Total";
series.dataFields.yearX = "year";
series.strokeWidth = 3;
series.tooltipText = "{valueY.value}";
series.fillOpacity = 0.1;

// Add cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.xAxis = dateAxis;
chart.scrollbarX = new am4core.Scrollbar();