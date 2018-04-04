import moment from 'moment';

export default {
  max: {
    amazonUrl: 'https://www.amazon.com/Chuang-Tzu-Writings-Burton-Watson/dp/0231105959',
    alertMe: {
      onTheDate: {
        text: 'On the date',
        isActive: true
      },
      oneWeekBefore: {
        text: 'One week before',
        isActive: true
      },
      twoWeeksBefore: {
        text: 'Two weeks before',
        isActive: true
      }
    },
    date: moment("20501228", "YYYYMMDD"),
    notes: 'These are some notes.',
    email: 'example@example.email',
    email2: 'secondexample@example.email'
  },
  min: {
    amazonUrl: '',
    alertMe: {
      onTheDate: {
        text: 'On the Date',
        isActive: false
      },
      oneWeekBefore: {
        text: 'One week before',
        isActive: true
      },
      twoWeeksBefore: {
        text: 'Two weeks before',
        isActive: false
      }
    },
    notes: 'Min notes.',
    date: moment("20501228", "YYYYMMDD"),
    email: 'example@example.email'    
  }
}