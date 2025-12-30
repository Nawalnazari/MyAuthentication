import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';
import RootNavigator from './src/navigations/RootNavigator';
import {Provider as PaperProvider} from 'react-native-paper';
import {AuthProvider} from './src/services/AuthContext';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </PaperProvider>
  );
}
