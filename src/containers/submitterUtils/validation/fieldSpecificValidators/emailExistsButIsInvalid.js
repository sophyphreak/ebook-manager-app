const emailExistsButIsInvalid = (email) => (
  email && !email.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
);

export default emailExistsButIsInvalid;