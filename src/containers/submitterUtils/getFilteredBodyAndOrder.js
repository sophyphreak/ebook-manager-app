const getFilteredBodyAndOrder = (rawBody) => {
  const rawOrder = Object.keys(rawBody);
  const rowLabelOrder = rawOrder.filter((rowLabel) => {
    if (rawBody[rowLabel]) {
      return true;
    };
    delete rawBody[rowLabel];
  });
  const bodyObject = rawBody;
  return {
    bodyObject,
    rowLabelOrder
  };
};

export default getFilteredBodyAndOrder;