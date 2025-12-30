import {validateCredentials, addUser} from '../mockUsers';

export async function login(email: string, password: string) {
  await new Promise(resolve => setTimeout(resolve, 500));
  const user = validateCredentials(email, password);
  if (user) {
    return {
      user: {id: user.id, name: user.name, email: user.email},
    };
  }
  throw new Error('Invalid credentials');
}

export async function signup(name: string, email: string, password: string) {
  await new Promise(resolve => setTimeout(resolve, 500));
  const newUser = addUser(name, email, password);
  console.log('New user added:', newUser);
  return {
    user: {id: newUser.id, name: newUser.name, email: newUser.email},
  };
}
