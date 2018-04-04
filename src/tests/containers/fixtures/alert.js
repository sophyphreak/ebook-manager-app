import moment from 'moment';

export default {
  amazonUrl: 'https://www.amazon.com/Chuang-Tzu-Writings-Burton-Watson/dp/0231105959',
  alertMe: {
    onTheDate: {
      text: 'On the Date',
      isActive: true
    },
    oneWeekBefore: {
      text: 'One week before',
      isActive: false
    },
    twoWeeksBefore: {
      text: 'Two weeks before',
      isActive: true
    }
  },
  date: moment("20501228", "YYYYMMDD"),
  notes: 'These are some notes.',
  email: 'example@example.email'
};