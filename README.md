# MyAuthentication (React Native)

Lightweight React Native authentication demo using React Navigation, React Native Paper and a local mock user store.

Features

- Login / Sign Up screens
- Home screen showing authenticated user
- Auth state managed via React Context (`src/services/AuthContext.tsx`)
- Local mock users (no external API): `src/services/mockUsers.ts`

Quick start

1. Install dependencies

   ```sh
   npm install
   # then for iOS pods
   npx pod-install ios
   ```

2. Run Metro

   ```sh
   npm start
   ```

3. Run on device / emulator

   Android:

   ```sh
   npm run android
   ```

   iOS:

   ```sh
   npm run ios
   ```

Useful commands

- Lint: `npm run lint`
- Tests: `npm test` (jest)

Authentication (mock)

- Mock users live in `src/services/mockUsers.ts`. A default demo user is included:
  - Email: `john123@gmail.com`
  - Password: `1234`
- Signup stores new mock users in-memory (not persisted).

Where to look in the code

- `App.tsx` — app entry, PaperProvider + AuthProvider + Navigator
- `src/navigations/RootNavigator.tsx` — navigation setup
- `src/screens/LoginScreen.tsx`, `SignUpScreen.tsx`, `HomeScreen.tsx` — UI screens
- `src/services/AuthContext.tsx` — global auth state and functions (login, signup, logout)
- `src/services/authService.ts` — login/signup adapter using mockUsers
- `src/services/mockUsers.ts` — in-memory mock user store
- `src/utils/validation.ts` — input validation helpers

Notes & next steps

For login please use this credential :

- email = 'john123@gmail.com'
- password = '123456'
