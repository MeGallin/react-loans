export const randId = (length) => {
  const chars =
    '0123456789abcdefghijklmnopqrstxyzABCDEFGHIJKLMNOPQRSTXYZ!"£$%^&*';
  let result = '';
  for (let index = 0; index < length; index++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};
