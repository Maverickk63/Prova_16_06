import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CadastroPage from './pages/cadastro';
import RPGpage from './pages/dashboard';
import LoginPage from './pages/login';
import RecoverPage from './pages/recover';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={LoginPage} options={{headerShown:false}}/>
        <Stack.Screen name='cadastro' component={CadastroPage}/>
        <Stack.Screen name='recover' component={RecoverPage}/>
        <Stack.Screen name='dashboard' component={RPGpage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
