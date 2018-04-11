const numberOfErrors = (error) => (
  Object.keys(error).filter((key) => (!!error[key])).length
);

export default numberOfErrors;