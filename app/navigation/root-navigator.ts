import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { PrimaryNavigator } from "./navigators/primary-navigator"
import { SafeAreaProvider } from 'react-native-safe-area-context'

// prettier-ignore
import {
} from "../screens" // eslint-disable-line @typescript-eslint/no-unused-vars

export type RootNavigatorParamList = {
  PrimaryStack: undefined
}

// export const RootNavigator = createStackNavigator(
//   {
//     PrimaryStack: { screen: PrimaryNavigator },
//   },
//   {
//     headerMode: "none",
//     navigationOptions: { gesturesEnabled: false },
//   },
// )

const RootNavigatorStack = createStackNavigator<RootNavigatorParamList>()

function RootNavigator () {
  return (
    <SafeAreaProvider>

    </SafeAreaProvider>
  )
}

export default RootNavigator
