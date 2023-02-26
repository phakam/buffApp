import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Home from './src/views/Home';
import Display from './src/views/Display';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Capture from './src/views/Capture';
import TabBarIcon from './src/components/TabBarIcon';

const App = () => {
  const Tab = createBottomTabNavigator();

  const backgroundStyle = {
    backgroundColor: '#161722',
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Tab.Navigator screenOptions={() => styles.tabStyle}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: TabBarIcon('format-list-bulleted')
            }}
          />
          <Tab.Screen
            name="Display"
            component={Display}
            options={{
              tabBarIcon: TabBarIcon('table-edit'),
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Capture"
            component={Capture}
            options={{
              tabBarIcon: TabBarIcon('database-plus-outline')
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    tabBarActiveTintColor: '#3a7bfd',
    tabBarInactiveTintColor: '#e4e5f1',
    tabBarLabelStyle: {
      fontFamily: 'Montserrat-Regular'
    },

    tabBarStyle: {
      backgroundColor: '#161722',
      borderTopWidth: 0
    },
    headerShown: false
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  },
  highlight: {
    fontWeight: '700'
  }
});

export default App;
