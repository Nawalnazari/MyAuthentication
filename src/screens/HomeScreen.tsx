import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Surface, Avatar, Button} from 'react-native-paper';
import {useAuth} from '../services/AuthContext';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: Props) {
  const {user, logout} = useAuth();

  const displayName = user?.name ?? 'Guest';
  const email = user?.email ?? undefined;

  const handleLogout = () => {
    logout();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Surface style={styles.card} elevation={4}>
        <Avatar.Text
          size={64}
          label={displayName.charAt(0).toUpperCase()}
          style={styles.avatar}
        />
        <Text style={styles.name}>Welcome, {displayName}</Text>
        {email ? (
          <Text style={styles.email}>Email: {email}</Text>
        ) : (
          <Text style={styles.email}>No email provided</Text>
        )}
        <Button mode="contained" onPress={handleLogout}>
          Logout
        </Button>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    width: '90%',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  avatar: {
    backgroundColor: '#6200ee',
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  email: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  spacer: {
    height: 8,
  },
});
