Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population-density.json', function (data) {


    // Initialize the chart
    Highcharts.mapChart('container', {
        chart: {
            borderWidth: 1
        },

        title: {
            text: 'Legend padding and item margin'
        },

        mapNavigation: {
            enabled: true
        },

        legend: {
            title: {
                text: 'Individuals per km²'
            },
            align: 'left',
            verticalAlign: 'bottom',
            floating: true,
            labelFormatter: function () {
                return (this.from || '<') + ' - ' + (this.to || '>');
            },
            layout: 'vertical',
            valueDecimals: 0,
            backgroundColor: 'rgba(255,255,255,0.9)',
            padding: 12,
            itemMarginTop: 0,
            itemMarginBottom: 0,
            symbolRadius: 0,
            symbolHeight: 14,
            symbolWidth: 24
        },

        colorAxis: {
            dataClasses: [{
                to: 3,
                color: 'rgba(19,64,117,0.05)'
            }, {
                from: 3,
                to: 10,
                color: 'rgba(19,64,117,0.2)'
            }, {
                from: 10,
                to: 30,
                color: 'rgba(19,64,117,0.4)'
            }, {
                from: 30,
                to: 100,
                color: 'rgba(19,64,117,0.5)'
            }, {
                from: 100,
                to: 300,
                color: 'rgba(19,64,117,0.6)'
            }, {
                from: 300,
                to: 1000,
                color: 'rgba(19,64,117,0.8)'
            }, {
                from: 1000,
                color: 'rgba(19,64,117,1)'
            }]
        },

        series: [{
            data: data,
            mapData: Highcharts.maps['custom/world'],
            joinBy: ['iso-a2', 'code'],
            name: 'Population density',
            states: {
                hover: {
                    color: '#a4edba'
                }
            },
            tooltip: {
                valueSuffix: '/km²'
            }
        }]
    });
});