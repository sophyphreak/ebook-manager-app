import moment from 'moment';

export default {
  min: {
    amazonUrl: 'https://www.amazon.com/Chuang-Tzu-Writings-Burton-Watson/dp/0231105959',
    fictionOrNonFiction: 'Non-fiction *',
    genre: '',
    subGenre: '',
    email: 'example@example.email',
    regPrice: '111',
    salePrice: '',
    startDate: null,
    endDate: null,
    keywords: '',
    tweet: '',
    facebook: '',
    notes: ''
  },
  max: {
    amazonUrl: 'https://www.amazon.com/Chuang-Tzu-Writings-Burton-Watson/dp/0231105959',
    fictionOrNonFiction: 'Fiction',
    genre: 'Romance',
    subGenre: 'Kink Life',
    email: 'example@example.email',
    regPrice: '111',
    salePrice: '99',
    startDate: moment("20501228", "YYYYMMDD"),
    endDate: moment("20501231", "YYYYMMDD"),
    keywords: 'wise, fox, app',
    tweet: 'This is a short tweet',
    facebook: 'This is a short facebook post',
    notes: 'This is a short note.'
  }
}