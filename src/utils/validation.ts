export const isFieldEmpty = (email: string, password: string) => {
  if (email.trim() || password.trim()) {
    return true;
  }
  return false;
};

export function isValidEmail(email: string): boolean {
  if (!email) {
    return false;
  }
  const re = /^\S+@\S+\.\S+$/;
  console.log('Validating email:', email, re.test(email));
  return re.test(email);
}

export function isPasswordTooShort(password: string): boolean {
  if (password.length < 6) {
    return true;
  }
  return false;
}
