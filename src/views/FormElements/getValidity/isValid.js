const isValid = (hasError, errorMessage) => {
  if (!hasError) {
    return false;
  }
  if (errorMessage) {
    return false;
  }
  return true;
};

export default isValid;
