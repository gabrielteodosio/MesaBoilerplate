import * as React from "react"
import { View } from "react-native"
import { RouteProp, NavigationProp } from "@react-navigation/native"

import { color } from "../../theme"
import { Screen, Text, Wallpaper } from "../../components"
import { PrimaryNavigatorParamList } from "../../navigation/navigators/primary-navigator"
import {
  FULL,
  TEXT,
  BOLD,
  TITLE,
  CONTAINER,
  TEXT_WRAPPER,
} from "./welcome.styles"

interface WelcomeScreenProps {
  children?: React.ComponentType
  route: RouteProp<PrimaryNavigatorParamList, "Welcome">
  navigation: NavigationProp<PrimaryNavigatorParamList, "Welcome">
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  return (
    <View testID="WelcomeScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Text style={TITLE} text="Welcome to mesa boilerplate" />
        <Text style={TEXT_WRAPPER}>
          <Text style={TEXT} text="Help us to combat the " />
          <Text style={[TEXT, BOLD]} text="Heinek Vírus" />
          <Text style={TEXT} text="!!" />
        </Text>
      </Screen>
    </View>
  )
}
