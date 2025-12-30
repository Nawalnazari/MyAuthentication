export type MockUser = {
  id: number;
  name: string;
  email: string;
  password: string;
};

const users: MockUser[] = [
  {id: 1, name: 'John', email: 'john123@gmail.com', password: '123456'},
];

export function getUsers() {
  return users;
}

export function findUserByEmail(email: string) {
  return users.find(u => u.email.toLowerCase() === email.toLowerCase());
}

export function validateCredentials(email: string, password: string) {
  const user = findUserByEmail(email);
  if (user && user.password === password) return user;
  return null;
}

export function addUser(name: string, email: string, password: string) {
  const existing = findUserByEmail(email);
  if (existing) throw new Error('User already exists');
  // console.log('Adding user:', {name, email});
  const newUser: MockUser = {id: Date.now(), name, email, password};
  users.push(newUser);
  return newUser;
}
