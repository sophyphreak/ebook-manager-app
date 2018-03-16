const request = require('request'); // request is only back end-compatible
const cheerio = require('cheerio');

const asin = 'B0018E5GMY'
const url = 'https://www.amazon.com/exec/obidos/ASIN' + asin;
request(url, (err, res, html) => {
  if (!err && res.statusCode == 200) {
    const $ = cheerio.load(html);
    $('span.a-color-price', 'span.a-color-base').each(function (i, element) {
      const el = $(this);
      const SalesRankingInfo = el.text();
      console.log('BOOK PRICE:', SalesRankingInfo);
    });
    $('li#SalesRank').each(function(i, element) {
      const el = $(this);
      const SalesRankingInfo = el.text();
      console.log('SALES RANK INFO:', SalesRankingInfo);
    });
  };
});