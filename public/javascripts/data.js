export function processData(data) {
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
export function processBiocap(data) {
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
export function processTimeAll(data) {
    var data = [];
    var open = -100;
    var close = 100;

    for (var i = 1; i < 120; i++) {
        open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 4);
        close = Math.round(open + Math.random() * 5 + i / 5 - (Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
        data.push({ date: new Date(2018, 0, i), open: open, close: close });
    }

    return data;
}

export function navbarTreemap(chart) {

    var bar = new am4charts.NavigationBar();

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


    var hoverState = level0SeriesTemplate.columns.template.states.create("hover");

    // darken
    hoverState.adapter.add("fill", (fill, target) => {
        return am4core.color(am4core.colors.brighten(fill.rgb, -0.2));
    });

    return bar;
}

export function textStyleTree(chart) {
    var level1SeriesTemplate = chart.seriesTemplates.create("1");
    var bullet1 = level1SeriesTemplate.bullets.push(
        new am4charts.LabelBullet()
    );
    bullet1.locationX = 0.5;
    bullet1.locationY = 0.5;
    bullet1.label.text = "{name}";
    bullet1.label.fill = am4core.color("#ffffff");
    level1SeriesTemplate.columns.template.fillOpacity = 0;
    return level1SeriesTemplate;
}