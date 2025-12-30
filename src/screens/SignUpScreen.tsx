import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Surface, TextInput} from 'react-native-paper';
import {Text} from 'react-native-gesture-handler';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/RootNavigator';
import {useAuth} from '../services/AuthContext';
import {
  isFieldEmpty,
  isValidEmail,
  isPasswordTooShort,
} from '../utils/validation';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export default function SignUpScreen({navigation}: Props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const {signup} = useAuth();

  const handleSignUp = async () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
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

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      await signup(name, email, password);
      navigation.replace('Home');
    } catch (e: any) {
      console.warn(e);
      alert(e?.message || 'Sign up failed');
    }
  };

  return (
    <View style={styles.container}>
      <Surface elevation={4} style={{padding: 16, margin: 16, borderRadius: 8}}>
        <Text style={{fontSize: 24, marginBottom: 16}}>Create account</Text>
        <TextInput
          style={{marginBottom: 8}}
          label="Name"
          mode="outlined"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={{marginBottom: 8}}
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={{marginBottom: 8}}
          label="Password"
          mode="outlined"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={{marginBottom: 8}}
          label="Confirm Password"
          mode="outlined"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Button
          style={{marginBottom: 8}}
          mode="contained"
          onPress={handleSignUp}>
          Sign Up
        </Button>
        <Text style={{textAlign: 'center', marginBottom: 8}}>
          Already have an account?
        </Text>
        <Button mode="text" onPress={() => navigation.navigate('Login')}>
          Go to Login
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
