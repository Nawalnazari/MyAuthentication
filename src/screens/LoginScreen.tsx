import React from 'react';
import {View, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/RootNavigator';
import {Button, Surface, TextInput} from 'react-native-paper';
import {Text} from 'react-native-gesture-handler';
import {useAuth} from '../services/AuthContext';
import {
  isFieldEmpty,
  isPasswordTooShort,
  isValidEmail,
} from '../utils/validation';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({navigation}: Props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {login} = useAuth();

  const handleLogin = async () => {
    if (!isFieldEmpty(email, password)) {
      alert('Please fill in all fields');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Invalid email format');
      return;
    }

    if (isPasswordTooShort(password)) {
      alert('Password must be at least 6 characters long');
      return;
    }

    try {
      await login(email, password);
      navigation.replace('Home');
    } catch (e) {
      console.warn(e);
      alert('Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Surface elevation={4} style={styles.card}>
        <TextInput
          style={{marginBottom: 8}}
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={{marginBottom: 8}}
          label="Password"
          mode="outlined"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button
          style={{marginBottom: 8}}
          mode="contained"
          onPress={handleLogin}>
          Login
        </Button>
        <Text style={{textAlign: 'center', marginBottom: 8}}>OR</Text>
        <Button mode="text" onPress={() => navigation.replace('SignUp')}>
          Sign Up
        </Button>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
});
