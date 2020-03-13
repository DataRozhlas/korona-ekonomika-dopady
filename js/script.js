import "./byeie"; // loučíme se s IE
import {posilujiData} from "./posiluji.js";
import {vixData} from "./vix.js";
import {zlatoData} from "./zlato.js";
import {stoxxData} from "./stoxx.js";
import {ftseData} from "./ftse.js";
import {cezData} from "./cez.js";
import {spData} from "./sp.js";

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
    ],
    rangeSelectorFrom: 'od',
    rangeSelectorTo: 'do',
    rangeSelectorZoom: 'Období'
  }
});

Highcharts.stockChart('stoxx', {
  series: stoxxData,
  credits: {
    text: 'Zdroj dat: Alpha Vantage',
    href: 'https://www.alphavantage.co/'
  },
  rangeSelector: {
    inputDateFormat: '%e.%m.%Y',
    inputEnabled: false,
    selected: 0,
    buttons: [{
      type: 'month',
      count: 3,
      text: 'kvartál'
    }, {
      type: 'year',
      count: 1,
      text: 'rok'
    }, {
      type: 'all',
      count: 6,
      text: 'vše'
    }]
  },
  colors: ['#e41a1c'],
  title: {
    text: 'Panevropský akciový index STOXX 600'
  },
  tooltip: {
    dateTimeLabelFormats: {
      day: '%A %e. %B %Y'
    }
  }
});

Highcharts.stockChart('ftse', {
  series: ftseData,
  credits: {
    text: 'Zdroj dat: Alpha Vantage',
    href: 'https://www.alphavantage.co/'
  },
  rangeSelector: {
    inputDateFormat: '%e.%m.%Y',
    inputEnabled: false,
    selected: 0,
    buttons: [{
      type: 'month',
      count: 3,
      text: 'kvartál'
    }, {
      type: 'year',
      count: 1,
      text: 'rok'
    }, {
      type: 'all',
      count: 6,
      text: 'vše'
    }]
  },
  colors: ['#377eb8'],
  title: {
    text: 'FTSE 100 – Londýnská burza '
  },
  tooltip: {
    dateTimeLabelFormats: {
      day: '%A %e. %B %Y'
    }
  }
});

Highcharts.stockChart('cez', {
  series: cezData,
  credits: {
    text: 'Zdroj dat: Alpha Vantage',
    href: 'https://www.alphavantage.co/'
  },
  rangeSelector: {
    inputDateFormat: '%e.%m.%Y',
    inputEnabled: false,
    selected: 0,
    buttons: [{
      type: 'month',
      count: 3,
      text: 'kvartál'
    }, {
      type: 'year',
      count: 1,
      text: 'rok'
    }, {
      type: 'all',
      count: 6,
      text: 'vše'
    }]
  },
  colors: ['#984ea3'],
  title: {
    text: 'ČEZ, a.s.'
  },
  tooltip: {
    dateTimeLabelFormats: {
      day: '%A %e. %B %Y'
    }
  }
});

Highcharts.stockChart('sp', {
  series: spData,
  credits: {
    text: 'Zdroj dat: Alpha Vantage',
    href: 'https://www.alphavantage.co/'
  },
  rangeSelector: {
    inputDateFormat: '%e.%m.%Y',
    inputEnabled: false,
    selected: 0,
    buttons: [{
      type: 'month',
      count: 3,
      text: 'kvartál'
    }, {
      type: 'year',
      count: 1,
      text: 'rok'
    }, {
      type: 'all',
      count: 6,
      text: 'vše'
    }]
  },
  colors: ['#4daf4a'],
  title: {
    text: 'Americký akciový index S&P 500'
  },
  tooltip: {
    dateTimeLabelFormats: {
      day: '%A %e. %B %Y'
    }
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
  title: {
    text: 'Campbell Soup Company, Netflix, Clorox, Kroger'
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change} %)<br/>',
    valueDecimals: 2,
    split: true,
    dateTimeLabelFormats: {
      day: '%A %e. %B %Y'
    }
  },
  colors: ['#e41a1c','#377eb8','#4daf4a','#984ea3'],
  series: posilujiData
});

Highcharts.stockChart('vix', {
  series: vixData,
  credits: {
    text: 'Zdroj dat: Alpha Vantage',
    href: 'https://www.alphavantage.co/'
  },
  rangeSelector: {
    inputDateFormat: '%e.%m.%Y',
    inputEnabled: false,
    selected: 0,
    buttons: [{
      type: 'month',
      count: 3,
      text: 'kvartál'
    }, {
      type: 'year',
      count: 1,
      text: 'rok'
    }, {
      type: 'all',
      count: 6,
      text: 'vše'
    }]
  },
  colors: ['#a65628'],
  title: {
    text: 'VIX - index volatility'
  },
  tooltip: {
    dateTimeLabelFormats: {
      day: '%A %e. %B %Y'
    }
  }
});

Highcharts.stockChart('zlato', {
  series: zlatoData,
  credits: {
    text: 'Zdroj dat: Alpha Vantage',
    href: 'https://www.alphavantage.co/'
  },
  rangeSelector: {
    inputDateFormat: '%e.%m.%Y',
    inputEnabled: false,
    selected: 2,
    buttons: [{
      type: 'month',
      count: 3,
      text: 'kvartál'
    }, {
      type: 'year',
      count: 1,
      text: 'rok'
    }, {
      type: 'all',
      count: 6,
      text: 'vše'
    }]
  },
  colors: ['#ff7f00'],
  title: {
    text: 'Zlato'
  },
  tooltip: {
    dateTimeLabelFormats: {
      day: '%A %e. %B %Y'
    }
  }
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
