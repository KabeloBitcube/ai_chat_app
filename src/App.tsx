import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChatScreen from './screens/chat_screen';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='light-content' />
      <ChatScreen />
    </SafeAreaProvider>
  );
}

export default App;
