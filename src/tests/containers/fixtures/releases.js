import moment from 'moment';

export default {
  min: {
    amazonUrl: 'https://www.amazon.com/Chuang-Tzu-Writings-Burton-Watson/dp/0231105959',
    fictionOrNonFiction: 'Non-fiction *',
    genre: '',
    subGenre: '',
    email: 'example@example.email',
    price: '111',
    promoType: '99 cents',
    startDate: null,
    endDate: null,
    website: '',
    keywords: '',
    releaseText: 'This is the text of a sample press release for testing purposes.'
  },
  max: {
    amazonUrl: 'https://www.amazon.com/Chuang-Tzu-Writings-Burton-Watson/dp/0231105959',
    fictionOrNonFiction: 'Fiction',
    genre: 'Romance',
    subGenre: 'Kink Life',
    email: 'example@example.email',
    price: '111',
    promoType: '99 cents',
    startDate: moment("20501228", "YYYYMMDD"),
    endDate: moment("20501231", "YYYYMMDD"),
    website: 'http://wisefoxpub.com/',
    keywords: 'wise, fox, publishing',
    releaseText: 'This is the text of a sample press release for testing purposes.'
  }
}