import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import fade from '@theme/transitions/fade'
import { WelcomeScreen, DemoScreen } from '../../screens'

// export const PrimaryNavigator = createStackNavigator(
//   {
//     welcome: { screen: WelcomeScreen },
//     demo: { screen: DemoScreen },
//   },
//   {
//     headerMode: "none",
//   },
// )

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

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ["Welcome"]
