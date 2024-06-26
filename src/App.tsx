import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SideLesson from './tabs/SideLesson';
import MainLesson from './tabs/MainLesson';
import Resources from './tabs/Resources';
import DayOne from './Lessons/DayOne/DayOne';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { DayOneProvider } from './Lessons/DayOne/DayOneContext';

export type RootStackParamList = {
  MainTabs: undefined;
  MainLesson: undefined
  SideLesson: undefined
  Resources: undefined
  Quote: undefined
  DayOne: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator<RootStackParamList>()

const Quotes = [
  "You live for a purpose, not easy pleasure everyone can have",
  "Boredom creates ideas. Ideas change the world",
  "You have to make constant small decisions in the right direction to change",
  "Do you act the way you want to act?",
  "What would the best version of yourself be doing right now?",
  "Look at where you will be if you continue going down your current path. It's either better or worse. Can you say better?",
  "Do you want to feel natural happiness? Then start getting it from natural recources",
  "Is your action aligned with your goal?",
  "What's more elaborate? Your goals or your excuses?",
  "If you want to live a life most people don't live, then do what most people won't do",
  "Distraction is the largest enemy of greatness",
  "Win the battle with yourself before you go fighting others",
  "You don't know what to do? Do nothing and you'll think of something",
  "What would you do if you were who you want to be?",
] // GET BACK ON THIS !!!

const App = (): React.JSX.Element => {
  return (
    <DayOneProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainTabs">
          <Stack.Screen 
            name="MainTabs" 
            component={MainTabs} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="DayOne" 
            component={DayOne} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DayOneProvider>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainLesson"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: 'rgba(34,36,40,1)',
          position: 'absolute',
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen 
        name="SideLesson" 
        component={SideLesson} 
        options={{ title: "Side Lessons" }} 
      />
      <Tab.Screen 
        name="MainLesson" 
        component={MainLesson} 
        options={{ title: "The Plan" }} 
      />
      <Tab.Screen 
        name="Resources" 
        component={Resources} 
        options={{ title: "Resources" }} 
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  quoteContainer: {
    backgroundColor: '#303952',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteHeaderTxt: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  quoteTxt: {
    fontSize: 30,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
