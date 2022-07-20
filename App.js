import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import RouteScreen from './screens/RouteScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './store';


export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}>
            <Stack.Navigator>
              <Stack.Screen
                name='RouteScreen'
                component={RouteScreen}
                options={{
                  headerShown: false,
                  gestureEnabled: true
                }}

              />

            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
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
