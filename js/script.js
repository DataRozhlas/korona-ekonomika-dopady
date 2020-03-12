import "./byeie"; // loučíme se s IE
import {posilujiData} from "./posiluji.js";
import {vixData} from "./vix.js";

Highcharts.setOptions({
  lang: {
      months: [
          'leden', 'únor', 'březen', 'duben',
          'květen', 'červen', 'červenec', 'srpen',
          'září', 'říjen', 'listopad', 'prosinec'
      ],
      shortMonths: ['led', 'úno', 'bře', 'dub', 'kvě', 'črv', 'črc', 'srp', 'zář', 'říj', 'lis', 'pro'],
      weekdays: [
          'neděle', 'pondělí', 'úterý', 'středa',
          'čtvrtek', 'pátek', 'sobota'
      ]
  }
});


Highcharts.stockChart('posiluji', {
  credits: {
    text: 'Zdroj dat: Alpha Vantage',
    href: 'https://www.alphavantage.co/'
  },

  navigator: {
    enabled: false
  },
  scrollbar: {
    enabled: false
  },
  rangeSelector: {
    enabled: false,
  },
  
  yAxis: {
    labels: {
      formatter: function () {
        return (this.value > 0 ? ' + ' : '') + this.value + ' %';
      }
    },
    plotLines: [{
      value: 0,
      width: 2,
      color: 'silver'
    }]
  },
  
  plotOptions: {
    series: {
      compare: 'percent',
      showInNavigator: true
    }
  },
  
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change} %)<br/>',
    valueDecimals: 2,
    split: true,
    dateTimeLabelFormats: {
      day: '%A, %e. %B %Y'
    }
  },
  
  series: posilujiData
});


Highcharts.stockChart('vix', {
  credits: {
    text: 'Zdroj dat: Alpha Vantage',
    href: 'https://www.alphavantage.co/'
  },

  navigator: {
    enabled: false
  },
  scrollbar: {
    enabled: false
  },
  rangeSelector: {
    enabled: false,
  },
  
  yAxis: {
    labels: {
      formatter: function () {
        return (this.value > 0 ? ' + ' : '') + this.value + ' %';
      }
    },
    plotLines: [{
      value: 0,
      width: 2,
      color: 'silver'
    }]
  },
  
  plotOptions: {
    series: {
      compare: 'percent',
      showInNavigator: true
    }
  },
  
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change} %)<br/>',
    valueDecimals: 2,
    split: true,
    dateTimeLabelFormats: {
      day: '%A, %e. %B %Y'
    }
  },
  
  series: vixData
});


// As we're loading the data asynchronously, we don't know what order it



/*
// snadné načtení souboru pro každého!
fetch("https://blabla.cz/blabla.json")
.then(response => response.json()) // nebo .text(), když to není json
.then(data => {
  // tady jde provést s daty cokoliv
});
*/
