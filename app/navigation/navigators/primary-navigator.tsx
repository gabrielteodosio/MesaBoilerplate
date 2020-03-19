import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import fade from '@theme/transitions/fade'
import { WelcomeScreen, DemoScreen } from '../../screens'

export type PrimaryNavigatorParamList = {
  Welcome: undefined
  Demo: undefined
}

const PrimaryNavigatorStack = createStackNavigator<PrimaryNavigatorParamList>()

const PrimaryNavigatorNavigatorOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
  cardStyleInterpolator: ({ current, next }) => ({
    cardStyle: {
      opacity: fade(current, next)
    }
  })
}

export function PrimaryNavigator() {
  return (
    <PrimaryNavigatorStack.Navigator
      headerMode='none'
      keyboardHandlingEnabled
      initialRouteName='Welcome'
      screenOptions={PrimaryNavigatorNavigatorOptions}
    >
      <PrimaryNavigatorStack.Screen name='Welcome' component={WelcomeScreen} />
      <PrimaryNavigatorStack.Screen name='Demo' component={DemoScreen} />
    </PrimaryNavigatorStack.Navigator>
  )
}

export const exitRoutes: string[] = ["Welcome"]
