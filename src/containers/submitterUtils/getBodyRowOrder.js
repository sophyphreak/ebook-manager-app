const getBodyRowOrder = rawBody => {
  const rawRowOrder = Object.keys(rawBody);
  const rowOrder = rawRowOrder.filter(row => {
    if (rawBody[row]) {
      return true;
    }
    delete rawBody[row];
    return false;
  });
  const emailBody = rawBody;
  return {
    emailBody,
    rowOrder
  };
};

export default getBodyRowOrder;
