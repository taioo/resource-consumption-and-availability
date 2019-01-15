
export function processData(data) {
    var treeData = [];

    // var smallBrands = { name: "Other", children: [] };

    for (var country in data) {
        if (data[country]['year'] == 2014) {
            var countryData = { name: data[country]['Country Name'] ,color: "#DC143C" , children: [] };

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
            var countryData = { name: data[country]['Country Name'],color: "#228B22", children: [] };

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
export function showCountryBiocap(data , country) {
    country ='China'
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
export function processTimeAll(data, country) {

    var dataAxsis = [];
    var up = 0;
    var down = 0;
    var date = new Date(0, 0, 0);


    var countryData = data.filter(function (element) {
        return element['Country Name'] == country;
    });

    if (countryData.length > 0) {

        countryData.forEach(function (found) {
            var year = found['year']+1;
            date = new Date(year, 0, 0);
            up = Number(found['Forest Products_BT'])
                + Number(found['Grazing Land_BT'])
                + Number(found['Cropland_BT'])
                + Number(found['Fishing Grounds_BT'])
                + Number(found['Built-up Land_BT'])
            down = Number(found['Built-up Land_FT'])
                + Number(found['Carbon_FT'])
                + Number(found['Cropland_FT'])
                + Number(found['Forest Products_FT'])
                + Number(found['Grazing Land_FT'])
            console.log(found)
            console.log(date)
            console.log(up)
            console.log(down)
            dataAxsis.push({ date: date, open: up, close: down });
        });
    } else {

        //data = _.orderBy(data, ['year'], ['asc']);
        
        // [...years.keys()].forEach(year => {
        //     data.forEach(function (found) {
        //         var year = found['year'];
        //         if (year) {
        //             date = new Date(year, 0, 0);
        //             up = Number(found['Forest Products_BT'])
        //                 + Number(found['Grazing Land_BT'])
        //                 + Number(found['Cropland_BT'])
        //                 + Number(found['Fishing Grounds_BT'])
        //                 + Number(found['Built-up Land_BT'])
        //             down = Number(found['Built-up Land_FT'])
        //                 + Number(found['Carbon_FT'])
        //                 + Number(found['Cropland_FT'])
        //                 + Number(found['Forest Products_FT'])
        //                 + Number(found['Grazing Land_FT'])
        //             console.log(found)
        //             console.log(date)
        //             console.log(up)
        //             console.log(down)
        //         }
                
        //            dataAxsis.push({ date: date, open: up, close: down });
        //     });
        // });

    }



    return dataAxsis;
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