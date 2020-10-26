document.addEventListener('DOMContentLoaded', function () {
  const currencyWithCountryCodeAndFlag = [
    {
      countryCode: 'BG',
      currencyCode: 'BGN',
      countryName: 'Bulgaria',
    },
    {
      countryCode: 'BV',
      currencyCode: 'NOK',
      countryName: 'Bouvet Island',
    },
    {
      countryCode: 'BQ',
      currencyCode: 'USD',
      countryName: 'Bonaire, Sint Eustatius and Saba',
    },
    {
      countryCode: 'BR',
      currencyCode: 'BRL',
      countryName: 'Brazil',
    },
    {
      countryCode: 'JE',
      currencyCode: 'GBP',
      countryName: 'Jersey',
    },
    {
      countryCode: 'RU',
      currencyCode: 'RUB',
      countryName: 'Russian Federation',
    },
    {
      countryCode: 'TL',
      currencyCode: 'USD',
      countryName: 'Timor-Leste',
    },
    {
      countryCode: 'RO',
      currencyCode: 'RON',
      countryName: 'Romania',
    },
    {
      countryCode: 'TK',
      currencyCode: 'NZD',
      countryName: 'Tokelau',
    },
    {
      countryCode: 'GU',
      currencyCode: 'USD',
      countryName: 'Guam',
    },
    {
      countryCode: 'GS',
      currencyCode: 'GBP',
      countryName: 'South Georgia and the South Sandwich Islands',
    },
    {
      countryCode: 'JP',
      currencyCode: 'JPY',
      countryName: 'Japan',
    },
    {
      countryCode: 'GG',
      currencyCode: 'GBP',
      countryName: 'Guernsey',
    },
    {
      countryCode: 'GB',
      currencyCode: 'GBP',
      countryName: 'United Kingdom',
    },
    {
      countryCode: 'SV',
      currencyCode: 'USD',
      countryName: 'El Salvador',
    },
    {
      countryCode: 'GL',
      currencyCode: 'DKK',
      countryName: 'Greenland',
    },
    {
      countryCode: 'HR',
      currencyCode: 'HRK',
      countryName: 'Croatia',
    },
    {
      countryCode: 'HU',
      currencyCode: 'HUF',
      countryName: 'Hungary',
    },
    {
      countryCode: 'HK',
      currencyCode: 'HKD',
      countryName: 'Hong Kong',
    },
    {
      countryCode: 'HM',
      currencyCode: 'AUD',
      countryName: 'Heard and McDonald Islands',
    },
    {
      countryCode: 'PR',
      currencyCode: 'USD',
      countryName: 'Puerto Rico',
    },
    {
      countryCode: 'PS',
      currencyCode: 'ILS',
      countryName: 'Palestine',
    },
    {
      countryCode: 'PW',
      currencyCode: 'USD',
      countryName: 'Palau',
    },
    {
      countryCode: 'SJ',
      currencyCode: 'NOK',
      countryName: 'Svalbard And Jan Mayen',
    },
    {
      countryCode: 'PH',
      currencyCode: 'PHP',
      countryName: 'Philippines',
    },
    {
      countryCode: 'PN',
      currencyCode: 'NZD',
      countryName: 'Pitcairn',
    },
    {
      countryCode: 'PL',
      currencyCode: 'PLN',
      countryName: 'Poland',
    },
    {
      countryCode: 'ZA',
      currencyCode: 'ZAR',
      countryName: 'South Africa',
    },
    {
      countryCode: 'EC',
      currencyCode: 'USD',
      countryName: 'Ecuador',
    },
    {
      countryCode: 'MH',
      currencyCode: 'USD',
      countryName: 'Marshall Islands',
    },
    {
      countryCode: 'MP',
      currencyCode: 'USD',
      countryName: 'Northern Mariana Islands',
    },
    {
      countryCode: 'IM',
      currencyCode: 'GBP',
      countryName: 'Isle of Man',
    },
    {
      countryCode: 'MY',
      currencyCode: 'MYR',
      countryName: 'Malaysia',
    },
    {
      countryCode: 'MX',
      currencyCode: 'MXN',
      countryName: 'Mexico',
    },
    {
      countryCode: 'IL',
      currencyCode: 'ILS',
      countryName: 'Israel',
    },
    {
      countryCode: 'IO',
      currencyCode: 'USD',
      countryName: 'British Indian Ocean Territory',
    },
    {
      countryCode: 'FM',
      currencyCode: 'USD',
      countryName: 'Micronesia',
    },
    {
      countryCode: 'FO',
      currencyCode: 'DKK',
      countryName: 'Faroe Islands',
    },
    {
      countryCode: 'NO',
      currencyCode: 'NOK',
      countryName: 'Norway',
    },
    {
      countryCode: 'NF',
      currencyCode: 'AUD',
      countryName: 'Norfolk Island',
    },
    {
      countryCode: 'NZ',
      currencyCode: 'NZD',
      countryName: 'New Zealand',
    },
    {
      countryCode: 'NR',
      currencyCode: 'AUD',
      countryName: 'Nauru',
    },
    {
      countryCode: 'NU',
      currencyCode: 'NZD',
      countryName: 'Niue',
    },
    {
      countryCode: 'CK',
      currencyCode: 'NZD',
      countryName: 'Cook Islands',
    },
    {
      countryCode: 'CH',
      currencyCode: 'CHF',
      countryName: 'Switzerland',
    },
    {
      countryCode: 'CN',
      currencyCode: 'CNY',
      countryName: 'China',
    },
    {
      countryCode: 'CC',
      currencyCode: 'AUD',
      countryName: 'Cocos (Keeling) Islands',
    },
    {
      countryCode: 'CA',
      currencyCode: 'CAD',
      countryName: 'Canada',
    },
    {
      countryCode: 'CZ',
      currencyCode: 'CZK',
      countryName: 'Czech Republic',
    },
    {
      countryCode: 'CX',
      currencyCode: 'AUD',
      countryName: 'Christmas Island',
    },
    {
      countryCode: 'KI',
      currencyCode: 'AUD',
      countryName: 'Kiribati',
    },
    {
      countryCode: 'KR',
      currencyCode: 'KRW',
      countryName: 'Korea',
    },
    {
      countryCode: 'SG',
      currencyCode: 'SGD',
      countryName: 'Singapore',
    },
    {
      countryCode: 'SE',
      currencyCode: 'SEK',
      countryName: 'Sweden',
    },
    {
      countryCode: 'DK',
      currencyCode: 'DKK',
      countryName: 'Denmark',
    },
    {
      countryCode: 'VG',
      currencyCode: 'USD',
      countryName: 'Virgin Islands, British',
    },
    {
      countryCode: 'US',
      currencyCode: 'USD',
      countryName: 'United States of America',
    },
    {
      countryCode: 'UM',
      currencyCode: 'USD',
      countryName: 'United States Minor Outlying Islands',
    },
    {
      countryCode: 'TV',
      currencyCode: 'AUD',
      countryName: 'Tuvalu',
    },
    {
      countryCode: 'TR',
      currencyCode: 'TRY',
      countryName: 'Turkey',
    },
    {
      countryCode: 'LI',
      currencyCode: 'CHF',
      countryName: 'Liechtenstein',
    },
    {
      countryCode: 'TH',
      currencyCode: 'THB',
      countryName: 'Thailand',
    },
    {
      countryCode: 'TC',
      currencyCode: 'USD',
      countryName: 'Turks and Caicos Islands',
    },
    {
      countryCode: 'VI',
      currencyCode: 'USD',
      countryName: 'Virgin Islands, U.S',
    },
    {
      countryCode: 'AS',
      currencyCode: 'USD',
      countryName: 'American Samoa',
    },
    {
      countryCode: 'AU',
      currencyCode: 'AUD',
      countryName: 'Australia',
    },
    {
      countryCode: 'IN',
      currencyCode: 'INR',
      countryName: 'India',
    },
    {
      countryCode: 'ID',
      currencyCode: 'IDR',
      countryName: 'Indonesia',
    },
  ];

  const countrySelectOne = document.getElementById('currency-list-one');
  const countrySelectTwo = document.getElementById('currency-list-two');

  currencyWithCountryCodeAndFlag.sort((a, b) => {
    if (a.countryName > b.countryName) {
      return 1;
    } else {
      return -1;
    }
  });

  for (let i = 0; i < currencyWithCountryCodeAndFlag.length; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', currencyWithCountryCodeAndFlag[i].countryCode);
    option.innerHTML =
      currencyWithCountryCodeAndFlag[i].currencyCode +
      ' - ' +
      currencyWithCountryCodeAndFlag[i].countryName;

    if (currencyWithCountryCodeAndFlag[i].countryCode === 'US') {
      option.selected = true;
    }

    countrySelectOne.appendChild(option);
    let optionTwo = document.createElement('option');
    optionTwo.setAttribute(
      'value',
      currencyWithCountryCodeAndFlag[i].countryCode
    );

    optionTwo.innerText =
      currencyWithCountryCodeAndFlag[i].currencyCode +
      ' - ' +
      currencyWithCountryCodeAndFlag[i].countryName;

    if (currencyWithCountryCodeAndFlag[i].countryCode === 'GB') {
      optionTwo.selected = true;
    }

    countrySelectTwo.appendChild(optionTwo);
  }

  const currencyListOne = document.getElementById('currency-list-one');
  const amountOne = document.getElementById('amount-one');
  const currencyListTwo = document.getElementById('currency-list-two');
  const amountTwo = document.getElementById('amount-two');

  const rateElem = document.getElementById('rate');
  const swap = document.getElementById('swap');

  currencyListOne.addEventListener('change', () => {
    calculate();
    getFlag();
  });

  amountOne.addEventListener('input', calculate);

  currencyListTwo.addEventListener('change', () => {
    calculate();
    getFlag();
  });

  amountTwo.addEventListener('input', calculate);

  calculate();

  function calculate() {
    let currency_one =
      currencyListOne.options[currencyListOne.selectedIndex].text;
    let currency_two =
      currencyListTwo.options[currencyListTwo.selectedIndex].text;

    currency_one = currency_one.slice(0, 3);
    currency_two = currency_two.slice(0, 3);

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then((res) => res.json())
      .then((data) => {
        const rate = data.rates[currency_two];
        rateElem.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

        amountTwo.value = (amountOne.value * rate).toFixed(2);
      });
  }

  function getFlag() {
    const flagOne = document.getElementById('flagOne');
    let countrySelectOneValue = countrySelectOne.value;
    flagOne.src = `https://www.countryflags.io/${countrySelectOneValue}/shiny/64.png`;

    const flagTwo = document.getElementById('flagTwo');
    let countrySelectTwoValue = countrySelectTwo.value;
    flagTwo.src = `https://www.countryflags.io/${countrySelectTwoValue}/shiny/64.png`;
  }

  swap.addEventListener('click', () => {
    const tempVar = currencyListOne.value;
    currencyListOne.value = currencyListTwo.value;
    currencyListTwo.value = tempVar;
    calculate();
    getFlag();
  });
});
