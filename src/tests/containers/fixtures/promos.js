import moment from 'moment';

export default {
  min: {
    amazonUrl: 'https://www.amazon.com/Chuang-Tzu-Writings-Burton-Watson/dp/0231105959',
    nonFictionOrFiction: 'Non-fiction *',
    genre: '',
    subGenre: '',
    email: 'example@example.email',
    price: '111',
    promoType: '99 cents',
    startDate: moment("20501228", "YYYYMMDD"),
    endDate: moment("20501231", "YYYYMMDD"),
    description: 'Sample description.',
    authorBio: 'Sample author biography.'
  },
  max: {
    amazonUrl: 'https://www.amazon.com/Chuang-Tzu-Writings-Burton-Watson/dp/0231105959',
    nonFictionOrFiction: 'Fiction',
    genre: 'Romance',
    subGenre: 'Kink Life',
    email: 'example@example.email',
    price: '111',
    promoType: '99 cents',
    startDate: moment("20501228", "YYYYMMDD"),
    endDate: moment("20501231", "YYYYMMDD"),
    description: 'Sample description.',
    authorBio: 'Sample author biography.'
  }
}