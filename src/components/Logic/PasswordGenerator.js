const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const Numbers = '1234567890';
const Symbols = '!@#$%^&*()_+?/|<>';

export const PasswordGenerator = (Passlength, is1, is2, is3, is4) => {
  let newPassword = '';

  const options = [];
  if (is1) options.push(lowerCaseLetters);
  if (is2) options.push(upperCaseLetters);
  if (is3) options.push(Numbers);
  if (is4) options.push(Symbols);

  for (let i = 0; i < Passlength; i++) {
    const chosenSet = options[Math.floor(Math.random() * options.length)];
    newPassword += chosenSet.charAt(
      Math.floor(Math.random() * chosenSet.length),
    );
  }

  return newPassword;
};
