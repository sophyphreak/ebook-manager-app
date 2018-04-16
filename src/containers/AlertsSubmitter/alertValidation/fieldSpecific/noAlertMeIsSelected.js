const noAlertMeIsSelected = ({ onTheDate, oneWeekBefore, twoWeeksBefore }) =>
  !onTheDate.isActive && !oneWeekBefore.isActive && !twoWeeksBefore.isActive;

export default noAlertMeIsSelected;
