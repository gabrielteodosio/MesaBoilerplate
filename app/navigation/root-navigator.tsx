import React from 'react'
import fade from '@theme/transitions/fade'
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack"

import { PrimaryNavigator } from "./navigators/primary-navigator"

export type RootNavigatorParamList = {
  PrimaryStack: undefined
}

const RootNavigatorStack = createStackNavigator<RootNavigatorParamList>()

const RootNavigatorOptions: StackNavigationOptions = {
  gestureEnabled: false,
  headerTitleAlign: 'center',
  cardStyleInterpolator: ({ current, next }) => ({
    cardStyle: {
      opacity: fade(current, next)
    }
  })
}

export function RootNavigator () {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigatorStack.Navigator
          headerMode='none'
          keyboardHandlingEnabled
          initialRouteName='PrimaryStack'
          screenOptions={RootNavigatorOptions}
        >
          <RootNavigatorStack.Screen name='PrimaryStack' component={PrimaryNavigator} />
        </RootNavigatorStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
