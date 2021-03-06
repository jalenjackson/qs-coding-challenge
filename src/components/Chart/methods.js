export function getOption(props) {
    return {
        backgroundColor: '#1D1D1E',
        legend: {
            inactiveColor: '#777',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false,
                type: 'cross',
                lineStyle: {
                    color: '#35C59B',
                    width: 2,
                    opacity: 1
                }
            }
        },
        xAxis: {
            type: 'category',
            data: props.dates,
            axisLine: {lineStyle: {color: '#8392A5'}}
        },
        yAxis: {
            scale: true,
            axisLine: {lineStyle: {color: '#8392A5'}},
            splitLine: {show: false}
        },
        grid: {
            bottom: 80,
        },
        dataZoom: [{
            textStyle: {
                color: '#8392A5'
            },
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            dataBackground: {
                areaStyle: {
                    color: '#8392A5'
                },
                lineStyle: {
                    opacity: 0.8,
                    color: '#8392A5'
                }
            },
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }, {
            type: 'inside'
        }],
        animation: false,
        series: [
            {
                type: 'candlestick',
                name: 'Price Action',
                data: props.tickerData.chartData,
                itemStyle: {
                    color: '#FD1050',
                    color0: '#35C59B',
                    borderColor: '#FD1050',
                    borderColor0: '#35C59B'
                }
            }
        ]
    };
}

export function tryFetchingChartAgain(props) {
    props.updateChartState('chartDataExceeded', false);
    props.updateChartState('loadingChartData', true);

    setTimeout(() => {
        props.getChartData(props.ticker, '5min', false);
    }, 1200);
}

export function tryFetchingLatestPriceAgain(props) {
    props.updateChartState('loadingLatestPrice', true);
    props.updateChartState('latestPriceExceeded', false);
    props.updateChartState('latestPrice', {});

    setTimeout(() => {
        props.getLatestPrice(props.ticker);
    }, 1200);
}

export const getLoadingOption = () => {
    return {
        text: '',
        color: '#35C59B',
        textColor: 'white',
        maskColor: 'rgba(0,0,0, 0)',
        zlevel: 0
    };
};

export function changeInterval(props, interval) {
    props.getChartData(props.ticker, interval);
    props.updateChartState('interval', interval);
}