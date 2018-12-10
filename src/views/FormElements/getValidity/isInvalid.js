const isInvalid = (hasError, errorMessage) => {
  if (!hasError) {
    return false;
  }
  if (errorMessage) {
    return true;
  }
  return false;
};

export default isInvalid;
