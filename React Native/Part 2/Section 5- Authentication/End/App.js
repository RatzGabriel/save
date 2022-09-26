import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading, Notifications } from 'expo';
import { Button } from 'react-native';

import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';
import logger from './app/utility/logger';
import 'expo-font';
import '@unimodules/react-native-adapter';
export default function App() {
  const showNotification = () => {
    console.log('tab');
    Notifications.presentLocalNotificationAsync({
      title: 'Congratulations',
      body: 'Your order was successfully places',
    });
  };

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <Button title="Tap me" onPress={showNotification}></Button>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
