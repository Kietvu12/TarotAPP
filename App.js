import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import MemoriesMainView1 from './components/MemoriesMainView1';
import DetailNote from './screens/DetailNote';
import Edit from './components/Edit';
import { Home, Setting, Tarot } from './screens';
import Reactotron from 'reactotron-react-native';
import DetailTarot from './screens/DetailTarot';
import { ThemeProvider } from './components/ThemeContext';
import { MoodProvider } from './components/MoodContext'



Reactotron.configure() 
  .useReactNative() 
  .connect(); 

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    title: require("./assets/fonts/JacquesFrancois-Regular.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <MoodProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Bottom Navigator'
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="MemoriesMainView1" 
            component={MemoriesMainView1} 
          />
          <Stack.Screen 
            name="DetailNote" 
            options={{ headerShown: false }} 
            component={DetailNote} 
          />
          <Stack.Screen 
            name="Edit" 
            options={{ headerShown: false }} 
            component={Edit} 
          />
          <Stack.Screen 
            name="Tarot" 
            component={Tarot}
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="DetailTarot" 
            component={DetailTarot} 
            options={{ headerShown: false }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
      </MoodProvider>
    </ThemeProvider>
  );
}