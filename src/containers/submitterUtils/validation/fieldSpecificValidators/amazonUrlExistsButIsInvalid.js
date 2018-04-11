const amazonUrlExistsButIsInvalid = (amazonUrl) => (
  amazonUrl && !amazonUrl.match(/^(http|https?:\/\/)?(www\.)?(amazon\.com)/)
);

export default amazonUrlExistsButIsInvalid;