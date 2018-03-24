const isValid = (hasError, errorMessage) => {
  if (!hasError) {
    return null;
  }
  if (errorMessage) {
    return false;
  }
  return true;
};

export default isValid;