/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Counter } from './features/counter/Counter';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from './app/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <Header />
            <Text style={styles.paragraph}>
              Edit src/App.tsx and save to reload.
            </Text>
            <View
              style={{
                backgroundColor: isDarkMode ? Colors.black : Colors.white,
              }}>
              <Counter />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
    color: 'white',
    backgroundColor: 'rgba(33,33,33,0.9)',
  },
});

export default App;
