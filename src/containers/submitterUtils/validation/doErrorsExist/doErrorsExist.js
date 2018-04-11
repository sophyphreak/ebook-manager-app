import numberOfErrors from "./numberOfErrors";

const doErrorsExist = (error) => (
  numberOfErrors(error) > 0
);

export default doErrorsExist;