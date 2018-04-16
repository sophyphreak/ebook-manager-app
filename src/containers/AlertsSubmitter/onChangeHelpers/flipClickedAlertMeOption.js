const flipClickedAlertMeOption = ({ alertMe, option }) => {
  alertMe[option].isActive = !alertMe[option].isActive;
  return alertMe;
};

export default flipClickedAlertMeOption;
