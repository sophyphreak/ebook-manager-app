const websiteUrlIsInvalid = (website) => (
  website && !website.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)
);

export default websiteUrlIsInvalid;