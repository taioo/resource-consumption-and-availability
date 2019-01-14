import { processBiocap } from './data.js'
import { processData } from './data.js'
import { navbarTreemap } from './data.js'
import { textStyleTree } from './data.js'
import { processTimeAll } from './data.js'

export function bioTreemap(container, data) {
    var chart1 = container.createChild(am4charts.TreeMap);
    chart1.hiddenState.properties.opacity = 0;
    chart1.align = "right";
    chart1.width = am4core.percent(50);
    chart1.height = am4core.percent(50);
    chart1.data = processBiocap(data);
    chart1.maxLevels = 1;
    chart1.dataFields.value = "count";
    chart1.dataFields.name = "name";
    chart1.dataFields.children = "children";
    chart1.homeText = "Biocapacity";
    chart1.navigationBar = navbarTreemap(chart1);
    var level1SeriesTemplate = textStyleTree(chart1);

    return chart1;
}

export function ecoTreemap(container, data) {
    var chart = container.createChild(am4charts.TreeMap);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    chart.width = am4core.percent(50);
    chart.height = am4core.percent(50);
    chart.align = "left";
    chart.padding(0, 0, 0, 0);
    chart.data = processData(data);
    chart.maxLevels = 1;
    chart.dataFields.value = "count";
    chart.dataFields.name = "name";
    chart.dataFields.children = "children";
    chart.homeText = "Ecological Footprint";
    chart.navigationBar = navbarTreemap(chart);
    var level1SeriesTemplate = textStyleTree(chart);

    return chart;
}

export function timeDateAxis(container, data) {

    var chart2 = container.createChild(am4charts.XYChart);

    chart2.height = am4core.percent(50);
    chart2.valign = "bottom";
    chart2.hiddenState.properties.opacity = 0; // this creates initial fade-in
    chart2.data = processTimeAll(data)

    var dateAxis = chart2.xAxes.push(new am4charts.DateAxis());
    var valueAxis = chart2.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;


    var series = seriesChartOpen(chart2)

    var series2 = seriesChartClose(chart2)

    chart2.cursor = axisCursor(chart2, dateAxis);

    chart2.legend = chartLegend(chart2)

}

function seriesChartClose(chart2) {
    var series2 = chart2.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "open";
    series2.sequencedInterpolation = true;
    series2.defaultState.transitionDuration = 1500;
    series2.stroke = chart2.colors.getIndex(6);
    series2.tensionX = 0.8;
    return series2
}

function seriesChartOpen(chart2) {
    var series = chart2.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
    series.sequencedInterpolation = true;
    series.fillOpacity = 0.3;
    series.defaultState.transitionDuration = 1000;
    series.tensionX = 0.8;

    return series;
}

function axisCursor(chart2, dateAxis) {
    chart2.cursor = new am4charts.XYCursor();
    chart2.cursor.xAxis = dateAxis;
    chart2.scrollbarX = new am4core.Scrollbar();
    return chart2.cursor;
}

function chartLegend(chart2) {
    chart2.legend = new am4charts.Legend();
    chart2.legend.useDefaultMarker = true;
    var marker = chart2.legend.markers.template.children.getIndex(0);
    marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 2;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color("#ccc");
    return chart2.legend;
}