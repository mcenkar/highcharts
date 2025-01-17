// Prepare demo data
const data = [
    {
        "hc-key": "au-nt",
        value: 0
    },
    {
        "hc-key": "au-wa",
        value: 1
    },
    {
        "hc-key": "au-ct",
        value: 2
    },
    {
        "hc-key": "au-sa",
        value: 3
    },
    {
        "hc-key": "au-ql",
        value: 4
    },
    {
        "hc-key": "au-2557",
        value: 5
    },
    {
        "hc-key": "au-ts",
        value: 6
    },
    {
        "hc-key": "au-jb",
        value: 7
    },
    {
        "hc-key": "au-ns",
        value: 8
    },
    {
        "hc-key": "au-vi",
        value: 9
    }
];

// Initialize the chart
Highcharts.mapChart('map-container', {
    title: {
        text: 'Highmaps basic demo'
    },
    subtitle: {
        text: 'Source map: <a href="https://code.highcharts.com/mapdata/countries/au/au-all.js">Australia</a>'
    },
    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    colorAxis: {
        min: 0
    },
    series: [{
        data: data,
        mapData: Highcharts.maps['countries/au/au-all'],
        joinBy: 'hc-key',
        name: 'Random data',
        states: {
            hover: {
                color: '#a4edba'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }, {
        // Specify the points here
        type: 'mappoint',
        colorAxis: false,
        name: 'Points',
        showInLegend: false,
        data: [{
            name: 'Point1',
            dataLabels: {
                y: 22,
                x: 15
            },
            x: 0,
            y: 4500
        }, {
            name: 'Point2',
            x: 2000,
            y: 88000
        }]
    }, {
        // Specify the lines here. The design of the arrowheads is defined in
        // SVG (see HTML). Which line gets which marker is set with CSS.
        type: 'mapline',
        colorAxis: false,
        name: 'Lines',
        color: 'black',
        data: [{
            name: 'line1',
            path: 'M 0 4500 L 2000 8000',
            lineWidth: 3
        }, {
            name: 'line2',
            path: 'M 2200 4200 L 0 4500',
            lineWidth: 1
        }]
    }]
});

// Add line chart
Highcharts.chart('line-container', {
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        id: 'Series1',
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0,
            135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        marker: {
            enabled: false
        }
    }]
}, chart => {
    chart.get('Series1').graph.addClass('highcharts-arrows');
});
