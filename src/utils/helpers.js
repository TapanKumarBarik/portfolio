export const formatDate = (date) => {
  if (!date) return "";

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("en-US", options);
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
